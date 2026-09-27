import React from 'react';
import Link from 'next/link';
import { Home, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center py-16 px-4 bg-[#0d0818] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-950/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto text-center space-y-6">
        {/* Playful CSS Ghost & Haunted Manor visual */}
        <div className="w-32 h-32 mx-auto relative flex items-center justify-center">
          <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-xl animate-pulse" />
          <svg className="w-28 h-28 text-white animate-ghost" viewBox="0 0 80 100" fill="none">
            <path
              d="M40 8 C22 8 12 24 12 46 C12 66 8 82 14 86 C20 90 24 82 30 84 C36 86 40 92 46 90 C52 88 56 82 62 84 C68 86 70 74 70 46 C70 24 58 8 40 8 Z"
              fill="#ffffff"
              stroke="#cbd5e1"
              strokeWidth="2.5"
            />
            {/* Surprised ghost expression for 404 */}
            <circle cx="32" cy="40" r="4.5" fill="#1e1b4b" />
            <circle cx="48" cy="40" r="4.5" fill="#1e1b4b" />
            <circle cx="40" cy="52" r="5" fill="#1e1b4b" />
            <ellipse cx="26" cy="46" rx="3" ry="1.5" fill="#fca5a5" />
            <ellipse cx="54" cy="46" rx="3" ry="1.5" fill="#fca5a5" />
          </svg>
        </div>

        <div className="space-y-2">
          <span className="text-4xl sm:text-5xl font-extrabold font-mono text-orange-400 block tracking-wider">
            404
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-50 tracking-tight [text-wrap:balance]">
            Oops! This page disappeared into the haunted house.
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
            The coloring sheet or hallway you were looking for seems to have vanished into thin air. Don&apos;t worry—our main library is full of festive sheets.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-stone-900 font-bold text-sm shadow-lg shadow-orange-950/50 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/coloring-pages"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-950/60 hover:bg-purple-900/70 border border-purple-800/40 text-stone-200 text-sm font-semibold transition-colors"
          >
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span>Browse Coloring Library</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
