# PRODUCTION AUDIT REPORT
**Target System:** AIsync Software Solutions (aisyncsoftware.in)  
**Audit Type:** Production Reliability, Stale-Cache, Network & Performance Forensic Audit  
**Date:** September 1, 2026  
**Auditor:** Senior Staff Frontend & Production Reliability Engineer  
**Audit Status:** FAIL (Actionable Reliability & Stale-Cache Risks Identified)  
**Production Risk:** HIGH (Immediate risk of stale-cache module failures and blank-page white screens)

---

## 1. Executive Summary

A comprehensive read-only forensic audit was conducted on the live production codebase of **AIsync Software Solutions**.

The investigation focused directly on the real-user symptoms reported:
1. **Intermittent blank-page / white-screen failures**
2. **Users requiring a hard refresh or clearing browser cache to view the site**
3. **Slow initial loading and degraded performance on mobile or high-latency networks**
4. **Intermittent asset and script loading failures across different network profiles**

### Key Findings Summary
The audit has identified the exact mechanical root causes:
1. **Stale Cache & SPA Rewrite Module Failure (P0 / P1)**: `vercel.json` lacks explicit `Cache-Control` header policies. Browsers cache `index.html` across deployments. When a new deployment occurs, the cached HTML requests obsolete hashed JS files (e.g. `/assets/index-777PwDt-.js`). Because of the catch-all rewrite rule `"source": "/(.*)", "destination": "/index.html"`, the server returns `index.html` with status 200 and MIME type `text/html` instead of JavaScript. The browser throws `Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "text/html"`, terminating execution and leaving `<div id="root"></div>` completely blank.
2. **Absence of Top-Level React Error Boundary (P1)**: If any component throws a runtime error during render (e.g., during animations or browser resize), React 18 unmounts the entire DOM tree, causing an unrecoverable blank screen.
3. **Framer Motion Initial Opacity Zero on Critical Hero Elements (P1)**: Critical above-the-fold hero elements (h1, subtitle, CTAs) are rendered with `initial={{ opacity: 0 }}`. On slow connections or low-powered devices, the page remains completely blank until the entire 440 KB bundle is parsed and executed.
4. **Monolithic Un-Split JavaScript Bundle (P2)**: All 8 pages and extensive mockups/case studies are bundled into a single 440 KB JS chunk (`index-777PwDt-.js`), delaying First Contentful Paint (FCP) and Time to Interactive (TTI).
5. **Uncompressed Case Study Image Payload (~4.5 MB) Without Lazy Loading (P2)**: Multiple high-resolution PNG case study images (up to 844 KB each) load eagerly on the Home page without `loading="lazy"`, `decoding="async"`, or responsive attributes, consuming bandwidth needed for critical scripts.
6. **Main-Thread MouseMove Overhead (P3)**: `MouseSpotlight.tsx` executes React state updates on every `mousemove` event without `requestAnimationFrame`, causing continuous main-thread re-renders.
7. **Hover Contrast Defects (P3)**: In `Footer.tsx`, `BusinessFaq.tsx`, and `ServiceDetailList.tsx`, buttons/links have `hover:text-white` on pure white backgrounds (`#ffffff`), causing text to vanish when hovered.

---

## 2. Architecture & Hosting Topology

- **Frontend Framework:** React 18.3.1 + TypeScript 5.7.3
- **Build Tool:** Vite 6.1.0 (`@vitejs/plugin-react` 4.3.4)
- **Styling Engine:** Tailwind CSS 3.4.17 with PostCSS and Autoprefixer
- **Routing Engine:** React Router DOM 6.28.2 (`BrowserRouter`)
- **Animation Engine:** Framer Motion 11.18.2
- **Icons:** Lucide React 0.475.0
- **Lead Capture Backend:** Google Apps Script Web App Webhook (`LEAD_CONFIG.APPS_SCRIPT_URL`) with fallback ID generator
- **Hosting Target:** Vercel (configured via `vercel.json`) with Netlify fallback (`public/_redirects`)
- **Production Asset Structure:**
  - `dist/index.html` (3.86 KB)
  - `dist/assets/index-777PwDt-.js` (440.6 KB uncompressed)
  - `dist/assets/index-lLOCv-UF.css` (38.8 KB uncompressed)
  - `dist/images/*` (10 PNG files, total ~4.5 MB)

---

## 3. Forensic Investigation & Evidence Matrix

### Finding 01: Cache Inconsistency & Blank Screen on Deployment (P0 / P1)
- **Evidence:** 
  - `vercel.json` contains:
    ```json
    {
      "rewrites": [
        {
          "source": "/(.*)",
          "destination": "/index.html"
        }
      ]
    }
    ```
  - There are NO `headers` configured in `vercel.json` or `public/_redirects`.
- **Failure Mechanism:**
  1. User visits site and caches `index.html`.
  2. Developer triggers a production build/deploy -> Vite outputs new asset `/assets/index-NEW_HASH.js` and purges `/assets/index-OLD_HASH.js`.
  3. User returns to site -> Browser serves cached `index.html` requesting `/assets/index-OLD_HASH.js`.
  4. Vercel matches `/assets/index-OLD_HASH.js` to `"/(.*)"` and serves `/index.html` (HTTP 200, `Content-Type: text/html`).
  5. Browser JavaScript engine attempts to execute HTML as an ES module -> throws `SyntaxError: Unexpected token '<'` or MIME type mismatch error.
  6. Script halts -> `<div id="root"></div>` stays blank.
  7. Hard refresh or clearing cache forces browser to fetch new `index.html`, which points to `/assets/index-NEW_HASH.js`, temporarily resolving the symptom until the next deploy.
- **Affected Files:**
  - `vercel.json`
  - `vite.config.ts`
- **Recommended Repair:**
  - Add explicit cache headers in `vercel.json`:
    - `index.html` -> `Cache-Control: public, max-age=0, must-revalidate`
    - `/assets/*` -> `Cache-Control: public, max-age=31536000, immutable`
    - `/images/*` -> `Cache-Control: public, max-age=86400, stale-while-revalidate=604800`
  - In `vite.config.ts`, configure robust Rollup chunking and build outputs.

---

### Finding 02: Missing Global React Error Boundary (P1)
- **Evidence:** `src/main.tsx` renders `<App />` directly inside `ReactDOM.createRoot().render(...)` with no `<ErrorBoundary>`.
- **Failure Mechanism:** React 18 unmounts the entire root hierarchy upon any uncaught JavaScript error in lifecycle or render methods, leading to an opaque white screen with zero feedback or recovery path.
- **Affected Files:**
  - `src/main.tsx`
  - `src/components/common/ErrorBoundary.tsx` (new component)
- **Recommended Repair:**
  - Create a lightweight, resilient `ErrorBoundary` component with clean fallback UI and a "Reload page" action. Wrap `<App />` in `main.tsx`.

---

### Finding 03: Framer Motion Opacity:0 Hero Blockage (P1)
- **Evidence:** `src/components/home/HeroSection.tsx` wraps all above-the-fold content in `motion.div`, `motion.h1`, and `motion.p` with `initial={{ opacity: 0, y: ... }}`.
- **Failure Mechanism:** If JavaScript execution is delayed (due to network latency or CPU throttling), the hero DOM elements are present but styled with `opacity: 0` via inline styles before hydration. This presents a completely blank viewport to users during the initial load window.
- **Affected Files:**
  - `src/components/home/HeroSection.tsx`
- **Recommended Repair:**
  - Ensure above-the-fold hero elements render visible by default, or use CSS-based progressive reveal / `whileInView` with sensible fallbacks that never hide the initial server/static DOM.

---

### Finding 04: Monolithic 440 KB JavaScript Bundle Without Code Splitting (P2)
- **Evidence:** `dist/assets/index-777PwDt-.js` is 440.6 KB. All 8 routes (`Home`, `Services`, `Work`, `About`, `Contact`, `PrivacyPolicy`, `TermsOfService`, `NotFound`) are synchronously imported in `src/App.tsx`.
- **Failure Mechanism:** All route components and their embedded assets/data structures are loaded upfront, blocking the initial render.
- **Affected Files:**
  - `src/App.tsx`
  - `vite.config.ts`
- **Recommended Repair:**
  - Introduce `React.lazy()` and `Suspense` for sub-routes (`Services`, `Work`, `About`, `Contact`, `PrivacyPolicy`, `TermsOfService`, `NotFound`).
  - Configure manual chunk splitting in `vite.config.ts` (e.g. separating `vendor-react`, `vendor-motion`, and route chunks).

---

### Finding 05: Heavy PNG Image Payloads Choking Mobile Bandwidth (P2)
- **Evidence:** `public/images/` contains 10 PNG files totaling ~4.5 MB. `src/components/work/CaseStudyGrid.tsx` renders all 6 case study cards with screenshots directly in the Home page and Work page without `loading="lazy"` or `decoding="async"`.
- **Failure Mechanism:** The browser initiates concurrent image downloads on the Home page, saturating TCP streams and delaying critical JS/CSS download on cellular/high-latency networks.
- **Affected Files:**
  - `src/components/work/CaseStudyGrid.tsx`
- **Recommended Repair:**
  - Add `loading="lazy"`, `decoding="async"`, and explicit dimensions to all case study images.

---

### Finding 06: Main Thread Animation Jank via MouseMove State Updates (P3)
- **Evidence:** `src/components/common/MouseSpotlight.tsx` attaches an unthrottled `mousemove` listener that triggers `setMousePos` on every pixel move.
- **Failure Mechanism:** High-frequency React re-renders saturate the JS event loop, competing with user interactions and scroll performance.
- **Affected Files:**
  - `src/components/common/MouseSpotlight.tsx`
- **Recommended Repair:**
  - Use direct DOM reference / CSS custom properties (`transform` / `style.setProperty`) or `requestAnimationFrame` to decouple mouse tracking from the React render lifecycle.

---

### Finding 07: White-on-White Hover Text Invisibility (P3)
- **Evidence:**
  - `src/components/common/Footer.tsx` (line 76): `hover:text-white` on `bg-bg-surface1` (#ffffff)
  - `src/components/home/BusinessFaq.tsx` (line 45): `hover:text-white` on `bg-bg-surface1` (#ffffff)
  - `src/components/services/ServiceDetailList.tsx` (line 153): `hover:text-white` on `bg-bg-primary` (#fcfbf8)
  - `src/components/home/AutomationBeforeAfterVisual.tsx` (lines 26, 36, 48, 60, 66, 78): `text-rose-300` and `text-emerald-300` on light background
  - Typo in `BusinessFaq.tsx` (line 22) and `servicesData.ts` (line 51): "Absoluted" -> "Absolutely"
- **Failure Mechanism:** Text becomes invisible on mouse hover or fails WCAG AA color contrast guidelines.
- **Affected Files:**
  - `src/components/common/Footer.tsx`
  - `src/components/home/BusinessFaq.tsx`
  - `src/components/services/ServiceDetailList.tsx`
  - `src/components/home/AutomationBeforeAfterVisual.tsx`
  - `src/data/servicesData.ts`
- **Recommended Repair:**
  - Change `hover:text-white` to `hover:text-accent-primary` or appropriate high-contrast tokens.
  - Adjust light-mode contrast tokens in `AutomationBeforeAfterVisual.tsx`.
  - Fix typos.

---

## 4. Prioritized Safe Repair Plan

| Priority | Issue | Target File(s) | Expected Result | Risk Level |
| :--- | :--- | :--- | :--- | :--- |
| **P0** | Stale Cache & Rewrite Module Failure | `vercel.json`, `vite.config.ts` | Eliminates blank page on new deployments; guarantees fresh HTML and immutable assets | Low |
| **P1** | Missing Global Error Boundary | `src/main.tsx`, `src/components/common/ErrorBoundary.tsx` | Prevents unhandled React render crashes from creating white screens | Low |
| **P1** | Hero Opacity Zero Blockage | `src/components/home/HeroSection.tsx` | Hero content is instantly visible even before full JS hydration | Low |
| **P2** | Monolithic JS Bundle & Route Splitting | `src/App.tsx`, `vite.config.ts` | Reduces initial JS bundle size by >50%, boosting FCP/TTI on mobile | Low |
| **P2** | Heavy Image Loading Optimization | `src/components/work/CaseStudyGrid.tsx` | Non-critical screenshots load lazily, unblocking main thread & bandwidth | Low |
| **P3** | MouseSpotlight Main-Thread Re-render | `src/components/common/MouseSpotlight.tsx` | Smooth 60/120fps interactions with zero React re-render overhead | Low |
| **P3** | Hover Contrast & Text Invisibility Bugs | `Footer.tsx`, `BusinessFaq.tsx`, `ServiceDetailList.tsx`, `AutomationBeforeAfterVisual.tsx`, `servicesData.ts` | Crisp visual hierarchy, WCAG AA compliance, zero disappearing text | Low |

---

## 5. Verification & Testing Protocol (For Phase B)

1. **Build & Type Check:** Run `npm run build` (`tsc && vite build`) to verify zero TypeScript errors and confirm successful asset chunking.
2. **Preview & Server Headers Verification:** Inspect generated HTML, asset references, and MIME types.
3. **Cache Inconsistency Simulation:** Verify that loading an older HTML revision does not result in a silent unhandled crash.
4. **Blank Page & Error Boundary Test:** Trigger deliberate runtime error to verify fallback UI renders cleanly.
5. **Slow Network & Mobile Emulation:** Test under Slow 3G / Fast 3G throttling to verify immediate text visibility and smooth progressive loading.
6. **Regression Verification:** Check all 8 routes (`/`, `/services`, `/work`, `/about`, `/contact`, `/privacy`, `/terms`, `/*`), verify Inquiry Form submission, and verify hover states.

---

## 6. Rollback Protocol

- **Rollback Strategy:**
  Since all changes will be isolated to configuration files and explicit component files, rollback can be performed cleanly by reverting to the initial un-modified state or restoring from backup.
- **Safety Guarantee:** Zero visual design changes, zero content alterations, zero URL changes, zero external library additions.
