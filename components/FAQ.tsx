'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/lib/site-config';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { getFaqSchema, JsonLd } from './JsonLd';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 sm:py-20 bg-[#0e081c] border-t border-purple-900/30">
      <JsonLd data={getFaqSchema(SITE_CONFIG.faqs)} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400 mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base max-w-xl mx-auto">
            Everything you need to know about downloading, printing, and enjoying our Halloween coloring sheets.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {SITE_CONFIG.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div
                key={faq.question}
                className="rounded-xl border border-purple-900/40 bg-[#170e28] transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggle(index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 text-stone-100 hover:text-orange-300 font-semibold text-base transition-colors focus:outline-none focus:bg-purple-950/60"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-5 pb-5 text-stone-300 text-sm leading-relaxed border-t border-purple-950/50 pt-3"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
