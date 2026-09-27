import React from 'react';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Mail, MessageSquare, Clock, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us – Halloween Coloring Pages Support & Inquiries',
  description:
    'Get in touch with Halloween Coloring Pages for questions, coloring theme requests, printable feedback, or technical inquiries.',
  alternates: {
    canonical: `${SITE_CONFIG.domain}/contact`,
  },
  openGraph: {
    title: 'Contact Halloween Coloring Pages',
    description:
      'Contact our team for questions, coloring theme suggestions, and printable feedback.',
    url: `${SITE_CONFIG.domain}/contact`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Halloween Coloring Pages',
    description:
      'Contact our team for coloring suggestions and support.',
  },
};

export default function ContactPage() {
  return (
    <div className="w-full bg-[#0d0818] py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} />

        {/* Header */}
        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/40 text-xs font-semibold text-orange-300">
            <Mail className="w-3.5 h-3.5 text-orange-400" />
            <span>Support &amp; Feedback</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-50 tracking-tight [text-wrap:balance]">
            Contact Us
          </h1>

          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            Have a question, feedback about our printable outlines, or a suggestion for a new Halloween coloring theme? We welcome your input.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column: Direct Contact & Placeholders */}
          <div className="md:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#170e28] border border-purple-900/40 p-6 space-y-4">
              <h2 className="text-lg font-bold text-stone-100 flex items-center gap-2">
                <Mail className="w-5 h-5 text-orange-400" />
                <span>Email Inquiries</span>
              </h2>
              <p className="text-sm text-stone-400 leading-relaxed">
                For general questions, theme suggestions, or website feedback, you can reach out directly via email:
              </p>
              
              {/* Clean Contact Email Placeholder Box */}
              <div className="p-3.5 rounded-xl bg-purple-950/60 border border-purple-800/50 text-orange-300 font-mono text-sm break-all select-all">
                {SITE_CONFIG.contactEmailPlaceholder}
              </div>

              <div className="flex items-center gap-2 text-xs text-stone-500 pt-2">
                <Clock className="w-4 h-4 text-stone-400" />
                <span>Typical response window: 1–2 business days</span>
              </div>
            </div>

            <div className="rounded-2xl bg-[#140b24] border border-purple-900/30 p-6 space-y-3 text-xs text-stone-400">
              <h3 className="font-semibold text-stone-200 text-sm">Theme Suggestions</h3>
              <p leading-relaxed>
                Looking for a specific character or seasonal scene that is not in our current library? Send us your suggestions so we can add them to our upcoming production schedule.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Note & Future Form Placeholder */}
          <div className="md:col-span-7">
            <div className="rounded-2xl bg-[#170e28] border border-purple-900/40 p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-orange-400" />
                <div>
                  <h2 className="text-lg font-bold text-stone-100">Send a Message</h2>
                  <p className="text-xs text-stone-400">Direct message interface</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-900/50 text-xs text-stone-300 leading-relaxed space-y-2">
                <p>
                  <strong>Note:</strong> We do not require account creation or backend email submission on this site. To reach us right away, please email{' '}
                  <span className="text-orange-400 font-mono">{SITE_CONFIG.contactEmailPlaceholder}</span>.
                </p>
                <p className="text-stone-400">
                  When sending an email, please include the topic in the subject line (e.g., &quot;Coloring Theme Suggestion&quot; or &quot;Print Quality Feedback&quot;) so we can route your message effectively.
                </p>
              </div>

              {/* Ready-to-connect form wireframe */}
              <div className="space-y-4 opacity-75">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-stone-400 mb-1">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    disabled
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e081c] border border-purple-900/50 text-stone-300 text-sm cursor-not-allowed"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-stone-400 mb-1">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    disabled
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e081c] border border-purple-900/50 text-stone-300 text-sm cursor-not-allowed"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-stone-400 mb-1">
                    Message or Suggestion
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    disabled
                    placeholder="Describe your suggestion or inquiry..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e081c] border border-purple-900/50 text-stone-300 text-sm cursor-not-allowed resize-none"
                  />
                </div>

                <div className="pt-2">
                  <a
                    href={`mailto:${SITE_CONFIG.contactEmailPlaceholder}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-400 text-stone-900 font-semibold text-sm transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Open Email Client</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
