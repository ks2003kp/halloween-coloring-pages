'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG } from '@/lib/site-config';
import { Menu, X, Sparkles } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const pathname = usePathname();

  // Close mobile menu on route change during render
  if (pathname !== currentPath) {
    setCurrentPath(pathname);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-900/40 bg-[#0e081c]/90 backdrop-blur-md transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-white hover:text-orange-400 transition-colors focus:outline-none"
        >
          {/* Subtle playful logo icon */}
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-md shadow-orange-950/40 transform transition-transform group-hover:scale-105">
            <span className="text-base select-none" role="img" aria-label="Pumpkin">
              🎃
            </span>
          </div>
          <span className="font-bold text-lg sm:text-xl tracking-tight text-stone-100 group-hover:text-orange-300">
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium text-stone-300"
          aria-label="Main Navigation"
        >
          {SITE_CONFIG.navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 ${
                  isActive
                    ? 'text-orange-400 font-semibold border-b-2 border-orange-500'
                    : 'hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Primary CTA Button (Desktop) & Hamburger (Mobile) */}
        <div className="flex items-center gap-3">
          <Link
            href="/coloring-pages"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-stone-900 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 rounded-lg shadow-md shadow-orange-950/40 hover:shadow-orange-700/20 active:scale-95 transition-all whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4" />
            <span>Explore Coloring Pages</span>
          </Link>

          {/* Accessible Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-stone-300 hover:text-white hover:bg-purple-950/60 focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-b border-purple-900/40 bg-[#120a24] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200"
          role="dialog"
          aria-label="Mobile Navigation"
        >
          <nav className="flex flex-col space-y-3">
            {SITE_CONFIG.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'bg-purple-900/50 text-orange-400 font-semibold'
                      : 'text-stone-200 hover:bg-purple-950/60 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/coloring-pages"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-stone-900 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>Explore Coloring Pages</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
