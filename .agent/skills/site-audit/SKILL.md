# Skill: Site Audit (`site-audit`)

## Objective
Comprehensive end-to-end health audit of the website architecture, route integrity, navigation, forms, error handling, static assets, accessibility, SEO, performance, and security risks.

## When to Use
- Before launching major feature updates or structural redesigns.
- During periodic project health reviews.
- Prior to production releases.

## Required Inspection
1. Inspect directory structure and routing declarations.
2. Read `PAGE_OWNERSHIP.md` and `PROJECT_CONTEXT.md`.
3. Check `git status` for untracked files or leftover debug code.
4. Scan package manifest for obsolete dependencies.

## Step-by-Step Procedure
1. **Route Integrity Check**: Verify all navigation links, header/footer anchors, internal redirects, and 404 fallback routing.
2. **Form & Interactive Element Audit**: Test form submit handlers, validation states, button states, and modal overlays.
3. **Asset & Media Verification**: Inspect static image paths, font loading strategies, icon SVGs, and broken media references.
4. **Accessibility Scan**: Verify semantic HTML landmark tags, image `alt` attributes, ARIA roles, and keyboard tab indices.
5. **SEO & Head Metadata Verification**: Inspect page titles, meta descriptions, canonical URLs, OG tags, and sitemap XML.
6. **Performance & Memory Inspection**: Audit heavy animation triggers, layout shifts (CLS), and non-optimized scripts.

## Safety Rules
- **READ-ONLY OPERATION**: This skill performs inspection and reporting only. Do NOT edit application code during an audit unless explicitly instructed to apply fixes.
- Report all identified flaws clearly with severity ratings (CRITICAL, HIGH, MEDIUM, LOW).

## Testing Requirements
- Test across simulated Desktop, Tablet, and Mobile viewports.
- Run project linters and build checks to catch hidden typescript/formatting errors.

## Final Reporting Requirements
Generate a structured audit report summarizing:
- Total routes scanned and pass/fail rate.
- Critical architectural risks or broken paths.
- Priority remediation plan categorized by domain (UX, SEO, Accessibility, Security).
