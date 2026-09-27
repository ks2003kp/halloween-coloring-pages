import React from 'react';
import type { Metadata } from 'next';
import { getCategoryBySlug, SITE_CONFIG } from '@/lib/site-config';
import { CategoryPageTemplate } from '@/components/CategoryPageTemplate';
import { notFound } from 'next/navigation';

const category = getCategoryBySlug('easy');

export const metadata: Metadata = {
  title: 'Easy Halloween Coloring Pages – Thick Outlines for Beginners & Toddlers',
  description:
    'Free easy Halloween coloring pages with bold lines and large shapes. Perfect for toddlers, preschool crafts, and young beginner colorists.',
  alternates: {
    canonical: `${SITE_CONFIG.domain}/coloring-pages/easy`,
  },
  openGraph: {
    title: 'Easy Halloween Coloring Pages – Thick Outlines',
    description:
      'Simple, bold-line Halloween coloring sheets designed for toddlers, preschoolers, and early learners.',
    url: `${SITE_CONFIG.domain}/coloring-pages/easy`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Easy Halloween Coloring Pages – Thick Outlines',
    description:
      'Simple, thick-lined Halloween coloring pages for toddlers and preschool activities.',
  },
};

export default function EasyColoringPage() {
  if (!category) return notFound();
  return <CategoryPageTemplate category={category} />;
}
