# PRODUCTION SEO & WEB ANALYTICS AUDIT REPORT

**Target Entity:** AIsync Software Solutions  
**Canonical Domain:** `https://aisyncsoftware.in`  
**Primary Geographic Market:** Ratnagiri, Maharashtra, India  
**Audit Scope:** Technical SEO, Local Search Architecture, Google Search Console, Google Analytics 4 (GA4), Structured Data, Metadata, Crawlability, and Social Graph  
**Auditor:** Senior Technical SEO & Production Reliability Engineer  
**Date:** September 1, 2026  
**Status:** ACTION REQUIRED (Core local SEO metadata present; indexing assets, canonical tags, sitemap, robots, dynamic route heads, and analytics integration pending)

---

## 1. Executive Summary

A comprehensive read-only forensic audit was conducted on the production codebase of **AIsync Software Solutions** ([aisyncsoftware.in](https://aisyncsoftware.in)).

The website has a strong local keyword foundation in `index.html` targeting Ratnagiri, Maharashtra software development. However, critical technical infrastructure required for reliable Google discovery, crawling, indexing, search verification, and analytics measurement is currently missing or incomplete:
1. **Missing `robots.txt`**: No search bot crawl directives exist in `public/`.
2. **Missing `sitemap.xml`**: No machine-readable index of canonical pages exists for Googlebot.
3. **Missing Canonical Tags**: No `<link rel="canonical">` tag exists in `index.html` or secondary routes.
4. **Static Single-Page Metadata**: Secondary routes (`/services`, `/work`, `/about`, `/contact`, `/privacy`, `/terms`) inherit the homepage title and description on client navigation instead of presenting tailored, intent-focused metadata.
5. **Missing Web App Manifest & Theme Meta**: No `site.webmanifest` or mobile theme-color declaration exists.
6. **Missing Twitter/X Card Metadata**: Open Graph tags exist, but Twitter Card tags (`twitter:card`, `twitter:title`, etc.) are absent.
7. **Google Search Console Preparation**: No verification slot or sitemap submission mechanism is configured.
8. **Google Analytics 4 (GA4)**: No SPA-aware, non-blocking GA4 integration exists for tracking visitor acquisition and conversion events.

---

## 2. Canonical Domain & URL Architecture

| Property | Production Setting | Status |
| :--- | :--- | :--- |
| **Protocol** | HTTPS (`https://`) | **Verified** |
| **Canonical Host** | `aisyncsoftware.in` (non-www) | **Verified** |
| **Trailing Slash Strategy** | No trailing slash on sub-paths (`/services`, `/work`, `/about`, `/contact`, `/privacy`, `/terms`) | **Verified** |
| **SPA Fallback Routing** | Vercel rewrite `/(.*)` -> `/index.html` | **Verified** |

### Indexable Canonical Routes Matrix
The sitemap and internal linking matrix must strictly target these 7 canonical URLs:
1. `https://aisyncsoftware.in/` — Homepage & Business Overview
2. `https://aisyncsoftware.in/services` — Capabilities & Service Catalog
3. `https://aisyncsoftware.in/work` — Portfolio & Client Case Studies
4. `https://aisyncsoftware.in/about` — Leadership, Mission & Engineering Values
5. `https://aisyncsoftware.in/contact` — Technical Consultation & Project Intake Form
6. `https://aisyncsoftware.in/privacy` — Privacy Policy & Data Security
7. `https://aisyncsoftware.in/terms` — Terms of Service & Commercial Governance

*Note: The `/404` wildcard route is non-canonical and must be excluded from indexing and sitemaps.*

---

## 3. Crawlability & Indexability Audit

- **Robots Directives:** No `noindex` or `nofollow` directives accidentally present.
- **Internal Links:** All internal links in `Header.tsx` and `Footer.tsx` use clean semantic React Router `<Link to="...">` components with absolute paths matching canonical routes.
- **Header & Footer Reachability:** 100% of indexable pages are directly reachable from both the top navigation and footer.
- **Missing Infrastructure:**
  - `public/robots.txt` must be created to declare `User-agent: *`, allow all legitimate crawlers, and link to `https://aisyncsoftware.in/sitemap.xml`.
  - `public/sitemap.xml` must be created with valid XML schema (`xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"`), timestamps, and accurate change frequencies.

---

## 4. Search Intent & Local Keyword Mapping

| Page | Primary Search Intent | Target Primary Keyword | Supporting Local & Technical Terms |
| :--- | :--- | :--- | :--- |
| **Home (`/`)** | Commercial / Branded Discovery | Software & Website Development Company in Ratnagiri | Web design Ratnagiri, Custom software Maharashtra, Indranil Sawant, Business automation Konkan |
| **Services (`/services`)** | Commercial Investigation | Software Development & Automation Services Ratnagiri | Custom web apps, E-commerce development, Google search SEO, Business digitalization |
| **Work (`/work`)** | Social Proof / Portfolio Evaluation | Software Engineering Portfolio & Case Studies Ratnagiri | Bhavani Cashews, AORR, Hawksbill Technik, Globus Travel, Phoenix Technical, Arise Machine Tools |
| **About (`/about`)** | Entity Verification & Trust | About AIsync Software Solutions Ratnagiri | Indranil Amar Sawant founder, Ratnagiri software firm, Engineering values, Tech consulting Maharashtra |
| **Contact (`/contact`)** | High-Intent Lead Conversion | Hire Software Developers in Ratnagiri | Project inquiry, Web developer consultation Ratnagiri, Fixed quote software engineering |
| **Privacy (`/privacy`)** | Legal / Trust Compliance | Privacy Policy & Data Protection AIsync | NDA confidentiality, Client data protection, Ratnagiri jurisdiction |
| **Terms (`/terms`)** | Legal / Commercial Agreement | Terms of Service & Project Governance AIsync | Intellectual property rights, Software warranty, Commercial contract terms |

---

## 5. Structured Data (Schema.org JSON-LD) Audit

- **Current State:** `index.html` contains a single `ProfessionalService` JSON-LD block.
- **Enhancement Opportunities:**
  1. Enhance `ProfessionalService` / `LocalBusiness` schema with verified Opening Hours, PriceRange (`₹₹`), GeoCoordinates (`16.9902, 73.3120`), AreaServed (`Ratnagiri`, `Maharashtra`, `India`), Founder (`Indranil Amar Sawant`), and official telephone (`+919975046416`).
  2. Implement `WebSite` schema declaring site name and canonical URL.
  3. Implement `Organization` schema declaring brand entity details.
  4. Ensure zero fabricated reviews, ratings, or awards.

---

## 6. Social Graph & Open Graph Audit

- **Open Graph (`og:*`):**
  - `og:type`, `og:title`, `og:description`, `og:url` present in `index.html`.
  - Need to add `og:site_name`, `og:locale` (`en_IN`), `og:image:width` (1200), `og:image:height` (630), and `og:image:alt`.
- **Twitter Cards (`twitter:*`):**
  - Currently missing. Need `twitter:card` (`summary_large_image`), `twitter:title`, `twitter:description`, `twitter:image`.

---

## 7. Google Search Console & Google Analytics 4 Audit

- **Google Search Console:**
  - Need a clean placeholder and support for HTML meta tag verification (`<meta name="google-site-verification" content="..." />`).
  - Need automated sitemap URL referencing in `robots.txt`.
- **Google Analytics 4 (GA4):**
  - Currently not integrated.
  - Need a modular, asynchronous, non-blocking SPA analytics tracker that:
    - Ingests `VITE_GA_MEASUREMENT_ID` (e.g. `G-XXXXXXXXXX`).
    - Gracefully no-ops in development or when unset without throwing errors.
    - Tracks route change pageviews on SPA navigation.
    - Provides privacy-compliant conversion event dispatchers (`lead_form_submitted`, `contact_channel_click`, `cta_click`) with zero PII.
    - Never blocks initial render or crashes the site if tracking fails or is blocked by user adblockers.

---

## 8. Prioritized SEO & Analytics Repair Plan

| Step | Action Item | Target Files |
| :--- | :--- | :--- |
| **01** | Create production `robots.txt` | `public/robots.txt` |
| **02** | Create production `sitemap.xml` | `public/sitemap.xml` |
| **03** | Create Web App Manifest | `public/site.webmanifest` |
| **04** | Enhance `index.html` with canonical, GSC placeholder, Twitter tags, Manifest, Theme color, and enriched Schema.org JSON-LD | `index.html` |
| **05** | Update `vercel.json` headers to cache `sitemap.xml`, `robots.txt`, and `site.webmanifest` | `vercel.json` |
| **06** | Implement lightweight SEO Head Manager Hook (`usePageSEO`) | `src/hooks/usePageSEO.ts` |
| **07** | Integrate dynamic SEO metadata across all 7 route pages | `src/pages/*.tsx` |
| **08** | Implement non-blocking, privacy-compliant GA4 tracking engine | `src/utils/analytics.ts` & `src/App.tsx` |
| **09** | Add conversion tracking to `InquiryForm.tsx` & CTA buttons | `src/components/contact/InquiryForm.tsx` |
| **10** | Validate HTML, XML, TypeScript types, and build output | `dist/` & verification checks |
