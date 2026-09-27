import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/site-config';
import {
  getBlogPostBySlug,
  getAllPublishedBlogSlugs,
  getRelatedPosts,
} from '@/lib/blog';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { MdxContent } from '@/components/MdxContent';
import { TableOfContents } from '@/components/TableOfContents';
import { RelatedArticles } from '@/components/RelatedArticles';
import { JsonLd, getArticleSchema } from '@/components/JsonLd';
import { Calendar, Clock, ArrowLeft, Palette, RefreshCw } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllPublishedBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug, false);

  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  const postUrl = `${SITE_CONFIG.domain}/blog/${post.slug}`;
  const ogImageUrl = post.featuredImage
    ? post.featuredImage.startsWith('http')
      ? post.featuredImage
      : `${SITE_CONFIG.domain}${post.featuredImage}`
    : undefined;

  return {
    title: `${post.title} – Halloween Guides`,
    description: post.description,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: postUrl,
      siteName: SITE_CONFIG.name,
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: [post.author],
      tags: post.tags,
      ...(ogImageUrl ? { images: [{ url: ogImageUrl, alt: post.featuredImageAlt || post.title }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      ...(ogImageUrl ? { images: [ogImageUrl] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug, false);

  // Return notFound if the article doesn't exist or isn't published
  if (!post) {
    notFound();
  }

  const postUrl = `${SITE_CONFIG.domain}/blog/${post.slug}`;
  const ogImageUrl = post.featuredImage
    ? post.featuredImage.startsWith('http')
      ? post.featuredImage
      : `${SITE_CONFIG.domain}${post.featuredImage}`
    : undefined;

  const relatedPosts = await getRelatedPosts(post, 2);

  return (
    <div className="w-full bg-[#0d0818] py-8 sm:py-12">
      <JsonLd
        data={getArticleSchema({
          title: post.title,
          description: post.description,
          url: postUrl,
          datePublished: post.date,
          dateModified: post.updated,
          authorName: post.author,
          imageUrl: ogImageUrl,
        })}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { name: 'Blog', href: '/blog' },
            { name: post.title, href: `/blog/${post.slug}` },
          ]}
        />

        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-400 hover:text-orange-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Guides</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-4 mb-8">
          {/* Metadata Row: Category, Dates, Reading Time */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-stone-400">
            <span className="font-semibold text-orange-400">
              {post.category}
            </span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-stone-500" />
              <time dateTime={post.date}>
                Published{' '}
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            </span>
            {post.updated && (
              <>
                <span aria-hidden="true" className="text-stone-600">·</span>
                <span className="flex items-center gap-1.5 text-stone-400">
                  <RefreshCw className="w-3 h-3 text-emerald-400" />
                  <time dateTime={post.updated}>
                    Updated{' '}
                    {new Date(post.updated).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                </span>
              </>
            )}
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span className="flex items-center gap-1 text-stone-400">
              <Clock className="w-3.5 h-3.5 text-stone-500" />
              <span>{post.readingTime}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-50 tracking-tight leading-[1.15] [text-wrap:balance]">
            {post.title}
          </h1>

          <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-3xl">
            {post.description}
          </p>

          <div className="text-xs text-stone-500 pt-1">
            <span>By </span>
            <span className="text-stone-300 font-medium">{post.author}</span>
          </div>
        </header>

        {/* Featured Image if present */}
        {post.featuredImage && (
          <div className="relative w-full aspect-video sm:aspect-[21/9] rounded-2xl overflow-hidden border border-purple-900/50 bg-[#160d26] mb-8 shadow-xl">
            <Image
              src={post.featuredImage}
              alt={post.featuredImageAlt || post.title}
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* Table of Contents (shown when article has >= 2 headings) */}
        <TableOfContents headings={post.headings} />

        {/* Article Body */}
        <div className="mt-8">
          <MdxContent content={post.content} />
        </div>

        {/* Tags unboxed list */}
        {post.tags.length > 0 && (
          <div className="mt-10 pt-6 border-t border-purple-900/40 flex flex-wrap items-center gap-2 text-xs text-stone-400">
            <span className="text-stone-500 font-medium">Topics:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-900/40 text-stone-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Internal Link Callout to Coloring Pages Library */}
        <div className="mt-12 p-6 rounded-2xl bg-[#170e28] border border-purple-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-stone-100 flex items-center gap-2">
              <Palette className="w-4 h-4 text-orange-400" />
              <span>Looking for Outlines to Practice On?</span>
            </h3>
            <p className="text-xs text-stone-400">
              Browse our printable collections of pumpkins, friendly ghosts, witches, and cats.
            </p>
          </div>
          <Link
            href="/coloring-pages"
            className="shrink-0 px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-400 text-stone-900 font-bold text-xs shadow-md transition-colors"
          >
            Explore Coloring Pages
          </Link>
        </div>

        {/* Related Articles Component (only shows real published posts, hides if none) */}
        <RelatedArticles articles={relatedPosts} />
      </div>
    </div>
  );
}
