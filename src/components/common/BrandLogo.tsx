import React from 'react';
import { Link } from 'react-router-dom';

export interface BrandLogoProps {
  /**
   * Layout variant:
   * - 'horizontal': Mark on left, Wordmark on right (default)
   * - 'vertical': Mark on top, Wordmark below
   * - 'mark-only': Only the circuit-sync emblem
   * - 'wordmark-only': Only the typography
   */
  variant?: 'horizontal' | 'vertical' | 'mark-only' | 'wordmark-only';
  
  /**
   * Visual theme:
   * - 'light': Navy text & dark accents for light backgrounds
   * - 'dark': White text & luminous accents for dark backgrounds
   * - 'auto': Uses contextual text & CSS variables
   */
  theme?: 'light' | 'dark' | 'auto';
  
  /**
   * Monochrome color override:
   * - 'none': Full brand colors (Navy #141f3d + Cobalt #2563eb + White)
   * - 'white': Pure white for dark cards / mockups
   * - 'black': Pure black / dark navy for high contrast print/stamps
   */
  monochrome?: 'none' | 'white' | 'black';

  /**
   * Preset sizing:
   * - 'xs': 24px mark
   * - 'sm': 32px mark
   * - 'md': 40px mark (standard header)
   * - 'lg': 54px mark
   * - 'xl': 76px mark
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  /** Optional link destination. If provided, wraps logo in router Link or anchor */
  to?: string;
  
  /** Optional custom class name applied to container */
  className?: string;
  
  /** Optional override for mark pixel size */
  iconSize?: number;

  /** Hide subtitle ('SOFTWARE SOLUTIONS') */
  hideSubtitle?: boolean;
}

/**
 * Pure Vector SVG of the Official AISYNC Circuit-Sync Emblem
 */
export const BrandMarkIcon: React.FC<{
  size?: number;
  className?: string;
  monochrome?: 'none' | 'white' | 'black';
  theme?: 'light' | 'dark' | 'auto';
}> = ({ size = 40, className = '', monochrome = 'none', theme = 'auto' }) => {
  // Brand color mapping
  let navyColor = '#141f3d'; // Deep brand navy
  let blueColor = '#2563eb'; // Electric cobalt blue
  let coreBg = '#2563eb';    // Core capsule fill
  let coreWhite = '#ffffff'; // White inner cross & node

  if (monochrome === 'white') {
    navyColor = '#ffffff';
    blueColor = '#ffffff';
    coreBg = '#ffffff';
    coreWhite = '#0f172a';
  } else if (monochrome === 'black') {
    navyColor = '#0f172a';
    blueColor = '#0f172a';
    coreBg = '#0f172a';
    coreWhite = '#ffffff';
  } else if (theme === 'dark') {
    navyColor = '#ffffff';
    blueColor = '#3b82f6';
    coreBg = '#2563eb';
    coreWhite = '#ffffff';
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      aria-hidden="true"
    >
      {/* 4-fold Rotational Circuit Labyrinth System */}
      {/* Top-Right Quadrant */}
      <path d="M 108 16 A 84 84 0 0 1 184 92" stroke={navyColor} strokeWidth="9.5" strokeLinecap="square" />
      <path d="M 108 16 V 52" stroke={blueColor} strokeWidth="9.5" strokeLinecap="square" />
      <path d="M 108 52 A 48 48 0 0 1 148 92" stroke={blueColor} strokeWidth="8" strokeLinecap="square" />
      <path d="M 184 92 H 148" stroke={navyColor} strokeWidth="9.5" strokeLinecap="square" />

      {/* Bottom-Right Quadrant */}
      <path d="M 184 108 A 84 84 0 0 1 108 184" stroke={navyColor} strokeWidth="9.5" strokeLinecap="square" />
      <path d="M 184 108 H 148" stroke={blueColor} strokeWidth="9.5" strokeLinecap="square" />
      <path d="M 148 108 A 48 48 0 0 1 108 148" stroke={blueColor} strokeWidth="8" strokeLinecap="square" />
      <path d="M 108 184 V 148" stroke={navyColor} strokeWidth="9.5" strokeLinecap="square" />

      {/* Bottom-Left Quadrant */}
      <path d="M 92 184 A 84 84 0 0 1 16 108" stroke={navyColor} strokeWidth="9.5" strokeLinecap="square" />
      <path d="M 92 184 V 148" stroke={blueColor} strokeWidth="9.5" strokeLinecap="square" />
      <path d="M 92 148 A 48 48 0 0 1 52 108" stroke={blueColor} strokeWidth="8" strokeLinecap="square" />
      <path d="M 16 108 H 52" stroke={navyColor} strokeWidth="9.5" strokeLinecap="square" />

      {/* Top-Left Quadrant */}
      <path d="M 16 92 A 84 84 0 0 1 92 16" stroke={navyColor} strokeWidth="9.5" strokeLinecap="square" />
      <path d="M 16 92 H 52" stroke={blueColor} strokeWidth="9.5" strokeLinecap="square" />
      <path d="M 52 92 A 48 48 0 0 1 92 52" stroke={blueColor} strokeWidth="8" strokeLinecap="square" />
      <path d="M 92 16 V 52" stroke={navyColor} strokeWidth="9.5" strokeLinecap="square" />

      {/* Inner Spoke Connectors into Center Frame */}
      <path d="M 100 52 V 68" stroke={navyColor} strokeWidth="8.5" strokeLinecap="square" />
      <path d="M 100 148 V 132" stroke={navyColor} strokeWidth="8.5" strokeLinecap="square" />
      <path d="M 52 100 H 68" stroke={navyColor} strokeWidth="8.5" strokeLinecap="square" />
      <path d="M 148 100 H 132" stroke={navyColor} strokeWidth="8.5" strokeLinecap="square" />

      {/* Center Frame Box */}
      <rect x="66" y="66" width="68" height="68" rx="16" fill="none" stroke={navyColor} strokeWidth="8.5" />

      {/* Center Neural Cross: Intersecting Diagonal Capsules */}
      {/* 1. Solid Cobalt Blue Capsule (-45 deg diagonal) */}
      <g transform="rotate(-45 100 100)">
        <rect x="72" y="87" width="56" height="26" rx="13" fill={coreBg} />
      </g>

      {/* 2. White Outline Capsule (+45 deg diagonal) */}
      <g transform="rotate(45 100 100)">
        <rect x="72" y="87" width="56" height="26" rx="13" fill="none" stroke={coreWhite} strokeWidth="3.5" />
      </g>

      {/* 3. Central Synaptic Node */}
      <circle cx="100" cy="100" r="3.8" fill={coreWhite} />
    </svg>
  );
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  theme = 'auto',
  monochrome = 'none',
  size = 'md',
  to,
  className = '',
  iconSize,
  hideSubtitle = false,
}) => {
  // Preset scale mappings
  const sizeMap = {
    xs: { icon: 24, title: 'text-sm', sub: 'text-[7.5px] tracking-[0.14em]', gap: 'gap-1.5' },
    sm: { icon: 32, title: 'text-base', sub: 'text-[8.5px] tracking-[0.15em]', gap: 'gap-2' },
    md: { icon: 40, title: 'text-[19px]', sub: 'text-[9.5px] tracking-[0.16em]', gap: 'gap-2.5' },
    lg: { icon: 54, title: 'text-2xl', sub: 'text-[11.5px] tracking-[0.18em]', gap: 'gap-3.5' },
    xl: { icon: 76, title: 'text-4xl', sub: 'text-[14.5px] tracking-[0.20em]', gap: 'gap-4' },
  };

  const currentSize = sizeMap[size];
  const renderedIconSize = iconSize || currentSize.icon;

  // Typography color classes
  let titleColor = 'text-[#141f3d]';
  let subColor = 'text-[#141f3d]';

  if (monochrome === 'white') {
    titleColor = 'text-white';
    subColor = 'text-slate-300';
  } else if (monochrome === 'black') {
    titleColor = 'text-slate-950';
    subColor = 'text-slate-800';
  } else if (theme === 'dark') {
    titleColor = 'text-white';
    subColor = 'text-slate-300';
  } else if (theme === 'light') {
    titleColor = 'text-[#141f3d]';
    subColor = 'text-[#141f3d]';
  }

  // Content render
  const content = (
    <div
      className={`inline-flex select-none group items-center ${
        variant === 'vertical' ? 'flex-col text-center ' + currentSize.gap : currentSize.gap
      } ${className}`}
    >
      {/* 1. Emblem Mark */}
      {variant !== 'wordmark-only' && (
        <div className="relative flex items-center justify-center shrink-0">
          <BrandMarkIcon
            size={renderedIconSize}
            monochrome={monochrome}
            theme={theme}
            className="transition-transform duration-300 ease-out group-hover:scale-105"
          />
        </div>
      )}

      {/* 2. Official Brand Typography */}
      {variant !== 'mark-only' && (
        <div className={`flex flex-col leading-none ${variant === 'vertical' ? 'items-center' : 'items-start'}`}>
          {/* Primary Wordmark: AISYNC in bold Montserrat */}
          <span
            className={`font-brand font-black uppercase tracking-tight transition-colors ${currentSize.title} ${titleColor}`}
          >
            AISYNC
          </span>

          {/* Secondary Subtitle: SOFTWARE SOLUTIONS with wide optical tracking */}
          {!hideSubtitle && (
            <span
              className={`font-brand font-bold uppercase mt-1 transition-colors ${currentSize.sub} ${subColor}`}
            >
              SOFTWARE SOLUTIONS
            </span>
          )}
        </div>
      )}
    </div>
  );

  // Link wrapper if destination provided
  if (to) {
    if (to.startsWith('http')) {
      return (
        <a href={to} className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-accent-primary/40 rounded-lg">
          {content}
        </a>
      );
    }
    return (
      <Link to={to} className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-accent-primary/40 rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
};
