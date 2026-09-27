import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getColoringPageBySlug, getAllPublishedSlugs } from '@/lib/coloring-pages-types';
import { getCategoryBySlug, SITE_CONFIG } from '@/lib/site-config';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Printer, Download, Sparkles, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPublishedSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sheet = getColoringPageBySlug(slug);

  if (!sheet) {
    return {
      title: 'Coloring Page Not Found',
    };
  }

  return {
    title: `${sheet.title} – Free Printable Sheet`,
    description: sheet.description,
    alternates: {
      canonical: `${SITE_CONFIG.domain}/coloring-pages/${sheet.slug}`,
    },
    openGraph: {
      title: sheet.title,
      description: sheet.description,
      url: `${SITE_CONFIG.domain}/coloring-pages/${sheet.slug}`,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: sheet.imageSrc,
          alt: sheet.altText,
        },
      ],
    },
  };
}

export default async function DynamicColoringSheetPage({ params }: PageProps) {
  const { slug } = await params;
  const sheet = getColoringPageBySlug(slug);

  // If no sheet matches the slug in the registry, invoke 404
  if (!sheet) {
    notFound();
  }

  const category = getCategoryBySlug(sheet.categorySlug);

  return (
    <div className="w-full bg-[#0d0818] py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { name: 'Coloring Pages', href: '/coloring-pages' },
            ...(category ? [{ name: category.shortTitle, href: category.href }] : []),
            { name: sheet.title, href: `/coloring-pages/${sheet.slug}` },
          ]}
        />

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">
                {category?.title || 'Halloween Coloring Sheet'}
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-100 mt-1">
                {sheet.title}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={sheet.pdfUrl}
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-400 text-stone-900 font-bold text-xs shadow-md transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
              <button
                type="button"
                onClick={() => {}}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-950/70 hover:bg-purple-900/80 border border-purple-800/40 text-stone-200 font-semibold text-xs transition-colors"
              >
                <Printer className="w-4 h-4 text-orange-400" />
                <span>Print Sheet</span>
              </button>
            </div>
          </div>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            {sheet.description}
          </p>

          <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-900/40 text-xs text-stone-400">
            Formatted for standard 8.5&quot; × 11&quot; US Letter / A4 paper.
          </div>
        </div>
      </div>
    </div>
  );
}
