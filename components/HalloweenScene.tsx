import React from 'react';

export function HalloweenScene() {
  return (
    <div
      className="relative w-full max-w-lg mx-auto aspect-square sm:aspect-[4/3] rounded-3xl p-6 flex items-center justify-center overflow-hidden border border-purple-900/50 bg-gradient-to-b from-[#1b1035] via-[#140b28] to-[#0c071a] shadow-2xl shadow-purple-950/60"
      aria-label="Illustrated Halloween atmospheric visual featuring moon, pumpkins, friendly ghost and starry sky"
      role="img"
    >
      {/* Background celestial glow */}
      <div className="absolute top-0 right-1/4 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-6 left-1/4 w-56 h-56 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Crescent Moon */}
      <div className="absolute top-6 right-8 w-16 h-16 sm:w-20 sm:h-20 animate-glow">
        <div className="relative w-full h-full">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 shadow-[0_0_25px_rgba(251,191,36,0.5)]" />
          <div className="absolute -top-1 -right-1 w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-[#1b1035]" />
          {/* Moon craters */}
          <div className="absolute bottom-3 left-4 w-2 h-2 rounded-full bg-amber-300/40" />
          <div className="absolute top-5 left-5 w-1.5 h-1.5 rounded-full bg-amber-300/30" />
        </div>
      </div>

      {/* Distant Bats */}
      <div className="absolute top-10 left-12 animate-float opacity-80" style={{ animationDelay: '0.4s' }}>
        <svg className="w-7 h-4 text-purple-300" viewBox="0 0 24 14" fill="currentColor">
          <path d="M12 5C9 1 3 0 0 5C3 8 7 8 10 7L12 9L14 7C17 8 21 8 24 5C21 0 15 1 12 5Z" />
        </svg>
      </div>
      <div className="absolute top-16 left-28 animate-float opacity-60" style={{ animationDelay: '1.2s' }}>
        <svg className="w-5 h-3 text-purple-400" viewBox="0 0 24 14" fill="currentColor">
          <path d="M12 5C9 1 3 0 0 5C3 8 7 8 10 7L12 9L14 7C17 8 21 8 24 5C21 0 15 1 12 5Z" />
        </svg>
      </div>

      {/* Stars & Sparkles */}
      <div className="absolute top-12 left-1/3 w-1.5 h-1.5 rounded-full bg-amber-200 animate-twinkle" />
      <div className="absolute top-24 right-1/3 w-1 h-1 rounded-full bg-purple-200 animate-twinkle" style={{ animationDelay: '1s' }} />
      <div className="absolute top-8 left-20 w-1 h-1 rounded-full bg-amber-100 animate-twinkle" style={{ animationDelay: '1.8s' }} />
      <div className="absolute bottom-24 right-14 w-1.5 h-1.5 rounded-full bg-amber-300 animate-twinkle" style={{ animationDelay: '2.3s' }} />

      {/* Central Interactive Coloring Page Showcase Card */}
      <div className="relative z-10 w-full max-w-xs bg-stone-50 rounded-2xl p-4 shadow-xl border-4 border-amber-500/20 transform -rotate-1 transition-transform duration-300 hover:rotate-0">
        {/* Paper Header with Title & Color Markers */}
        <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-purple-600 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
          </div>
          <span className="text-[11px] font-semibold text-stone-500 tracking-wider uppercase">
            Printable Sheet · 8.5&quot; × 11&quot;
          </span>
        </div>

        {/* Clean Line Art Jack-o\'-lantern & Friendly Ghost in coloring sheet format */}
        <div className="relative bg-white rounded-xl p-3 border-2 border-dashed border-stone-300 flex flex-col items-center justify-center min-h-[160px]">
          <svg
            className="w-36 h-36 text-stone-800"
            viewBox="0 0 120 120"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Pumpkin Stem */}
            <path d="M58 24 C57 14 65 12 68 8 C62 8 54 16 54 24" fill="#65a30d" stroke="#3f6212" strokeWidth="2.5" />
            
            {/* Pumpkin Ribs / Body Outline */}
            <ellipse cx="60" cy="62" rx="42" ry="34" fill="#fffbeb" stroke="currentColor" />
            <ellipse cx="60" cy="62" rx="28" ry="34" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <ellipse cx="60" cy="62" rx="14" ry="34" fill="none" stroke="currentColor" strokeWidth="2.5" />

            {/* Carved Eyes */}
            <polygon points="46,50 54,58 42,58" fill="#f97316" stroke="#9a3412" strokeWidth="2" />
            <polygon points="74,50 78,58 66,58" fill="#f97316" stroke="#9a3412" strokeWidth="2" />

            {/* Carved Nose */}
            <polygon points="60,61 63,66 57,66" fill="#f97316" stroke="#9a3412" strokeWidth="1.5" />

            {/* Jagged Smile */}
            <path
              d="M40 73 L46 78 L52 74 L58 79 L64 74 L70 78 L76 73 L70 85 L60 87 L50 85 Z"
              fill="#f97316"
              stroke="#9a3412"
              strokeWidth="2"
            />
          </svg>

          {/* Palette indication */}
          <div className="mt-2 text-center">
            <span className="text-xs font-bold text-stone-700 block">Classic Jack-o&apos;-Lantern</span>
            <span className="text-[10px] text-stone-500">Ready to download &amp; print</span>
          </div>
        </div>
      </div>

      {/* Floating Friendly Ghost Companion */}
      <div className="absolute -bottom-2 -left-3 sm:left-4 z-20 animate-ghost pointer-events-none">
        <svg
          className="w-20 h-24 text-white drop-shadow-[0_10px_15px_rgba(0,0,0,0.4)]"
          viewBox="0 0 80 100"
          fill="none"
        >
          {/* Ghost body */}
          <path
            d="M40 8 C22 8 12 24 12 46 C12 66 8 82 14 86 C20 90 24 82 30 84 C36 86 40 92 46 90 C52 88 56 82 62 84 C68 86 70 74 70 46 C70 24 58 8 40 8 Z"
            fill="#ffffff"
            stroke="#e2e8f0"
            strokeWidth="3"
          />
          {/* Eyes */}
          <ellipse cx="32" cy="38" rx="4" ry="5.5" fill="#1e1b4b" />
          <ellipse cx="50" cy="38" rx="4" ry="5.5" fill="#1e1b4b" />
          <circle cx="34" cy="36" r="1.5" fill="#ffffff" />
          <circle cx="52" cy="36" r="1.5" fill="#ffffff" />
          {/* Blushing cheeks */}
          <ellipse cx="26" cy="44" rx="3.5" ry="2" fill="#fca5a5" opacity="0.6" />
          <ellipse cx="56" cy="44" rx="3.5" ry="2" fill="#fca5a5" opacity="0.6" />
          {/* Smile */}
          <path d="M37 46 Q41 51 45 46" stroke="#1e1b4b" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Mini decorative pumpkins on base ground */}
      <div className="absolute bottom-2 right-4 z-20 animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="w-12 h-10 rounded-full bg-orange-600 border-2 border-orange-800 shadow-lg relative flex items-center justify-center">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1.5 h-3 bg-green-700 rounded-sm" />
          <div className="w-8 h-2 flex justify-between px-1">
            <span className="w-1.5 h-1.5 bg-stone-900 rounded-full inline-block" />
            <span className="w-1.5 h-1.5 bg-stone-900 rounded-full inline-block" />
          </div>
        </div>
      </div>
    </div>
  );
}
