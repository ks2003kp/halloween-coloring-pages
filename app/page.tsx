import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/site-config';
import { HalloweenScene } from '@/components/HalloweenScene';
import { CategoryCard } from '@/components/CategoryCard';
import { FAQ } from '@/components/FAQ';
import { Sparkles, Printer, Palette, Compass, ArrowRight, Heart } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 bg-gradient-to-b from-[#140b28] via-[#0f081f] to-[#0d0818]">
        {/* Subtle decorative glow accents */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-72 bg-purple-900/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Hero Column: Copy & Actions */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/40 text-xs font-semibold text-orange-300">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <span>Free &amp; Printable Autumn Collection</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-stone-50 tracking-tight leading-[1.1] [text-wrap:balance]">
                Halloween Coloring Pages
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-stone-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Free Halloween coloring pages for kids &amp; adults. Download clean, high-resolution outlines of friendly pumpkins, gentle ghosts, magical witches, and festive autumn art.
              </p>

              {/* Two Main CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/coloring-pages"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-stone-900 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:from-orange-400 hover:to-amber-400 rounded-xl shadow-lg shadow-orange-950/50 hover:shadow-orange-700/30 transition-all duration-200 active:scale-95"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Explore Coloring Pages</span>
                </Link>

                <a
                  href="#categories"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-stone-200 bg-purple-950/50 hover:bg-purple-900/60 border border-purple-800/50 rounded-xl hover:text-white transition-colors"
                >
                  <Compass className="w-4 h-4 text-orange-400" />
                  <span>Browse Categories</span>
                </a>
              </div>

              {/* Quick Trust Highlights - Zero fake stats */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-stone-400">
                <span className="flex items-center gap-1.5">
                  <Printer className="w-4 h-4 text-orange-400" />
                  Standard US Letter &amp; A4
                </span>
                <span aria-hidden="true" className="hidden sm:inline">·</span>
                <span className="flex items-center gap-1.5">
                  <Palette className="w-4 h-4 text-amber-400" />
                  All Age &amp; Skill Levels
                </span>
                <span aria-hidden="true" className="hidden sm:inline">·</span>
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-rose-400" />
                  100% Free to Print
                </span>
              </div>
            </div>

            {/* Right Hero Column: CSS Illustrated Halloween Scene */}
            <div className="lg:col-span-5 flex justify-center">
              <HalloweenScene />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Short Introduction Section */}
      <section className="py-14 sm:py-18 bg-[#110920] border-y border-purple-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-semibold tracking-wider text-orange-400 uppercase">
            Creative Autumn Tradition
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100 tracking-tight">
            Free Halloween Coloring Pages
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Halloween Coloring Pages is designed as a focused, accessible library of printable holiday outlines. Whether you are a parent organizing a cozy afternoon activity, an elementary teacher preparing festive classroom craft centers, or an adult seeking a soothing creative pastime, our collections offer clean black line artwork optimized for standard desktop printers.
          </p>
          <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            From cheerful, smiling pumpkins for preschool hands to intricate gothic manors and autumn mandalas for experienced colorists, every page is created to inspire imagination and celebrate the season without subscription barriers.
          </p>
        </div>
      </section>

      {/* 3. Featured Categories Section */}
      <section id="categories" className="py-16 sm:py-24 bg-[#0d0818] scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold tracking-wider text-orange-400 uppercase">
                Curated Themes
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-100 tracking-tight mt-1">
                Featured Categories
              </h2>
              <p className="text-stone-400 text-sm sm:text-base mt-2 max-w-xl">
                Explore handpicked collections arranged by age, style, and seasonal motifs.
              </p>
            </div>
            <Link
              href="/coloring-pages"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors"
            >
              <span>View All Coloring Categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 8 Category Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SITE_CONFIG.categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Use Halloween Coloring Pages? */}
      <section className="py-16 sm:py-20 bg-[#120a22] border-t border-purple-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-wider text-orange-400 uppercase">
              Thoughtful Benefits
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100 tracking-tight mt-1">
              Why Use Halloween Coloring Pages?
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-2">
              Coloring during the autumn season provides simple, wholesome entertainment for home and school.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SITE_CONFIG.whyColoringCards.map((card, i) => (
              <div
                key={card.title}
                className="rounded-2xl bg-[#190f2d] border border-purple-900/40 p-6 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center font-bold text-orange-400 text-sm">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-stone-100">{card.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How It Works */}
      <section className="py-16 sm:py-20 bg-[#0d0818]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-wider text-orange-400 uppercase">
              Quick &amp; Simple
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100 tracking-tight mt-1">
              How It Works
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-2">
              Three effortless steps to start coloring your favorite Halloween scenes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {SITE_CONFIG.howItWorksSteps.map((step) => (
              <div
                key={step.step}
                className="relative rounded-2xl bg-[#180e2b] border border-purple-900/40 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-extrabold text-orange-400/40 mb-3 font-mono">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-stone-100 mb-2">{step.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-purple-950/30 border border-purple-900/40 text-center text-xs text-stone-400 max-w-xl mx-auto">
            Note: Actual downloadable coloring content and PDF printable sheets are actively being prepared for release.
          </div>
        </div>
      </section>

      {/* 6. Explore More / Future Content Preview */}
      <section className="py-14 sm:py-18 bg-[#110920] border-y border-purple-900/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-r from-[#1c1035] to-[#251545] border border-purple-800/50 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-300">
                Looking Ahead
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Upcoming Guides, Crafts &amp; Coloring Packs
              </h3>
              <p className="text-stone-300 text-sm max-w-xl">
                We are building seasonal coloring tutorials, DIY paper craft templates, and autumn decoration ideas to help you get the most out of your printable pages.
              </p>
            </div>
            <Link
              href="/blog"
              className="shrink-0 px-5 py-3 rounded-xl bg-purple-900/60 hover:bg-purple-800/70 border border-purple-700/50 text-orange-300 text-sm font-semibold transition-colors flex items-center gap-2"
            >
              <span>Explore Guides &amp; Blog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <FAQ />

      {/* 8. Final CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0d0818] to-[#160c2b] text-center border-t border-purple-900/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/50 border border-orange-800/50 text-xs font-medium text-orange-300">
            <span>Free Autumn Fun for Everyone</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-100 tracking-tight [text-wrap:balance]">
            Ready to Explore Halloween Coloring Pages?
          </h2>

          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            Discover cute pumpkins, eerie cauldrons, cheerful phantoms, and intricately patterned Halloween outlines ready for crayons and markers.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/coloring-pages"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold text-stone-900 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 rounded-xl shadow-lg shadow-orange-950/60 hover:shadow-orange-700/30 transition-all active:scale-95"
            >
              <Sparkles className="w-5 h-5" />
              <span>Browse Coloring Pages</span>
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-stone-300 bg-purple-950/40 hover:bg-purple-900/50 border border-purple-800/40 rounded-xl transition-colors"
            >
              <span>Learn About Our Project</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
