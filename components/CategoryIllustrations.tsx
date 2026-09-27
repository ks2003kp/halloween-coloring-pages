import React from 'react';

interface IllustrationProps {
  className?: string;
}

export function KidIllustration({ className = 'w-16 h-16' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none">
      {/* Candy Bucket Pumpkin */}
      <ellipse cx="40" cy="46" rx="28" ry="24" fill="#fed7aa" stroke="#ea580c" strokeWidth="3" />
      {/* Bucket Handle */}
      <path d="M18 42 C18 16 62 16 62 42" stroke="#7c2d12" strokeWidth="3" strokeLinecap="round" />
      {/* Smiling Face */}
      <circle cx="31" cy="42" r="3" fill="#9a3412" />
      <circle cx="49" cy="42" r="3" fill="#9a3412" />
      <path d="M32 50 Q40 58 48 50" stroke="#9a3412" strokeWidth="3" strokeLinecap="round" />
      {/* Lollipop & Sweets poking out */}
      <circle cx="28" cy="22" r="6" fill="#f43f5e" stroke="#be123c" strokeWidth="2" />
      <line x1="28" y1="28" x2="30" y2="38" stroke="#be123c" strokeWidth="2" />
      <polygon points="50,16 58,26 44,28" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
    </svg>
  );
}

export function AdultIllustration({ className = 'w-16 h-16' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none">
      {/* Gothic Arch Portal */}
      <path
        d="M20 70 V38 C20 20 40 10 40 10 C40 10 60 20 60 38 V70"
        stroke="#c084fc"
        strokeWidth="2.5"
        fill="#2e1065"
      />
      {/* Inner Tracery */}
      <path d="M28 70 V42 C28 30 40 22 40 22 C40 22 52 30 52 42 V70" stroke="#a855f7" strokeWidth="1.5" />
      <circle cx="40" cy="30" r="5" stroke="#fcd34d" strokeWidth="1.5" fill="#581c87" />
      <path d="M20 70 H60" stroke="#c084fc" strokeWidth="3" />
      {/* Intricate ivy leaves */}
      <path d="M16 55 Q20 50 24 55 Q20 60 16 55 Z" fill="#34d399" />
      <path d="M64 45 Q60 40 56 45 Q60 50 64 45 Z" fill="#34d399" />
      {/* Subtle Moon in Arch */}
      <circle cx="40" cy="46" r="3.5" fill="#fef08a" />
    </svg>
  );
}

export function CuteIllustration({ className = 'w-16 h-16' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none">
      {/* Kawaii Ghost */}
      <path
        d="M40 14 C26 14 18 26 18 42 C18 56 16 64 22 66 C28 68 32 62 40 64 C48 66 52 68 58 66 C64 64 62 56 62 42 C62 26 54 14 40 14 Z"
        fill="#ffffff"
        stroke="#cbd5e1"
        strokeWidth="2.5"
      />
      {/* Giant Kawaii Eyes */}
      <circle cx="33" cy="36" r="4.5" fill="#1e293b" />
      <circle cx="47" cy="36" r="4.5" fill="#1e293b" />
      <circle cx="34.5" cy="34.5" r="1.5" fill="#ffffff" />
      <circle cx="48.5" cy="34.5" r="1.5" fill="#ffffff" />
      {/* Blushing cheeks */}
      <ellipse cx="28" cy="42" rx="3.5" ry="2" fill="#fca5a5" />
      <ellipse cx="52" cy="42" rx="3.5" ry="2" fill="#fca5a5" />
      {/* Open Smile */}
      <path d="M37 42 Q40 47 43 42" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
      {/* Tiny Candy Corn held in hands */}
      <polygon points="40,48 35,58 45,58" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
      <polygon points="40,48 37,53 43,53" fill="#ffffff" />
    </svg>
  );
}

export function EasyIllustration({ className = 'w-16 h-16' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none">
      {/* Bold, thick outlined pumpkin for toddlers */}
      <ellipse cx="40" cy="45" rx="28" ry="22" fill="#fed7aa" stroke="#c2410c" strokeWidth="4.5" />
      <path d="M40 23 V14" stroke="#15803d" strokeWidth="5" strokeLinecap="round" />
      {/* Simple Big Triangle Eyes */}
      <polygon points="30,36 36,44 26,44" fill="#9a3412" />
      <polygon points="50,36 54,44 44,44" fill="#9a3412" />
      {/* Simple Wide Smile */}
      <path d="M28 52 Q40 62 52 52" stroke="#9a3412" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function PumpkinIllustration({ className = 'w-16 h-16' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none">
      {/* Harvest Pumpkin with Vine */}
      <path d="M40 22 C42 12 50 10 52 6" stroke="#4d7c0f" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <ellipse cx="40" cy="48" rx="28" ry="24" fill="#ffedd5" stroke="#ea580c" strokeWidth="3" />
      <ellipse cx="40" cy="48" rx="18" ry="24" stroke="#ea580c" strokeWidth="2" fill="none" />
      <line x1="40" y1="24" x2="40" y2="72" stroke="#ea580c" strokeWidth="2" />
      {/* Classic Grinning Eyes */}
      <polygon points="30,40 37,47 25,47" fill="#c2410c" />
      <polygon points="50,40 55,47 43,47" fill="#c2410c" />
      <path d="M28 56 L34 60 L40 56 L46 60 L52 56" stroke="#c2410c" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function GhostIllustration({ className = 'w-16 h-16' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none">
      {/* Floating Ghost */}
      <path
        d="M40 12 C24 12 16 26 16 46 C16 62 12 70 18 72 C24 74 28 68 34 70 C40 72 44 74 50 72 C56 70 60 74 64 72 C70 70 64 60 64 46 C64 26 56 12 40 12 Z"
        fill="#f8fafc"
        stroke="#94a3b8"
        strokeWidth="3"
      />
      <ellipse cx="32" cy="38" rx="3.5" ry="5" fill="#0f172a" />
      <ellipse cx="48" cy="38" rx="3.5" ry="5" fill="#0f172a" />
      <ellipse cx="40" cy="48" rx="4" ry="5" fill="#0f172a" />
      {/* Gentle Floating Arms */}
      <path d="M16 42 Q8 46 12 52" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
      <path d="M64 42 Q72 46 68 52" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function WitchIllustration({ className = 'w-16 h-16' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none">
      {/* Witch Hat */}
      <ellipse cx="40" cy="62" rx="32" ry="8" fill="#3b0764" stroke="#7e22ce" strokeWidth="2.5" />
      <polygon points="40,12 24,58 56,58" fill="#4c1d95" stroke="#7e22ce" strokeWidth="2.5" />
      {/* Hat Ribbon and Gold Buckle */}
      <rect x="25" y="52" width="30" height="6" fill="#f97316" />
      <rect x="36" y="51" width="8" height="8" rx="1" fill="#fbbf24" stroke="#b45309" strokeWidth="1.5" />
      {/* Star accent */}
      <polygon points="40,28 42,32 46,32 43,35 44,39 40,36 36,39 37,35 34,32 38,32" fill="#fde047" />
    </svg>
  );
}

export function BlackCatIllustration({ className = 'w-16 h-16' }: IllustrationProps) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none">
      {/* Black Cat Head & Pointy Ears */}
      <polygon points="22,18 20,40 34,32" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
      <polygon points="58,18 46,32 60,40" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
      <circle cx="40" cy="46" rx="22" ry="20" fill="#18181b" stroke="#3f3f46" strokeWidth="2.5" />
      {/* Piercing Glowing Eyes */}
      <ellipse cx="32" cy="44" rx="4" ry="5.5" fill="#facc15" />
      <ellipse cx="48" cy="44" rx="4" ry="5.5" fill="#facc15" />
      <line x1="32" y1="40" x2="32" y2="48" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="48" y1="40" x2="48" y2="48" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
      {/* Tiny Pink Nose & Whiskers */}
      <polygon points="40,51 38,54 42,54" fill="#f472b6" />
      <line x1="26" y1="52" x2="16" y2="50" stroke="#a1a1aa" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="26" y1="55" x2="16" y2="56" stroke="#a1a1aa" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="54" y1="52" x2="64" y2="50" stroke="#a1a1aa" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="54" y1="55" x2="64" y2="56" stroke="#a1a1aa" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function getCategoryIllustration(slug: string, className?: string) {
  switch (slug) {
    case 'for-kids':
      return <KidIllustration className={className} />;
    case 'for-adults':
      return <AdultIllustration className={className} />;
    case 'cute':
      return <CuteIllustration className={className} />;
    case 'easy':
      return <EasyIllustration className={className} />;
    case 'pumpkin':
      return <PumpkinIllustration className={className} />;
    case 'ghost':
      return <GhostIllustration className={className} />;
    case 'witch':
      return <WitchIllustration className={className} />;
    case 'black-cat':
      return <BlackCatIllustration className={className} />;
    default:
      return <PumpkinIllustration className={className} />;
  }
}
