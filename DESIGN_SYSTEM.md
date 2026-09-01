# DESIGN_SYSTEM.md — Visual Architecture & Motion System

---

## 1. Visual Language & Philosophy

The **Aisync Software Solutions** design language is engineered for **premium technical authority**. It balances dark cinematic depth with crisp micro-detail, disciplined grid alignment, and purposeful motion.

### Core Visual Principles
- **Dark-First Architectural Depth**: Deep obsidian/near-black backgrounds (`#07080a`, `#0d0f12`) paired with crisp white text (`#f8fafc`) and slate muted secondary text (`#94a3b8`).
- **Single Signature Brand Accent**: A single controlled accent color (e.g., Electric Indigo `#6366f1` or Cyan Core `#06b6d4`) used deliberately for focus states, primary CTA highlights, and active indicators.
- **Subtle Precision Borders**: Micro-borders (`1px solid rgba(255, 255, 255, 0.08)`) to structure layout hierarchy without heavy visual clutter.
- **Generous Whitespace & Scale**: Large, authoritative typography contrasts with expansive margin padding to create structural breathing room.
- **Restrained Luxury**: No cartoonish illustrations, no random neon glows, no excessive glassmorphism, no generic stock photo grids.

### Explicitly Forbidden Aesthetics
❌ Generic SaaS landing page formulas (centered hero + 3 identical icon cards + pastel badges)  
❌ Excessive neon rainbow gradients or crypto/gaming glow effects  
❌ Heavy blur glassmorphism that causes mobile GPU lag  
❌ Generic stock photography of hands typing on laptops  
❌ Endless uniform card grids without visual rhythm or editorial hierarchy  

---

## 2. Design Tokens

### Color Palette Architecture

```css
:root {
  /* Surfaces & Backgrounds */
  --bg-primary: #07080a;        /* Deepest obsidian background */
  --bg-surface-1: #0d0f12;      /* Primary container surface */
  --bg-surface-2: #14171d;      /* Hover state / subtle surface overlay */
  --bg-surface-elevated: #1e222b;/* Elevated dropdown / modal surface */

  /* Text & Content */
  --text-primary: #f8fafc;      /* Pure off-white primary text */
  --text-secondary: #94a3b8;    /* Muted slate secondary text */
  --text-tertiary: #64748b;     /* De-emphasized metadata & labels */

  /* Precision Borders & Dividers */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-medium: rgba(255, 255, 255, 0.16);
  --border-accent: rgba(99, 102, 241, 0.4);

  /* Signature Brand Accent */
  --accent-primary: #6366f1;     /* Electric Indigo */
  --accent-hover: #4f46e5;       /* Hover state Indigo */
  --accent-glow: rgba(99, 102, 241, 0.15);
}
```

### Typography Scale

```css
:root {
  --font-sans: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Typography Scale */
  --text-display: clamp(3rem, 6vw, 5.5rem);    /* Hero Headline */
  --text-h1: clamp(2.25rem, 4vw, 3.75rem);       /* Section Titles */
  --text-h2: clamp(1.75rem, 3vw, 2.5rem);        /* Subsection Titles */
  --text-h3: clamp(1.25rem, 2vw, 1.75rem);       /* Card Titles */
  --text-body-lg: 1.125rem;                      /* Lead Paragraphs */
  --text-body: 1rem;                             /* Standard Body */
  --text-sm: 0.875rem;                           /* Sub-captions & Nav */
  --text-xs: 0.75rem;                            /* Badges & Mono Metadata */
}
```

---

## 3. Motion System & Physics Standards

Motion must communicate **hierarchy**, **continuity**, **feedback**, and **narrative progression**. Motion must never feel random or decorative.

### Motion Tiers

#### 1. Micro-Interactions (Immediate Feedback)
- **Target**: Buttons, text links, icon buttons, form controls.
- **Duration**: `150ms - 200ms`.
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (Apple/Linear-style crisp snap).
- **Properties**: `transform: scale()`, `opacity`, `border-color`.

#### 2. UI Transitions (Structural Continuity)
- **Target**: Card expands, tab switches, dropdown reveals, modal overlays.
- **Duration**: `250ms - 350ms`.
- **Easing**: `cubic-bezier(0.25, 1, 0.5, 1)`.
- **Properties**: `transform: translate3d()`, `opacity`.

#### 3. Scroll Storytelling (Section Progression)
- **Target**: Hero typography reveal, image masking on scroll, staggered card entry.
- **Trigger**: Scroll position / Intersection Observer.
- **Easing**: Smooth progressive scrub or staggered entry (`50ms` stagger delay per element).
- **Properties**: Strictly GPU-accelerated `transform` and `opacity`.

#### 4. Cinematic Moments (Hero & Key Transitions)
- **Target**: Initial page load reveal, hero background lighting shift.
- **Duration**: `600ms - 1000ms`.
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)`.

### Strict Animation Rules
- **GPU Acceleration**: Animate ONLY `transform` and `opacity`. Never animate `width`, `height`, `margin`, `padding`, `top`, or `left` directly as they trigger costly layout recalculations.
- **Accessibility Integration**: All animations MUST obey `prefers-reduced-motion`. When reduced motion is requested, fall back immediately to instant zero-duration transitions.

```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
