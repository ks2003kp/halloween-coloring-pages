import React from 'react';
import type { Metadata } from 'next';
import { getCategoryBySlug, SITE_CONFIG } from '@/lib/site-config';
import { CategoryPageTemplate } from '@/components/CategoryPageTemplate';
import { notFound } from 'next/navigation';

const category = getCategoryBySlug('for-kids');

export const metadata: Metadata = {
  title: 'Free Halloween Coloring Pages for Kids – Fun Printable Outlines',
  description:
    'Free printable Halloween coloring pages for kids. Friendly pumpkins, cheerful phantoms, and cute trick-or-treaters designed for young artists.',
  alternates: {
    canonical: `${SITE_CONFIG.domain}/coloring-pages/for-kids`,
  },
  openGraph: {
    title: 'Free Halloween Coloring Pages for Kids',
    description:
      'Fun, friendly printable Halloween coloring pages for kids. Cheerful pumpkins, happy ghosts, and trick-or-treat candy scenes.',
    url: `${SITE_CONFIG.domain}/coloring-pages/for-kids`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Halloween Coloring Pages for Kids',
    description:
      'Printable Halloween coloring sheets crafted for children, toddlers, and classroom fun.',
  },
};

export default function KidsColoringPage() {
  if (!category) return notFound();
  return <CategoryPageTemplate category={category} />;
}
