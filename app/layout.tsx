import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLd, getWebsiteSchema, getOrganizationSchema } from '@/components/JsonLd';
import { SITE_CONFIG } from '@/lib/site-config';

export const viewport: Viewport = {
  themeColor: '#0d0818',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: `${SITE_CONFIG.name} – Free Printable Halloween Sheets for Kids & Adults`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'Halloween coloring pages',
    'free printable Halloween coloring pages',
    'Halloween coloring pages for kids',
    'Halloween coloring pages for adults',
    'pumpkin coloring pages',
    'ghost coloring pages',
    'witch coloring pages',
    'cute Halloween coloring sheets',
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.domain }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.domain,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} – Free Printable Halloween Sheets`,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} – Free Printable Halloween Sheets`,
    description: SITE_CONFIG.description,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd data={getWebsiteSchema()} />
        <JsonLd data={getOrganizationSchema()} />
      </head>
      <body className="min-h-screen flex flex-col bg-[#0d0818] text-stone-100 selection:bg-orange-500 selection:text-white" suppressHydrationWarning>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
