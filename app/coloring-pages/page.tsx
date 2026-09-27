import React from 'react';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CategoryCard } from '@/components/CategoryCard';
import { FutureContentPlaceholder } from '@/components/FutureContentPlaceholder';
import { Sparkles, Printer, Layers, Filter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Printable Halloween Coloring Pages Library',
  description:
    'Browse our complete library of free printable Halloween coloring pages. Discover themes for kids, adults, cute characters, pumpkins, ghosts, witches, and cats.',
  alternates: {
    canonical: `${SITE_CONFIG.domain}/coloring-pages`,
  },
  openGraph: {
    title: 'Free Printable Halloween Coloring Pages Library',
    description:
      'Browse our complete library of free printable Halloween coloring pages for kids and adults. Clean outlines ready to print.',
    url: `${SITE_CONFIG.domain}/coloring-pages`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Printable Halloween Coloring Pages Library',
    description:
      'Browse our complete library of free printable Halloween coloring pages for kids and adults.',
  },
};

export default function ColoringPagesHubPage() {
  return (
    <div className="w-full bg-[#0d0818] py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={[{ name: 'Coloring Pages', href: '/coloring-pages' }]} />

        {/* Page Header */}
        <div className="space-y-4 max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/40 text-xs font-semibold text-orange-300">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>Complete Library Hub</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-50 tracking-tight [text-wrap:balance]">
            Halloween Coloring Pages Library
          </h1>

          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            Welcome to our central collection of free printable Halloween coloring sheets. Select a category below to explore curated designs tailored for young artists, classroom groups, family craft nights, and adult colorists.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-stone-400">
            <span className="flex items-center gap-1.5">
              <Printer className="w-4 h-4 text-orange-400" />
              US Letter &amp; A4 Compatible
            </span>
            <span className="flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-amber-400" />
              8 Curated Themes
            </span>
            <span className="flex items-center gap-1.5">
              <Filter className="w-4 h-4 text-purple-400" />
              Sorted by Age &amp; Complexity
            </span>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-14">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-purple-900/40">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-100">
              Browse by Category
            </h2>
            <span className="text-xs text-stone-400">
              {SITE_CONFIG.categories.length} Handcrafted Categories
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SITE_CONFIG.categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>

        {/* Transparent Future Content Area */}
        <FutureContentPlaceholder
          categoryTitle="Printable Sheet Library"
        />

        {/* Informational Printing Guide */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#140b25] border border-purple-900/40 space-y-4">
          <h2 className="text-lg font-bold text-stone-100">
            How to Get the Best Results from Your Printable Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-stone-300">
            <div className="space-y-1">
              <h3 className="font-semibold text-orange-300 text-sm">Paper Recommendations</h3>
              <p className="text-stone-400 leading-relaxed">
                For crayons and colored pencils, standard 20 lb copy paper works well. For markers, gel pens, or light watercolor, consider 60–65 lb cardstock to prevent bleed-through.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-orange-300 text-sm">Printer Setup</h3>
              <p className="text-stone-400 leading-relaxed">
                In your printer dialogue, choose &quot;Fit to Printable Area&quot; or &quot;100% Scale&quot; with portrait orientation. Set print quality to &quot;High&quot; or &quot;Best&quot; for crisp outlines.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-orange-300 text-sm">Classroom &amp; Group Use</h3>
              <p className="text-stone-400 leading-relaxed">
                Teachers and group leaders are welcome to print multiple copies for students, daycare activities, library sessions, and community Halloween parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
