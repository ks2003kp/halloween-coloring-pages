import React from 'react';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disclaimer – Independent Website Notice',
  description:
    'Independent website disclaimer for Halloween Coloring Pages. Statement of non-affiliation with third-party brands and informational nature of our printable content.',
  alternates: {
    canonical: `${SITE_CONFIG.domain}/disclaimer`,
  },
  openGraph: {
    title: 'Disclaimer – Halloween Coloring Pages',
    description: 'Independent website disclaimer and non-affiliation notice.',
    url: `${SITE_CONFIG.domain}/disclaimer`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary',
    title: 'Disclaimer – Halloween Coloring Pages',
    description: 'Independent website disclaimer for Halloween Coloring Pages.',
  },
};

export default function DisclaimerPage() {
  return (
    <div className="w-full bg-[#0d0818] py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ name: 'Disclaimer', href: '/disclaimer' }]} />

        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/40 text-xs font-semibold text-orange-300">
            <AlertCircle className="w-3.5 h-3.5 text-orange-400" />
            <span>Non-Affiliation Notice</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-50 tracking-tight [text-wrap:balance]">
            Disclaimer
          </h1>

          <p className="text-stone-400 text-xs sm:text-sm">
            Last Updated: September 2026
          </p>
        </div>

        <div className="space-y-8 text-stone-300 text-sm sm:text-base leading-relaxed bg-[#170e28] border border-purple-900/40 p-6 sm:p-10 rounded-3xl">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-stone-100">1. Independent Creative Website</h2>
            <p>
              <strong>{SITE_CONFIG.name}</strong> ({SITE_CONFIG.domain}) is an independent website operated for creative, recreational, and educational purposes.
            </p>
            <p>
              This website is <strong>NOT</strong> affiliated with, associated with, authorized by, sponsored by, endorsed by, or in any way officially connected with any government entity, school district, public institution, or commercial entertainment enterprise (including but not limited to The Walt Disney Company, Marvel Entertainment, DC Comics, Warner Bros. Discovery, Nickelodeon, or any other media corporation).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-stone-100">2. Trademarks &amp; Cultural Imagery</h2>
            <p>
              The names, motifs, and characters featured on this site (such as jack-o&apos;-lanterns, phantoms, witches, black cats, cauldrons, and autumn harvest symbols) are traditional folkloric and public domain cultural icons associated with the Halloween season.
            </p>
            <p className="text-stone-400 text-sm">
              Any reference to names, trademarks, or registered trademarks made on this website is strictly descriptive, nominative, and for cultural commentary. All trademarks remain the exclusive property of their respective trademark holders.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-stone-100">3. Recreational &amp; Creative Use Only</h2>
            <p>
              The printable coloring sheets and guides provided on this website are designed purely for leisure, creative artistic expression, and family entertainment. We do not make therapeutic, psychological, medical, or developmental guarantees regarding coloring activities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-stone-100">4. Print &amp; Hardware Notice</h2>
            <p>
              Print quality depends on your individual home or office printer hardware, print driver settings, paper weight, and ink levels. We cannot guarantee identical color reproduction or margin alignment across different printer models or manufacturers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-stone-100">5. Contact</h2>
            <p>
              If you have any questions regarding this disclaimer, please contact us at:
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
