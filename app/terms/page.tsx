import React from 'react';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service – Halloween Coloring Pages',
  description:
    'Read the terms of service and usage conditions for printing and downloading coloring sheets from Halloween Coloring Pages.',
  alternates: {
    canonical: `${SITE_CONFIG.domain}/terms`,
  },
  openGraph: {
    title: 'Terms of Service – Halloween Coloring Pages',
    description: 'Terms of service and printing license for Halloween Coloring Pages.',
    url: `${SITE_CONFIG.domain}/terms`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Service – Halloween Coloring Pages',
    description: 'Terms of service for Halloween Coloring Pages.',
  },
};

export default function TermsPage() {
  return (
    <div className="w-full bg-[#0d0818] py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ name: 'Terms of Service', href: '/terms' }]} />

        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/40 text-xs font-semibold text-orange-300">
            <FileText className="w-3.5 h-3.5 text-orange-400" />
            <span>Usage Agreement</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-50 tracking-tight [text-wrap:balance]">
            Terms of Service
          </h1>

          <p className="text-stone-400 text-xs sm:text-sm">
            Last Updated: September 2026 · Effective Date: September 2026
          </p>
        </div>

        <div className="space-y-8 text-stone-300 text-sm sm:text-base leading-relaxed bg-[#170e28] border border-purple-900/40 p-6 sm:p-10 rounded-3xl">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-stone-100">1. Acceptance of Terms</h2>
            <p>
              By accessing and using <strong>{SITE_CONFIG.name}</strong> (&quot;the Website&quot;, available at{' '}
              <a href={SITE_CONFIG.domain} className="text-orange-400 underline">
                {SITE_CONFIG.domain}
              </a>
              ), you acknowledge and agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-stone-100">2. Permitted Use &amp; Printing License</h2>
            <p>
              All printable coloring pages, outlines, and text content made available on this website are granted under a limited, revocable, non-exclusive license for:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-stone-400 text-sm">
              <li><strong>Personal &amp; Family Use:</strong> You may print as many copies as desired for personal, non-commercial entertainment.</li>
              <li><strong>Educational &amp; Non-Profit Use:</strong> Teachers, homeschoolers, daycare facilitators, librarians, and community organizers may print physical copies for students and activity groups without payment or special permission.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-stone-100">3. Prohibited Commercial Restrictions</h2>
            <p>
              You agree NOT to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-stone-400 text-sm">
              <li>Sell, license, or commercially redistribute our coloring sheets or digital files in any format (physical coloring books, print-on-demand products, digital bundles, or paid downloads).</li>
              <li>Hotlink directly to our media assets or files to bypass website navigation.</li>
              <li>Claim original authorship or ownership of illustrations or text retrieved from this website.</li>
              <li>Use automated scrapers or bots to overwhelm site servers or bulk-harvest content.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-stone-100">4. Intellectual Property</h2>
            <p>
              The compilation, visual layout, unique site styling, and written content published on {SITE_CONFIG.name} are protected by copyright and intellectual property laws. All trademarks and seasonal themes are referenced for educational, descriptive, and fan recreation purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-stone-100">5. Disclaimer of Warranties</h2>
            <p>
              The materials and services on this website are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, either express or implied. We do not warrant that files will be uninterrupted or error-free, or that defects will be instantly corrected.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-stone-100">6. Limitation of Liability</h2>
            <p>
              In no event shall {SITE_CONFIG.name}, its creators, or administrators be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use this website or its printable files.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-stone-100">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the website following any posted modifications constitutes acceptance of the amended terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-stone-100">8. Inquiries</h2>
            <p>
              Questions regarding these Terms of Service can be directed to:
            </p>
            <p className="text-orange-400 font-mono text-sm">
              {SITE_CONFIG.contactEmailPlaceholder}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
