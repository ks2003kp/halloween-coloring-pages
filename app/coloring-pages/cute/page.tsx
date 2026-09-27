import React from 'react';
import type { Metadata } from 'next';
import { getCategoryBySlug, SITE_CONFIG } from '@/lib/site-config';
import { CategoryPageTemplate } from '@/components/CategoryPageTemplate';
import { notFound } from 'next/navigation';

const category = getCategoryBySlug('cute');

export const metadata: Metadata = {
  title: 'Cute Halloween Coloring Pages – Kawaii Ghosts & Friendly Monsters',
  description:
    'Download cute Halloween coloring pages with kawaii characters, smiling pumpkins, sweet candy corn, and gentle friendly spirits for all ages.',
  alternates: {
    canonical: `${SITE_CONFIG.domain}/coloring-pages/cute`,
  },
  openGraph: {
    title: 'Cute Halloween Coloring Pages – Kawaii Characters',
    description:
      'Heartwarming, cute Halloween coloring pages. Kawaii pumpkins, friendly ghosts, and sweet holiday treats.',
    url: `${SITE_CONFIG.domain}/coloring-pages/cute`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cute Halloween Coloring Pages – Kawaii Characters',
    description:
      'Sweet, charming Halloween coloring pages for kids and kawaii lovers.',
  },
};

export default function CuteColoringPage() {
  if (!category) return notFound();
  return <CategoryPageTemplate category={category} />;
}
