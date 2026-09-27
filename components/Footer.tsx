import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="w-full border-t border-purple-900/40 bg-[#0a0614] text-stone-300 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Purpose Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 text-white font-bold text-lg tracking-tight">
              <span className="text-xl" role="img" aria-label="Jack-o'-lantern">🎃</span>
              <span>{SITE_CONFIG.name}</span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed max-w-md">
              A curated resource for free printable Halloween coloring pages, crafted for kids, families, classrooms, and adult colorists. Download and print seasonal outlines featuring pumpkins, friendly ghosts, witches, and festive autumn art.
            </p>
            <p className="text-xs text-stone-500">
              Printed on standard 8.5&quot; × 11&quot; US Letter &amp; A4 paper. Free for personal, family, and educational classroom use.
            </p>
          </div>

          {/* Quick Categories Col */}
          <div>
            <h3 className="text-xs font-semibold text-stone-200 uppercase tracking-wider mb-3">
              Coloring Categories
            </h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <Link href="/coloring-pages/for-kids" className="hover:text-orange-400 transition-colors">
                  For Kids
                </Link>
              </li>
              <li>
                <Link href="/coloring-pages/for-adults" className="hover:text-orange-400 transition-colors">
                  For Adults
                </Link>
              </li>
              <li>
                <Link href="/coloring-pages/cute" className="hover:text-orange-400 transition-colors">
                  Cute Halloween
                </Link>
              </li>
              <li>
                <Link href="/coloring-pages/easy" className="hover:text-orange-400 transition-colors">
                  Easy Outlines
                </Link>
              </li>
              <li>
                <Link href="/coloring-pages/pumpkin" className="hover:text-orange-400 transition-colors">
                  Pumpkin &amp; Jack-o&apos;-Lantern
                </Link>
              </li>
              <li>
                <Link href="/coloring-pages/ghost" className="hover:text-orange-400 transition-colors">
                  Ghost Outlines
                </Link>
              </li>
              <li>
                <Link href="/coloring-pages/witch" className="hover:text-orange-400 transition-colors">
                  Witch &amp; Magic
                </Link>
              </li>
              <li>
                <Link href="/coloring-pages/black-cat" className="hover:text-orange-400 transition-colors">
                  Black Cat Sheets
                </Link>
              </li>
            </ul>
          </div>

          {/* Information & Legal Col */}
          <div>
            <h3 className="text-xs font-semibold text-stone-200 uppercase tracking-wider mb-3">
              Site &amp; Legal
            </h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <Link href="/about" className="hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-orange-400 transition-colors">
                  Guides &amp; Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-orange-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-orange-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-orange-400 transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <a href="/sitemap.xml" className="hover:text-orange-400 transition-colors">
                  XML Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer statement */}
        <div className="mt-10 pt-6 border-t border-purple-950/60 text-xs text-stone-500 leading-relaxed">
          <p>
            Disclaimer: Halloween Coloring Pages is an independent fan and educational resource. This website is not affiliated with, endorsed by, sponsored by, or associated with any government agency, educational board, Disney, Marvel, Warner Bros., or any other commercial entertainment franchise. All trademarks and registered trademarks are the property of their respective owners.
          </p>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {SITE_CONFIG.currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-stone-400">
            <span>Crafted with autumn spirit for creative minds</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
