# Skill: SEO & Metadata Audit (`seo-audit`)

## Objective
Audit and optimize document head metadata, heading hierarchy, canonical URIs, XML sitemap generation, robots policy, JSON-LD structured data, Open Graph social previews, and indexability.

## When to Use
- When adding new pages or routes.
- Prior to launching or deploying site updates.

## Required Inspection
1. Read `PROJECT_CONTEXT.md` for company positioning keywords and page targets.
2. Inspect target page template head tags and global SEO configuration files.

## Step-by-Step Procedure
1. **Metadata Verification**: Ensure every page specifies a unique `<title>` (50-60 chars) and `<meta name="description">` (150-160 chars).
2. **Heading Architecture Audit**: Verify single `<h1>` tag per page containing primary topic, followed by sequential `<h2>` and `<h3>` tags without skipping levels.
3. **Open Graph & Twitter Cards**: Confirm `og:title`, `og:description`, `og:image`, `og:url`, and `twitter:card` tags are present and reference valid absolute asset URLs.
4. **Canonical & Indexability Check**: Ensure correct `<link rel="canonical">` tag on every route and confirm no accidental `<meta name="robots" content="noindex">` tags exist on public pages.
5. **Structured Data Validation**: Verify JSON-LD schema (e.g. `Organization`, `WebSite`, `Service`) is valid and error-free.
6. **Sitemap & Robots**: Confirm `sitemap.xml` lists all public routes and `robots.txt` properly points to the sitemap.

## Safety Rules
- NEVER use duplicate page titles or meta descriptions across different routes.
- NEVER use fake structured data review ratings or false organizational statistics.

## Testing Requirements
- Validate JSON-LD schemas using structured data testing tools.
- Verify meta tags using social sharing preview tools.

## Final Reporting Requirements
Present an SEO Audit Report listing reviewed pages, meta tag completion status, structured data validation proof, and sitemap verification.
