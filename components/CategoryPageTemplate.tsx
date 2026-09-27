import React from 'react';
import Link from 'next/link';
import { CategoryItem, SITE_CONFIG, getCategoryBySlug } from '@/lib/site-config';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FutureContentPlaceholder } from '@/components/FutureContentPlaceholder';
import { getCategoryIllustration } from '@/components/CategoryIllustrations';
import { CategoryCard } from '@/components/CategoryCard';
import { Printer, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface CategoryPageTemplateProps {
  category: CategoryItem;
}

export function CategoryPageTemplate({ category }: CategoryPageTemplateProps) {
  const relatedCategories = category.relatedSlugs
    .map((slug) => getCategoryBySlug(slug))
    .filter((c): c is CategoryItem => Boolean(c));

  return (
    <div className="w-full bg-[#0d0818] py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { name: 'Coloring Pages', href: '/coloring-pages' },
            { name: category.shortTitle, href: category.href },
          ]}
        />

        {/* Hero Header for Category */}
        <div className="rounded-3xl bg-gradient-to-b from-[#180e2d] to-[#120a22] border border-purple-900/40 p-6 sm:p-10 mb-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 text-xs text-stone-400">
                <span className="font-semibold text-orange-400">{category.difficulty}</span>
                <span aria-hidden="true">·</span>
                <span>{category.recommendedFor}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-50 tracking-tight [text-wrap:balance]">
                {category.title}
              </h1>

              <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
                {category.description}
              </p>
            </div>

            {/* Illustration Emblem */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-purple-950/70 border border-purple-800/40 p-3 flex items-center justify-center shrink-0 shadow-lg">
              {getCategoryIllustration(category.slug, 'w-20 h-20')}
            </div>
          </div>

          {/* Quick Specifications */}
          <div className="mt-8 pt-6 border-t border-purple-900/40 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-300">
            <div className="flex items-center gap-2">
              <Printer className="w-4 h-4 text-orange-400 shrink-0" />
              <span>Standard 8.5&quot; × 11&quot; US Letter / A4</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>High-contrast black line outlines</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Free for personal &amp; classroom use</span>
            </div>
          </div>
        </div>

        {/* Detailed Category Overview */}
        <section className="space-y-6 text-stone-300 leading-relaxed mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-100">
            About This Collection
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            {category.longDescription}
          </p>

          {/* Key Motifs & Themes */}
          <div className="p-5 rounded-2xl bg-[#150d26] border border-purple-900/30">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-orange-400 mb-3">
              Included Themes &amp; Subjects
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {category.themes.map((theme) => (
                <span
                  key={theme}
                  className="px-3 py-1.5 rounded-lg bg-purple-950/60 border border-purple-900/40 text-stone-200"
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Future Content Notice */}
        <FutureContentPlaceholder
          categoryTitle={category.title}
          categorySlug={category.slug}
        />

        {/* Internal Linking: Related Categories */}
        {relatedCategories.length > 0 && (
          <section className="mt-14 pt-10 border-t border-purple-900/40">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                  Continue Exploring
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-100 mt-0.5">
                  Related Halloween Categories
                </h2>
              </div>
              <Link
                href="/coloring-pages"
                className="text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1"
              >
                <span>All Categories</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {relatedCategories.map((related) => (
                <CategoryCard key={related.id} category={related} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
