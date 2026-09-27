import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog';
import { BookOpen, ArrowRight, Clock } from 'lucide-react';

interface RelatedArticlesProps {
  articles: BlogPost[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  // If no related articles exist, hide section gracefully
  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <section className="mt-14 pt-10 border-t border-purple-900/40">
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">
            Keep Reading
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-100 mt-1">
            Related Halloween Guides
          </h2>
        </div>
        <Link
          href="/blog"
          className="text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1"
        >
          <span>All Guides</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {articles.map((article) => (
          <div
            key={article.slug}
            className="group rounded-2xl bg-[#170e28] border border-purple-900/40 p-6 flex flex-col justify-between hover:border-orange-500/50 hover:bg-[#201438] transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between gap-2 text-xs text-stone-400 mb-3">
                <span className="font-semibold text-orange-300">{article.category}</span>
                <span className="flex items-center gap-1 text-stone-500">
                  <Clock className="w-3 h-3" />
                  <span>{article.readingTime}</span>
                </span>
              </div>

              <h3 className="text-lg font-bold text-stone-100 group-hover:text-orange-300 transition-colors mb-2">
                <Link href={`/blog/${article.slug}`}>
                  {article.title}
                </Link>
              </h3>

              <p className="text-stone-400 text-sm line-clamp-2 leading-relaxed mb-4">
                {article.description}
              </p>
            </div>

            <div className="pt-3 border-t border-purple-900/30 flex items-center justify-between text-xs font-semibold text-orange-400 group-hover:text-orange-300">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read Guide</span>
              </span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
