import React from 'react';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Sparkles, Heart, Printer, Palette, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us – Our Mission & Printable Coloring Sheets',
  description:
    'Learn about Halloween Coloring Pages, an independent resource dedicated to providing free, high-quality printable coloring sheets for families, classrooms, and colorists.',
  alternates: {
    canonical: `${SITE_CONFIG.domain}/about`,
  },
  openGraph: {
    title: 'About Halloween Coloring Pages',
    description:
      'Learn about our independent project providing free printable Halloween coloring pages for kids, classrooms, and adult colorists.',
    url: `${SITE_CONFIG.domain}/about`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Halloween Coloring Pages',
    description:
      'Learn about our independent project providing free printable Halloween coloring sheets.',
  },
};

export default function AboutPage() {
  return (
    <div className="w-full bg-[#0d0818] py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ name: 'About', href: '/about' }]} />

        {/* Header */}
        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/40 text-xs font-semibold text-orange-300">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>Independent Creative Resource</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-50 tracking-tight [text-wrap:balance]">
            About Halloween Coloring Pages
          </h1>

          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            We are an independent creative project built around a simple goal: making seasonal Halloween coloring pages easily accessible, free to print, and enjoyable for people of all ages.
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-stone-300 text-sm sm:text-base leading-relaxed">
          <div className="rounded-2xl bg-[#170e28] border border-purple-900/40 p-6 sm:p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-100 flex items-center gap-2.5">
              <Heart className="w-5 h-5 text-orange-400" />
              <span>Our Purpose &amp; Philosophy</span>
            </h2>
            <p>
              Halloween is one of the most imaginative times of the year. From carving pumpkins and picking out costumes to listening to ghost stories, it is a holiday steeped in tactile tradition.
            </p>
            <p>
              Too often, searching for printable coloring pages online leads to websites cluttered with aggressive pop-ups, low-resolution files with watermarks, or mandatory subscription walls. We created <strong>{SITE_CONFIG.name}</strong> to be a clean, user-friendly space where parents, teachers, and hobbyists can quickly find and print clean outline sheets directly from their browser.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-[#140b24] border border-purple-900/30 p-6 space-y-2">
              <Printer className="w-6 h-6 text-orange-400 mb-2" />
              <h3 className="font-bold text-stone-100 text-base">Printer-First Design</h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                Outlines are formatted specifically for standard 8.5&quot; × 11&quot; US Letter and A4 printers, with clean margins and ink-conscious black lines.
              </p>
            </div>

            <div className="rounded-2xl bg-[#140b24] border border-purple-900/30 p-6 space-y-2">
              <Palette className="w-6 h-6 text-amber-400 mb-2" />
              <h3 className="font-bold text-stone-100 text-base">Designed for Every Age</h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                From simplified bold shapes for toddlers to detailed gothic architectural designs for adults, we curate sheets tailored to distinct skill levels.
              </p>
            </div>

            <div className="rounded-2xl bg-[#140b24] border border-purple-900/30 p-6 space-y-2">
              <Shield className="w-6 h-6 text-emerald-400 mb-2" />
              <h3 className="font-bold text-stone-100 text-base">Classroom Friendly</h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                Educators, daycare providers, and homeschool parents are welcome to print multiple copies for classroom use without royalty fees.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#170e28] border border-purple-900/40 p-6 sm:p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-100">
              Transparency &amp; Independence
            </h2>
            <p>
              Halloween Coloring Pages is an independent project. We do not claim any government affiliation, school district endorsement, or commercial ties to entertainment brands like Disney, Marvel, or Warner Bros.
            </p>
            <p>
              All our coloring themes center on classic, public domain, and folkloric Halloween imagery: carved jack-o&apos;-lanterns, sheet ghosts, broom-riding witches, and midnight cats.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
