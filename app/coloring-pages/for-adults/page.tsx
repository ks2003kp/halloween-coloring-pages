import React from 'react';
import type { Metadata } from 'next';
import { getCategoryBySlug, SITE_CONFIG } from '@/lib/site-config';
import { CategoryPageTemplate } from '@/components/CategoryPageTemplate';
import { notFound } from 'next/navigation';

const category = getCategoryBySlug('for-adults');

export const metadata: Metadata = {
  title: 'Halloween Coloring Pages for Adults – Intricate Printable Designs',
  description:
    'Detailed, intricate Halloween coloring pages for adults and teens. Explore gothic architecture, ornate pumpkins, and relaxing autumn mandalas.',
  alternates: {
    canonical: `${SITE_CONFIG.domain}/coloring-pages/for-adults`,
  },
  openGraph: {
    title: 'Halloween Coloring Pages for Adults – Intricate Designs',
    description:
      'Explore sophisticated printable Halloween coloring sheets for adults. Ornate gothic mansions, detailed botanicals, and meditative autumn art.',
    url: `${SITE_CONFIG.domain}/coloring-pages/for-adults`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Halloween Coloring Pages for Adults – Intricate Designs',
    description:
      'Detailed, mindful Halloween coloring pages for adults and teens.',
  },
};

export default function AdultsColoringPage() {
  if (!category) return notFound();
  return <CategoryPageTemplate category={category} />;
}
