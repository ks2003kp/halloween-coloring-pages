import React from 'react';
import Link from 'next/link';
import { CategoryItem } from '@/lib/site-config';
import { getCategoryIllustration } from './CategoryIllustrations';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: CategoryItem;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="group relative rounded-2xl bg-[#1b122f] border border-purple-900/40 p-5 sm:p-6 transition-all duration-300 hover:border-orange-500/50 hover:bg-[#23173d] hover:shadow-xl hover:shadow-purple-950/50 flex flex-col justify-between">
      {/* Top row: Illustration & Target age/difficulty unboxed metadata */}
      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="w-16 h-16 rounded-xl bg-purple-950/60 p-2 border border-purple-800/40 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            {getCategoryIllustration(category.slug, 'w-12 h-12')}
          </div>
          <div className="text-right text-xs text-stone-400">
            <span className="block font-medium text-orange-300">{category.difficulty}</span>
            <span className="block text-[11px] text-stone-500">{category.recommendedFor}</span>
          </div>
        </div>

        {/* Card Title */}
        <h3 className="text-lg font-bold text-stone-100 group-hover:text-orange-300 transition-colors mb-2">
          <Link href={category.href} className="focus:outline-none">
            <span className="absolute inset-0 z-10" aria-hidden="true" />
            {category.title}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-sm text-stone-400 leading-relaxed mb-4">
          {category.description}
        </p>

        {/* Clean unboxed theme metadata list */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-500 mb-4">
          {category.themes.slice(0, 3).map((theme, i) => (
            <React.Fragment key={theme}>
              <span>{theme}</span>
              {i < 2 && <span aria-hidden="true">·</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Action link */}
      <div className="pt-3 border-t border-purple-900/30 flex items-center justify-between text-xs font-semibold text-orange-400 group-hover:text-orange-300">
        <span>Explore Category Sheets</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
}
