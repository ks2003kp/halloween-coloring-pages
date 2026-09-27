'use client';

import React, { useState } from 'react';
import { BlogHeading } from '@/lib/blog';
import { List, ChevronDown } from 'lucide-react';

interface TableOfContentsProps {
  headings: BlogHeading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(true);

  // If there are fewer than 2 headings, don't show TOC
  if (!headings || headings.length < 2) {
    return null;
  }

  return (
    <nav
      aria-label="Table of Contents"
      className="my-8 rounded-2xl bg-[#170e28] border border-purple-900/40 p-5 sm:p-6 transition-all"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5 text-stone-100 font-bold text-base sm:text-lg">
          <List className="w-5 h-5 text-orange-400" />
          <span>In This Guide</span>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-stone-400 hover:text-white p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Collapse Table of Contents' : 'Expand Table of Contents'}
        >
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <ul className="mt-4 space-y-2 border-t border-purple-900/40 pt-4 text-sm">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={`${heading.level === 3 ? 'pl-4 text-xs' : 'font-medium'}`}
            >
              <a
                href={`#${heading.id}`}
                className="text-stone-300 hover:text-orange-400 transition-colors inline-block py-0.5"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
