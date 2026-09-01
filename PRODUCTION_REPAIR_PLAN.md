# PRODUCTION REPAIR PLAN
**Target System:** AIsync Software Solutions (aisyncsoftware.in)  
**Execution Mode:** Phase B Safe Repair  
**Date:** September 1, 2026  
**Engineer:** Senior Staff Frontend & Production Reliability Engineer  

---

## Batch 1: P0 — Stale Cache Inconsistency & Deployment Rewrite Fix

### 1.1 `vercel.json`
- **Problem:** Browsers cache `index.html`. On deployment with new asset hashes, old `index.html` requests non-existent JS chunks. Vercel SPA rewrite serves `index.html` as JS, causing fatal MIME mismatch / syntax errors and blank screens.
- **Evidence:** `vercel.json` has only rewrite rules with zero `headers` policies.
- **Root Cause:** Missing `Cache-Control` headers for HTML vs. fingerprinted assets.
- **Exact File:** [vercel.json](file:///c:/Users/indranil%20sawant/Desktop/Aisync%20Software%20Solutions/vercel.json)
- **Exact Change:** Add `headers` array with:
  - `index.html` -> `Cache-Control: public, max-age=0, must-revalidate`
  - `/assets/(.*)` -> `Cache-Control: public, max-age=31536000, immutable`
  - `/(images|favicon.svg)(.*)` -> `Cache-Control: public, max-age=86400, stale-while-revalidate=604800`
- **Risk:** Low. Standard production practice for SPAs.
- **Expected Result:** Instant updates on deployment without stale JS errors; high caching efficiency for static assets.
- **Test Procedure:** Verify `vercel.json` syntax.
- **Rollback:** Revert `vercel.json` to original 8 lines.

### 1.2 `vite.config.ts`
- **Problem:** Monolithic 440 KB bundle causes long execution delay on main thread.
- **Evidence:** `dist/assets/index-777PwDt-.js` is 440.6 KB.
- **Root Cause:** Lack of Rollup manual chunk configuration.
- **Exact File:** [vite.config.ts](file:///c:/Users/indranil%20sawant/Desktop/Aisync%20Software%20Solutions/vite.config.ts)
- **Exact Change:** Add `build.rollupOptions.output.manualChunks` separating `vendor-react` (`react`, `react-dom`, `react-router-dom`), `vendor-motion` (`framer-motion`), and `vendor-icons` (`lucide-react`).
- **Risk:** Low. Standard Vite/Rollup optimization.
- **Expected Result:** Smaller initial chunk size, parallel cacheable vendor bundles.
- **Test Procedure:** Run `npm run build` and inspect `dist/assets/` output chunks.
- **Rollback:** Revert `vite.config.ts`.

---

## Batch 2: P1 — Global React Error Boundary

### 2.1 `src/components/common/ErrorBoundary.tsx` & `src/main.tsx`
- **Problem:** Any unhandled runtime render error unmounts the entire React tree, causing an unrecoverable blank white screen.
- **Evidence:** No `<ErrorBoundary>` in `src/main.tsx`.
- **Root Cause:** React 18 default unmounting behavior for uncaught render exceptions.
- **Exact Files:** 
  - [src/components/common/ErrorBoundary.tsx](file:///c:/Users/indranil%20sawant/Desktop/Aisync%20Software%20Solutions/src/components/common/ErrorBoundary.tsx) (NEW)
  - [src/main.tsx](file:///c:/Users/indranil%20sawant/Desktop/Aisync%20Software%20Solutions/src/main.tsx) (MODIFY)
- **Exact Change:** Create `ErrorBoundary` with clean fallback UI and "Reload Page" button; wrap `<App />`.
- **Risk:** Low. Defensive containment.
- **Expected Result:** Graceful fallback UI instead of blank white screen if an unexpected exception occurs.
- **Test Procedure:** Run `npm run build`.
- **Rollback:** Remove wrapper and delete component.

---

## Batch 3: P1 — Above-the-Fold Hero Resilience

### 3.1 `src/components/home/HeroSection.tsx`
- **Problem:** Hero text elements are set to `initial={{ opacity: 0 }}`. On slow connections, the viewport is completely blank while waiting for 440 KB bundle execution.
- **Evidence:** Inline initial opacity 0 in `HeroSection.tsx`.
- **Root Cause:** Framer motion opacity initialization before hydration.
- **Exact File:** [src/components/home/HeroSection.tsx](file:///c:/Users/indranil%20sawant/Desktop/Aisync%20Software%20Solutions/src/components/home/HeroSection.tsx)
- **Exact Change:** Ensure initial DOM state remains visible (`opacity: 1`) or use subtle transform animations without initial zero opacity that hides text.
- **Risk:** Low. Preserves layout and styling.
- **Expected Result:** Hero text is immediately visible upon initial HTML paint.
- **Test Procedure:** Run `npm run build` and inspect rendering.
- **Rollback:** Revert `HeroSection.tsx`.

---

## Batch 4: P2 — Route-Based Code Splitting & Suspense

### 4.1 `src/App.tsx`
- **Problem:** All routes are bundled into the primary JS file.
- **Evidence:** Synchronous imports of `Services`, `Work`, `About`, `Contact`, `PrivacyPolicy`, `TermsOfService`, `NotFound`.
- **Root Cause:** Lack of `React.lazy()` route splitting.
- **Exact File:** [src/App.tsx](file:///c:/Users/indranil%20sawant/Desktop/Aisync%20Software%20Solutions/src/App.tsx)
- **Exact Change:** Convert sub-routes to `React.lazy()` wrapped in `<Suspense fallback={...}>`.
- **Risk:** Low. React Router 6 standard pattern.
- **Expected Result:** Sub-routes are fetched on demand; initial homepage download drops dramatically.
- **Test Procedure:** Run `npm run build` and verify route navigation.
- **Rollback:** Revert `src/App.tsx`.

---

## Batch 5: P2 — Heavy Case Study Image Optimization

### 5.1 `src/components/work/CaseStudyGrid.tsx`
- **Problem:** 6 large PNG screenshots (~4.5 MB) load eagerly on initial load.
- **Evidence:** `<img>` tags lack `loading="lazy"` and `decoding="async"`.
- **Root Cause:** Default eager image loading behavior.
- **Exact File:** [src/components/work/CaseStudyGrid.tsx](file:///c:/Users/indranil%20sawant/Desktop/Aisync%20Software%20Solutions/src/components/work/CaseStudyGrid.tsx)
- **Exact Change:** Add `loading="lazy"`, `decoding="async"`, and dimensions to screenshots.
- **Risk:** Low. Zero visual change.
- **Expected Result:** Below-the-fold images only load as the user scrolls, freeing bandwidth for critical resources.
- **Test Procedure:** Run `npm run build`.
- **Rollback:** Revert `CaseStudyGrid.tsx`.

---

## Batch 6: P3 — Interaction Optimization (MouseSpotlight)

### 6.1 `src/components/common/MouseSpotlight.tsx`
- **Problem:** Unthrottled mouse listener triggers React state update on every mousemove event.
- **Evidence:** `setMousePos` called on each `mousemove`.
- **Root Cause:** Direct state updating inside high-frequency mouse event handler.
- **Exact File:** [src/components/common/MouseSpotlight.tsx](file:///c:/Users/indranil%20sawant/Desktop/Aisync%20Software%20Solutions/src/components/common/MouseSpotlight.tsx)
- **Exact Change:** Use `requestAnimationFrame` or direct DOM element styling via ref to avoid React render cycles.
- **Risk:** Low. Pure performance enhancement.
- **Expected Result:** 60/120fps smooth cursor spotlight without main-thread re-render churn.
- **Test Procedure:** Run `npm run build`.
- **Rollback:** Revert `MouseSpotlight.tsx`.

---

## Batch 7: P3 — Hover Contrast & Typos Fixes

### 7.1 `Footer.tsx`, `BusinessFaq.tsx`, `ServiceDetailList.tsx`, `AutomationBeforeAfterVisual.tsx`, `servicesData.ts`
- **Problem:**
  - `hover:text-white` on white background makes text invisible.
  - Low-contrast text in `AutomationBeforeAfterVisual.tsx`.
  - "Absoluted" typo in `BusinessFaq.tsx` and `servicesData.ts`.
- **Exact Files:**
  - [src/components/common/Footer.tsx](file:///c:/Users/indranil%20sawant/Desktop/Aisync%20Software%20Solutions/src/components/common/Footer.tsx)
  - [src/components/home/BusinessFaq.tsx](file:///c:/Users/indranil%20sawant/Desktop/Aisync%20Software%20Solutions/src/components/home/BusinessFaq.tsx)
  - [src/components/services/ServiceDetailList.tsx](file:///c:/Users/indranil%20sawant/Desktop/Aisync%20Software%20Solutions/src/components/services/ServiceDetailList.tsx)
  - [src/components/home/AutomationBeforeAfterVisual.tsx](file:///c:/Users/indranil%20sawant/Desktop/Aisync%20Software%20Solutions/src/components/home/AutomationBeforeAfterVisual.tsx)
  - [src/data/servicesData.ts](file:///c:/Users/indranil%20sawant/Desktop/Aisync%20Software%20Solutions/src/data/servicesData.ts)
- **Exact Change:** Replace invisible hover styles with `hover:text-accent-primary` or `hover:text-text-primary`; adjust contrast tokens; fix typo.
- **Risk:** Low. Visual polish only.
- **Expected Result:** WCAG AA compliance, sharp readable text on hover, professional grammar.
- **Test Procedure:** Run `npm run build`.
- **Rollback:** Revert files.
