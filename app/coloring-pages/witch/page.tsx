import React from 'react';
import type { Metadata } from 'next';
import { getCategoryBySlug, SITE_CONFIG } from '@/lib/site-config';
import { CategoryPageTemplate } from '@/components/CategoryPageTemplate';
import { notFound } from 'next/navigation';

const category = getCategoryBySlug('witch');

export const metadata: Metadata = {
  title: 'Witch Coloring Pages – Magical Broomsticks, Cauldrons & Potions',
  description:
    'Free printable witch coloring pages. Enchanting scenes of broomstick flights, bubbling cauldrons, starry witch hats, and magical spellbooks.',
  alternates: {
    canonical: `${SITE_CONFIG.domain}/coloring-pages/witch`,
  },
  openGraph: {
    title: 'Witch Coloring Pages – Magical Scenes & Outlines',
    description:
      'Printable witch coloring pages featuring flying broomsticks, bubbling potion pots, and classic witch hats.',
    url: `${SITE_CONFIG.domain}/coloring-pages/witch`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Witch Coloring Pages – Magical Scenes & Outlines',
    description:
      'Magical printable witch coloring sheets for Halloween creative fun.',
  },
};

export default function WitchColoringPage() {
  if (!category) return notFound();
  return <CategoryPageTemplate category={category} />;
}
