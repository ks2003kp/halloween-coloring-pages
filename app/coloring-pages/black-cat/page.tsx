import React from 'react';
import type { Metadata } from 'next';
import { getCategoryBySlug, SITE_CONFIG } from '@/lib/site-config';
import { CategoryPageTemplate } from '@/components/CategoryPageTemplate';
import { notFound } from 'next/navigation';

const category = getCategoryBySlug('black-cat');

export const metadata: Metadata = {
  title: 'Black Cat Coloring Pages – Cute Kittens & Halloween Felines',
  description:
    'Free black cat coloring pages for Halloween. Cute kittens wearing witch hats, mysterious fence felines under the moon, and festive autumn art.',
  alternates: {
    canonical: `${SITE_CONFIG.domain}/coloring-pages/black-cat`,
  },
  openGraph: {
    title: 'Black Cat Coloring Pages – Cute Kittens & Festive Felines',
    description:
      'Printable black cat coloring pages. Adorable kittens in witch hats, sleek cats under the full moon, and playful harvest artwork.',
    url: `${SITE_CONFIG.domain}/coloring-pages/black-cat`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Black Cat Coloring Pages – Festive Felines',
    description:
      'Free printable black cat coloring pages for Halloween craft time.',
  },
};

export default function BlackCatColoringPage() {
  if (!category) return notFound();
  return <CategoryPageTemplate category={category} />;
}
