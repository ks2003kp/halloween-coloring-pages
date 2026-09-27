import React from 'react';
import type { Metadata } from 'next';
import { getCategoryBySlug, SITE_CONFIG } from '@/lib/site-config';
import { CategoryPageTemplate } from '@/components/CategoryPageTemplate';
import { notFound } from 'next/navigation';

const category = getCategoryBySlug('pumpkin');

export const metadata: Metadata = {
  title: 'Pumpkin Coloring Pages – Printable Jack-o\'-Lanterns & Harvest Patches',
  description:
    'Free printable pumpkin coloring pages. Explore carved jack-o\'-lantern smiles, autumn pumpkin patches, and cozy harvest scenes to print and color.',
  alternates: {
    canonical: `${SITE_CONFIG.domain}/coloring-pages/pumpkin`,
  },
  openGraph: {
    title: 'Pumpkin Coloring Pages – Printable Jack-o\'-Lanterns',
    description:
      'Harvest pumpkin and jack-o\'-lantern coloring pages to print at home. Cheerful carved faces and autumn patch art.',
    url: `${SITE_CONFIG.domain}/coloring-pages/pumpkin`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pumpkin Coloring Pages – Printable Jack-o\'-Lanterns',
    description:
      'Free printable pumpkin and jack-o\'-lantern coloring sheets for all ages.',
  },
};

export default function PumpkinColoringPage() {
  if (!category) return notFound();
  return <CategoryPageTemplate category={category} />;
}
