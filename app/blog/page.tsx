import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/site-config';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { getBlogPosts } from '@/lib/blog';
import { BookOpen, Sparkles, Clock, Calendar, ArrowRight, Compass } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Halloween Crafts & Coloring Guides – Blog',
  description:
    'Helpful Halloween coloring tutorials, craft ideas, printing advice, and seasonal tips from Halloween Coloring Pages.',
  alternates: {
    canonical: `${SITE_CONFIG.domain}/blog`,
  },
  openGraph: {
    title: 'Halloween Crafts & Coloring Guides – Blog',
    description:
      'Helpful Halloween coloring tutorials, craft ideas, printing advice, and seasonal tips.',
    url: `${SITE_CONFIG.domain}/blog`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Halloween Crafts & Coloring Guides – Blog',
    description:
      'Halloween coloring tutorials, craft ideas, and printing advice.',
  },
};

export default async function BlogIndexPage() {
  const publishedPosts = await getBlogPosts(false);

  return (
    <div className="w-full bg-[#0d0818] py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ name: 'Blog', href: '/blog' }]} />

        {/* Page Header */}
        <div className="space-y-4 max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/40 text-xs font-semibold text-orange-300">
            <BookOpen className="w-3.5 h-3.5 text-orange-400" />
            <span>Guides &amp; Articles</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-50 tracking-tight [text-wrap:balance]">
            Halloween Coloring Guides &amp; Crafts
          </h1>

          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            Discover printing tutorials, color blending guides, and seasonal craft ideas designed to inspire creativity with your printable Halloween coloring sheets.
          </p>
        </div>

        {/* Dynamic Articles Listing or Polished Empty State */}
        {publishedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publishedPosts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-2xl bg-[#170e28] border border-purple-900/40 overflow-hidden flex flex-col justify-between hover:border-orange-500/50 hover:bg-[#1f1335] hover:shadow-xl hover:shadow-purple-950/50 transition-all duration-300"
              >
                <div>
                  {/* Featured Image if available */}
                  {post.featuredImage && (
                    <div className="relative w-full aspect-video bg-purple-950/60 overflow-hidden border-b border-purple-900/40">
                      <Image
                        src={post.featuredImage}
                        alt={post.featuredImageAlt || post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    {/* Unboxed Metadata */}
                    <div className="flex items-center justify-between text-xs text-stone-400 mb-3">
                      <span className="font-semibold text-orange-400">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-stone-500">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readingTime}</span>
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-stone-100 group-hover:text-orange-300 transition-colors mb-2.5 [text-wrap:balance]">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-stone-400 text-sm leading-relaxed line-clamp-3 mb-4">
                      {post.description}
                    </p>

                    <div className="flex items-center gap-1 text-xs text-stone-500">
                      <Calendar className="w-3.5 h-3.5" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </time>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-purple-900/30 mt-4 flex items-center justify-between text-xs font-semibold text-orange-400 group-hover:text-orange-300">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Honest, Attractive Empty State */
          <div className="rounded-3xl border border-dashed border-purple-800/60 bg-[#160d26]/80 p-8 sm:p-12 text-center max-w-3xl mx-auto my-6 space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mx-auto">
              <Sparkles className="w-8 h-8 text-orange-400" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100 tracking-tight">
                New Halloween Guides Are Coming Soon
              </h2>
              <p className="text-stone-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                We are authoring detailed printing tutorials, marker blending techniques, and holiday craft guides. As articles are published, they will automatically appear here.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/coloring-pages"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-stone-900 font-bold text-sm shadow-md transition-colors"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Coloring Pages Library</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-950/60 hover:bg-purple-900/70 border border-purple-800/40 text-stone-200 text-sm font-semibold transition-colors"
              >
                <span>About Our Project</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
