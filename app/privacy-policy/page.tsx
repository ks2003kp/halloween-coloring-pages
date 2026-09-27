import React from 'react';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy – Halloween Coloring Pages',
  description:
    'Our privacy policy explains how Halloween Coloring Pages handles visitor data, privacy practices, and future analytical services.',
  alternates: {
    canonical: `${SITE_CONFIG.domain}/privacy-policy`,
  },
  openGraph: {
    title: 'Privacy Policy – Halloween Coloring Pages',
    description: 'Privacy policy and data protection practices for Halloween Coloring Pages.',
    url: `${SITE_CONFIG.domain}/privacy-policy`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy – Halloween Coloring Pages',
    description: 'Privacy policy for Halloween Coloring Pages.',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-[#0d0818] py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ name: 'Privacy Policy', href: '/privacy-policy' }]} />

        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/40 text-xs font-semibold text-orange-300">
            <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
            <span>Legal Documentation</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-50 tracking-tight [text-wrap:balance]">
            Privacy Policy
          </h1>

          <p className="text-stone-400 text-xs sm:text-sm">
            Last Updated: September 2026 · Effective Date: September 2026
          </p>
        </div>

        <div className="space-y-8 text-stone-300 text-sm sm:text-base leading-relaxed bg-[#170e28] border border-purple-900/40 p-6 sm:p-10 rounded-3xl">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-stone-100">1. Introduction</h2>
            <p>
              Welcome to <strong>{SITE_CONFIG.name}</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;the Website&quot;), accessible at{' '}
              <a href={SITE_CONFIG.domain} className="text-orange-400 underline">
                {SITE_CONFIG.domain}
              </a>
              . We respect your privacy and are committed to maintaining a transparent online environment. This Privacy Policy describes how we handle information when you visit and use our website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-stone-100">2. Information We Do Not Collect</h2>
            <p>
              Currently, {SITE_CONFIG.name} does not require user registration, account sign-in, or payment details. You do not need to provide personal details (such as your full name, physical address, or phone number) to view, download, or print coloring pages from this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-stone-100">3. Server Log Files</h2>
            <p>
              Like most websites, our web hosting provider automatically logs standard technical requests when a web browser requests content from our servers. These log files may include:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-stone-400 text-sm">
              <li>Internet Protocol (IP) addresses</li>
              <li>Browser type and version</li>
              <li>Referring and exit pages</li>
              <li>Operating system</li>
              <li>Date and timestamp of visits</li>
            </ul>
            <p className="text-stone-400 text-sm">
              This data is utilized solely for technical administration, server security monitoring, and diagnosing server connectivity issues. Log entries are not linked to personally identifiable information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-stone-100">4. Cookies &amp; Tracking Technologies</h2>
            <p>
              At present, {SITE_CONFIG.name} does not deploy third-party advertising cookies or cross-site tracking scripts.
            </p>
            <p className="text-stone-400 text-sm">
              In the future, we may incorporate standard analytics services (such as Google Analytics) or privacy-conscious advertising networks to support the maintenance and creation of new free coloring sheets. If and when such services are integrated, this policy will be updated with specific details, cookie durations, and opt-out instructions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-stone-100">5. Children&apos;s Online Privacy (COPPA Compliance)</h2>
            <p>
              Protecting the privacy of children is of paramount importance. Our website offers printable coloring pages designed for family and educational fun. We do not knowingly collect, request, or store any personal information from children under the age of 13.
            </p>
            <p className="text-stone-400 text-sm">
              If a parent or guardian believes that a child has provided us with personal information via an email inquiry, please contact us immediately, and we will promptly delete that information from our records.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-stone-100">6. Third-Party Links</h2>
            <p>
              Our website may contain links to external third-party sites or references. We do not control and are not responsible for the privacy practices or content of external websites. We encourage visitors to review the privacy policies of any third-party websites they choose to visit.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-stone-100">7. Changes to This Privacy Policy</h2>
            <p>
              We may periodically update this Privacy Policy to reflect enhancements to our website architecture or evolving regulatory standards. Any changes will be posted directly to this page with an updated &quot;Last Updated&quot; date.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-stone-100">8. Contact Information</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy, please contact us at:
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
