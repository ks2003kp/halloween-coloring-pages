import React from 'react';
import Link from 'next/link';
import { Printer, Download, Sparkles, FileText, CheckCircle2 } from 'lucide-react';

interface FutureContentPlaceholderProps {
  categoryTitle?: string;
  categorySlug?: string;
}

export function FutureContentPlaceholder({
  categoryTitle = 'Halloween Coloring Pages',
  categorySlug,
}: FutureContentPlaceholderProps) {
  return (
    <section className="my-10 rounded-2xl border border-dashed border-purple-800/60 bg-[#160d26]/80 p-6 sm:p-8 text-stone-200">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-6 border-b border-purple-900/40">
          <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6 text-orange-400" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-stone-100">
              {categoryTitle} Collection In Curation
            </h3>
            <p className="text-sm text-stone-400 mt-1">
              High-resolution printable sheets are being prepared and will be added here with free instant PDF downloads.
            </p>
          </div>
        </div>

        {/* What to expect grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 text-xs text-stone-300">
          <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-900/30 space-y-1.5">
            <div className="flex items-center gap-1.5 font-semibold text-orange-300">
              <Printer className="w-4 h-4" />
              <span>Standard 8.5&quot; × 11&quot;</span>
            </div>
            <p className="text-stone-400">
              Formatted for standard US Letter &amp; A4 desktop printers with clean margins.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-900/30 space-y-1.5">
            <div className="flex items-center gap-1.5 font-semibold text-orange-300">
              <FileText className="w-4 h-4" />
              <span>Crisp Vector Outlines</span>
            </div>
            <p className="text-stone-400">
              Sharp 300 DPI linework designed for clean coloring with crayons, pencils, or markers.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-900/30 space-y-1.5">
            <div className="flex items-center gap-1.5 font-semibold text-orange-300">
              <CheckCircle2 className="w-4 h-4" />
              <span>Free &amp; Unrestricted</span>
            </div>
            <p className="text-stone-400">
              100% free for families, homeschoolers, and classrooms without mandatory sign-ups.
            </p>
          </div>
        </div>

        {/* Architecture Spec Notice */}
        <div className="p-4 rounded-xl bg-[#0f0a1c] border border-purple-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            <span className="font-semibold text-stone-300 block mb-0.5">
              Production Content Architecture Ready
            </span>
            <span>
              Each upcoming coloring sheet will feature instant 1-click browser printing, PDF download, and thematic tags.
            </span>
          </div>
          <Link
            href="/coloring-pages"
            className="shrink-0 px-4 py-2 rounded-lg bg-purple-900/50 hover:bg-purple-800/60 text-orange-300 font-semibold transition-colors"
          >
            Browse All Categories
          </Link>
        </div>
      </div>
    </section>
  );
}
