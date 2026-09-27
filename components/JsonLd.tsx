import React from 'react';

interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Halloween Coloring Pages',
    url: 'https://halloweencoloringpages.store',
    description:
      'Free printable Halloween coloring pages for kids and adults. High-quality outlines of pumpkins, ghosts, witches, and festive autumn art.',
    inLanguage: 'en-US',
  };
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Halloween Coloring Pages',
    url: 'https://halloweencoloringpages.store',
    logo: 'https://halloweencoloringpages.store/icon.svg',
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  imageUrl?: string;
}

export function getArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName = 'Halloween Coloring Pages',
  imageUrl,
}: ArticleSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    url: url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: authorName,
      url: 'https://halloweencoloringpages.store',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Halloween Coloring Pages',
      url: 'https://halloweencoloringpages.store',
      logo: {
        '@type': 'ImageObject',
        url: 'https://halloweencoloringpages.store/icon.svg',
      },
    },
    ...(imageUrl ? { image: imageUrl } : {}),
  };
}
