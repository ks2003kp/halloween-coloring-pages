import React from 'react';
import type { Metadata } from 'next';
import { getCategoryBySlug, SITE_CONFIG } from '@/lib/site-config';
import { CategoryPageTemplate } from '@/components/CategoryPageTemplate';
import { notFound } from 'next/navigation';

const category = getCategoryBySlug('ghost');

export const metadata: Metadata = {
  title: 'Ghost Coloring Pages – Friendly Phantoms & Spooky Spirits',
  description:
    'Printable ghost coloring pages featuring friendly floating spirits, trick-or-treating phantoms, and classic spooky sheets to print and color.',
  alternates: {
    canonical: `${SITE_CONFIG.domain}/coloring-pages/ghost`,
  },
  openGraph: {
    title: 'Ghost Coloring Pages – Friendly Phantoms',
    description:
      'Explore free printable ghost coloring sheets. Friendly sheet phantoms, boo signs, and playful spirits for kids and adults.',
    url: `${SITE_CONFIG.domain}/coloring-pages/ghost`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ghost Coloring Pages – Friendly Phantoms',
    description:
      'Free printable ghost coloring pages for Halloween celebrations.',
  },
};

export default function GhostColoringPage() {
  if (!category) return notFound();
  return <CategoryPageTemplate category={category} />;
}
