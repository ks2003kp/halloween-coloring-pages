import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { getBreadcrumbSchema, JsonLd } from './JsonLd';
import { SITE_CONFIG } from '@/lib/site-config';

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const fullItems = [
    { name: 'Home', href: '/' },
    ...items,
  ];

  const schemaItems = fullItems.map((item) => ({
    name: item.name,
    url: item.href.startsWith('http') ? item.href : `${SITE_CONFIG.domain}${item.href}`,
  }));

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="w-full py-3 mb-6">
        <ol className="flex items-center flex-wrap gap-1.5 text-xs text-stone-400">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;
            return (
              <li key={item.href} className="inline-flex items-center gap-1.5">
                {index === 0 ? (
                  <Link
                    href="/"
                    className="inline-flex items-center gap-1 hover:text-orange-400 transition-colors"
                  >
                    <Home className="w-3.5 h-3.5" />
                    <span>Home</span>
                  </Link>
                ) : isLast ? (
                  <span className="text-stone-200 font-medium" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-orange-400 transition-colors">
                    {item.name}
                  </Link>
                )}
                {!isLast && (
                  <ChevronRight className="w-3.5 h-3.5 text-stone-600 shrink-0" aria-hidden="true" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
