# Skill: Production Readiness Check (`production-readiness`)

## Objective
Verify overall application readiness for production deployment, covering build compilation, routing, forms, accessibility, SEO, static assets, performance, security, error fallbacks, environment configuration, and clean Git state.

## When to Use
- Immediately prior to deploying to staging or production environments.
- Before submitting major milestone deliverables to the user.

## Required Inspection
1. Read `AGENTS.md`, `PROJECT_CONTEXT.md`, and `RESPONSIVE_PERFORMANCE.md`.
2. Inspect `.env` files and environment variables.
3. Check `git status` for untracked artifacts or uncommitted changes.

## Step-by-Step Procedure
1. **Production Build Execution**: Run production build command (e.g. `npm run build`) and confirm zero compiler errors, type errors, or warnings.
2. **Environment Variable Audit**: Verify all production keys are set and client-facing bundles contain no secret keys.
3. **Route & 404 Fallback Test**: Test all primary page routes and confirm a custom 404 page handles non-existent URLs gracefully.
4. **Form Submission Validation**: Verify form handlers process valid data, block invalid data, display error messages, and handle network failures.
5. **Asset & SEO Audit**: Confirm meta tags, Open Graph images, favicon, sitemap.xml, and robots.txt are valid.
6. **Security & Header Check**: Verify HTTPS enforcement, CSP headers, and third-party script isolation.

## Safety Rules
- NEVER deploy code with failing build logs or unresolved TypeScript errors.
- NEVER leave console log debugging statements in production builds.

## Testing Requirements
- Execute full production build locally or in a clean staging environment.
- Perform end-to-end smoke test across primary user flows.

## Final Reporting Requirements
Deliver a Production Readiness Scorecard detailing build output status, asset bundle sizes, SEO/accessibility scores, and explicit sign-off for release.
