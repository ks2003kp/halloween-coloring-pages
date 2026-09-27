import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';
import { getBlogPosts } from '@/lib/blog';
import { COLORING_PAGES_REGISTRY } from '@/lib/coloring-pages-types';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.domain;
  const buildDate = new Date('2026-09-26');

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/coloring-pages`,
      lastModified: buildDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: buildDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: buildDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: buildDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Category landing pages
  const categoryRoutes: MetadataRoute.Sitemap = SITE_CONFIG.categories.map((category) => ({
    url: `${baseUrl}${category.href}`,
    lastModified: buildDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Automatically discover published MDX blog posts
  const publishedPosts = await getBlogPosts(false);
  const blogRoutes: MetadataRoute.Sitemap = publishedPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated || post.date),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Automatically include published coloring pages from registry
  const coloringSheetRoutes: MetadataRoute.Sitemap = COLORING_PAGES_REGISTRY.map((sheet) => ({
    url: `${baseUrl}/coloring-pages/${sheet.slug}`,
    lastModified: new Date(sheet.dateAdded),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes, ...blogRoutes, ...coloringSheetRoutes];
}
