# SEO & GOOGLE ANALYTICS IMPLEMENTATION PLAN

**Target System:** AIsync Software Solutions ([aisyncsoftware.in](https://aisyncsoftware.in))  
**Date:** September 1, 2026  
**Engineer:** Senior Technical SEO & Web Analytics Engineer  

---

## 1. Problem & Evidence Summary

1. **Problem:** Search engine crawlers (Googlebot, Bingbot) cannot discover the XML sitemap automatically or read explicit crawl directives.
   - **Evidence:** `public/robots.txt` and `public/sitemap.xml` do not exist in the repository.
   - **Why It Matters:** Without `robots.txt` and `sitemap.xml`, search engines must rely purely on link following, increasing the latency of discovering new or updated pages and potentially missing sub-routes.
2. **Problem:** Missing canonical tags across all pages.
   - **Evidence:** `index.html` lacks `<link rel="canonical" href="...">`.
   - **Why It Matters:** Without canonical tags, URL parameters, tracking query strings, or hosting mirrors risk causing duplicate content dilution.
3. **Problem:** Static metadata across SPA navigation.
   - **Evidence:** Navigating to `/services`, `/work`, `/about`, `/contact`, `/privacy`, `/terms` leaves the browser title and meta description identical to the homepage.
   - **Why It Matters:** Each page targets distinct user search intents and local queries in Ratnagiri; unique page metadata increases CTR and topical ranking relevance.
4. **Problem:** Missing Twitter Card and Web App Manifest declarations.
   - **Evidence:** `index.html` lacks `twitter:*` tags and `<link rel="manifest">`.
   - **Why It Matters:** Social shares on X/Twitter/LinkedIn display subpar previews without rich card metadata; mobile browsers lack theme styling.
5. **Problem:** Lack of Google Search Console (GSC) verification slot.
   - **Evidence:** No verification meta tag or token placeholder exists.
   - **Why It Matters:** GSC verification is mandatory to submit sitemaps, inspect indexing status, view search impressions/queries, and monitor Core Web Vitals.
6. **Problem:** Lack of Google Analytics 4 (GA4) integration.
   - **Evidence:** No web analytics script or event dispatcher exists.
   - **Why It Matters:** Business leadership cannot measure traffic volume, geographic distribution, acquisition channels, or contact form conversion rates.

---

## 2. Step-by-Step Implementation Matrix

### STEP 1: Create `public/robots.txt`
- **File:** `public/robots.txt`
- **Exact Content:** Allow all user-agents, disallow nothing sensitive, declare `Sitemap: https://aisyncsoftware.in/sitemap.xml`.
- **Risk:** Zero.

### STEP 2: Create `public/sitemap.xml`
- **File:** `public/sitemap.xml`
- **Exact Content:** Valid XML schema containing all 7 canonical HTTPS routes with `lastmod`, `changefreq`, and `priority`.
- **Risk:** Zero.

### STEP 3: Create `public/site.webmanifest`
- **File:** `public/site.webmanifest`
- **Exact Content:** PWA manifest with application name, short name, start_url `/`, theme colors (`#fcfbf9` / `#4f46e5`), and SVG favicon icon references.
- **Risk:** Zero.

### STEP 4: Enhance `index.html`
- **File:** `index.html`
- **Exact Content:** Add `<link rel="canonical" href="https://aisyncsoftware.in/" />`, `<meta name="theme-color" content="#fcfbf9" />`, `<link rel="manifest" href="/site.webmanifest" />`, Twitter card tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`), Open Graph enhancements (`og:site_name`, `og:locale`), GSC verification meta tag placeholder, and comprehensive Schema.org JSON-LD graph (`WebSite`, `Organization`, `ProfessionalService`).
- **Risk:** Low.

### STEP 5: Update `vercel.json` Caching Headers
- **File:** `vercel.json`
- **Exact Content:** Add cache headers for `robots.txt`, `sitemap.xml`, and `site.webmanifest`.
- **Risk:** Low.

### STEP 6: Create `usePageSEO` Hook for Dynamic Route Head Management
- **File:** `src/hooks/usePageSEO.ts`
- **Exact Content:** Lightweight, zero-dependency React hook that sets `document.title`, updates `meta[name="description"]`, updates `<link rel="canonical">`, and updates `og:title` / `og:description` / `og:url` on route mount.
- **Risk:** Low.

### STEP 7: Integrate `usePageSEO` on All Route Pages
- **Files:** `src/pages/Home.tsx`, `Services.tsx`, `Work.tsx`, `About.tsx`, `Contact.tsx`, `PrivacyPolicy.tsx`, `TermsOfService.tsx`, `NotFound.tsx`.
- **Exact Content:** Provide specific title, description, and canonical path for each route.
- **Risk:** Low.

### STEP 8: Create Google Analytics 4 (GA4) Engine & Tracker
- **File:** `src/utils/analytics.ts`
- **Exact Content:** 
  - Non-blocking asynchronous script injection.
  - Safe configuration using `VITE_GA_MEASUREMENT_ID` with fallback no-op if unset.
  - Route change pageview tracker (`trackPageView`).
  - Privacy-safe conversion event dispatcher (`trackEvent` for form submits, CTA clicks, contact channel clicks) with ZERO personal data.
- **Risk:** Low.

### STEP 9: Integrate GA4 Tracker in `App.tsx` and `InquiryForm.tsx`
- **Files:** `src/App.tsx`, `src/components/contact/InquiryForm.tsx`
- **Exact Content:** Initialize GA4 on mount, track pageviews on route changes via `useEffect([location])`, track successful form submissions.
- **Risk:** Low.

---

## 3. Verification & Validation Protocol

1. **XML Validation:** Verify `public/sitemap.xml` conforms to XML schema standards with valid closing tags and correct namespaces.
2. **Robots Validation:** Verify `public/robots.txt` syntax and sitemap directive.
3. **Structured Data Validation:** Verify Schema.org JSON-LD syntax using JSON validator.
4. **TypeScript & Build Check:** Run `tsc` and Vite build to confirm 100% type safety and zero bundle regressions.
5. **Route Navigation & Metadata Check:** Verify that clicking through all routes dynamically updates `<title>`, `<meta name="description">`, and `<link rel="canonical">`.
6. **Analytics Non-Blocking Test:** Verify that when `VITE_GA_MEASUREMENT_ID` is unset or adblock is present, the app operates flawlessly without console errors.
