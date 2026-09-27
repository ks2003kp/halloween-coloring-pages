import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import Image from 'next/image';
import { slugify } from '@/lib/blog';

interface MdxContentProps {
  content: string;
}

export function MdxContent({ content }: MdxContentProps) {
  return (
    <article className="prose prose-invert max-w-none text-stone-300 text-base sm:text-lg leading-relaxed">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => {
            const text = String(children);
            const id = slugify(text);
            return (
              <h1
                id={id}
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-50 tracking-tight mt-10 mb-4 scroll-mt-24"
              >
                {children}
              </h1>
            );
          },
          h2: ({ children }) => {
            const text = String(children);
            const id = slugify(text);
            return (
              <h2
                id={id}
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-100 tracking-tight mt-10 mb-4 pt-4 border-b border-purple-900/40 scroll-mt-24"
              >
                {children}
              </h2>
            );
          },
          h3: ({ children }) => {
            const text = String(children);
            const id = slugify(text);
            return (
              <h3
                id={id}
                className="text-lg sm:text-xl font-bold text-orange-300 tracking-tight mt-8 mb-3 scroll-mt-24"
              >
                {children}
              </h3>
            );
          },
          p: ({ children }) => (
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed mb-5">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-outside pl-6 space-y-2 mb-6 text-stone-300">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-outside pl-6 space-y-2 mb-6 text-stone-300">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-stone-300 leading-relaxed pl-1">{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-orange-500 pl-4 py-2 italic bg-purple-950/40 rounded-r-xl my-6 text-stone-200">
              {children}
            </blockquote>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-stone-100">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-stone-200">{children}</em>
          ),
          a: ({ href, children }) => {
            if (!href) return <span>{children}</span>;
            const isInternal = href.startsWith('/') || href.startsWith('#');
            if (isInternal) {
              return (
                <Link
                  href={href}
                  className="text-orange-400 hover:text-orange-300 font-medium underline underline-offset-4 transition-colors"
                >
                  {children}
                </Link>
              );
            }
            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 font-medium underline underline-offset-4 transition-colors"
              >
                {children}
              </a>
            );
          },
          img: ({ src, alt }) => {
            if (!src || typeof src !== 'string') return null;
            // Handle relative or absolute images
            const isInternal = src.startsWith('/');
            return (
              <figure className="my-8 rounded-2xl overflow-hidden border border-purple-900/50 bg-[#160d26] p-2">
                {isInternal ? (
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={src}
                      alt={alt || 'Halloween coloring illustration'}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={src}
                    alt={alt || 'Halloween coloring illustration'}
                    className="w-full h-auto rounded-xl"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                )}
                {alt && (
                  <figcaption className="text-center text-xs text-stone-400 mt-2 px-2">
                    {alt}
                  </figcaption>
                )}
              </figure>
            );
          },
          table: ({ children }) => (
            <div className="my-6 w-full overflow-x-auto rounded-xl border border-purple-900/40 bg-[#150d26]">
              <table className="w-full text-left text-sm text-stone-300">{children}</table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-purple-950/60 text-xs font-semibold text-stone-200 border-b border-purple-900/50">
              {children}
            </thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-purple-900/30">{children}</tbody>
          ),
          tr: ({ children }) => (
            <tr className="hover:bg-purple-950/30 transition-colors">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 font-semibold text-stone-200">{children}</th>
          ),
          td: ({ children }) => <td className="px-4 py-3">{children}</td>,
          code: ({ children, className }) => {
            const isBlock = className?.includes('language-');
            if (isBlock) {
              return <code className={className}>{children}</code>;
            }
            return (
              <code className="px-1.5 py-0.5 rounded bg-purple-950/80 border border-purple-800/50 font-mono text-xs text-orange-300">
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="my-6 overflow-x-auto rounded-xl bg-[#0b0615] border border-purple-900/50 p-4 text-xs font-mono text-stone-200">
              {children}
            </pre>
          ),
          hr: () => <hr className="my-8 border-purple-900/50" />,
        }}
      >
        {content}
      </Markdown>
    </article>
  );
}
