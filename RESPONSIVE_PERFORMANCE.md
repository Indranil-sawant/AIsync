# RESPONSIVE_PERFORMANCE.md — Multi-Tier Responsive & Performance Specification

---

## 1. Hard Project Requirement

Flawless performance and responsive adaptation across all screen sizes and device power tiers are non-negotiable hard requirements for **Aisync Software Solutions**.

The experience must maintain 60fps frame rates and sub-second load performance whether accessed from a dual-GPU workstation on 1Gbps fiber or a low-cost mobile phone on a throttled cellular connection.

---

## 2. Progressive Enhancement Device Tier Matrix

```text
HIGH-END DESKTOP (Width >= 1280px, Discrete GPU, High DPIS)
   │  └── Full cinematic lighting, ambient cursor effects, subtle scroll reveals
   ▼
TABLET & SMALL LAPTOPS (Width 768px - 1279px, Touch / Pointer)
   │  └── Reduced motion complexity, streamlined layout grids, touch-friendly targets
   ▼
MOBILE DEVICES (Width 320px - 767px, Touch Screen, Mobile CPU)
   │  └── Lightweight visual structure, vertical stacking, zero heavy blur effects
   ▼
LOW-POWER / SAVER MODE (Save-Data, Low Hardware Concurrency, Reduced Motion)
      └── Minimal nonessential motion, static media fallbacks, core text clarity
```

### Feature Tier Breakdown

| Feature | High-End Desktop | Tablet | Mobile | Low-Power / Battery Saver |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Background** | Ambient GPU Shader / Dynamic Canvas | High-res Static Image / Lightweight Canvas | Static High-Res WebP Image | Lightweight CSS Gradient |
| **Backdrop Blur** | `backdrop-filter: blur(16px)` | `backdrop-filter: blur(8px)` | Solid dark background | Solid dark background |
| **Scroll Animations** | Multi-layer staggered parallax | Single-layer fade entry | Simple opacity reveals | Instant CSS display |
| **Typography** | Dynamic clamp display sizes | Scaled desktop sizes | Compact mobile scale | Compact mobile scale |

---

## 3. Strict Non-Mandatory FX Rule

Heavy visual FX—including 3D canvases, WebGL shaders, interactive particle clouds, background video loops, dynamic blur overlays, and smooth-scroll hijacking—**MUST NEVER BE MANDATORY** for comprehending content, navigating the site, or submitting forms.

### Compliance Directives
1. Every 3D canvas or video element MUST feature a robust, immediate CSS static image fallback.
2. Content structure and navigation MUST remain 100% accessible if JavaScript execution is delayed or disabled.
3. Smooth-scroll libraries (e.g. Lenis) MUST be automatically disabled on mobile browsers and devices detecting touch input or reduced motion preferences.

---

## 4. Performance Budgets & Core Web Vitals Standards

| Core Metric | Target Threshold | Maximum Acceptable Boundary |
| :--- | :--- | :--- |
| **Largest Contentful Paint (LCP)** | `< 1.2s` | `1.8s` |
| **Interaction to Next Paint (INP)** | `< 50ms` | `100ms` |
| **Cumulative Layout Shift (CLS)** | `0.00` | `0.02` |
| **First Contentful Paint (FCP)** | `< 0.8s` | `1.2s` |
| **Total Blocking Time (TBT)** | `0ms` | `< 100ms` |

### Asset Size Budgets
- **Initial JS Bundle (Gzipped)**: `< 75 KB`
- **Initial CSS Bundle (Gzipped)**: `< 15 KB`
- **Font Subsets (WOFF2)**: `< 45 KB` total across all weights
- **Hero Image / Media**: `< 150 KB` (AVIF / WebP format)
- **Icon Set**: SVG inline symbols or tiny vector icon bundle (< 10 KB)

---

## 5. Mobile & Touch Target Ergonomics

- **Minimum Touch Target**: Every interactive element on mobile screens must have a minimum clickable area of `44px x 44px`.
- **Thumb Zone Design**: Primary mobile actions (mobile navigation toggle, primary CTA) must sit comfortably within standard thumb reach zones.
- **Form Input Zoom Prevention**: All mobile text inputs must maintain `font-size: 16px` (or `1rem`) minimum to prevent iOS Safari auto-zooming on focus.
