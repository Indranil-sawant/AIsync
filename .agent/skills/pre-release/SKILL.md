# Skill: Pre-Release Final Verification (`pre-release`)

## Objective
Execute the comprehensive, mandatory pre-release checklist before finalizing any production deployment or milestone delivery for **Aisync Software Solutions**.

## When to Use
- Immediately prior to requesting final user sign-off for release.
- At the conclusion of major development milestones.

## Required Inspection
1. Read `AGENTS.md` and `RESPONSIVE_PERFORMANCE.md`.
2. Inspect `git status` and `git diff` against base branch.

## Step-by-Step Procedure
1. **Clean Workspace Verification**: Confirm `git status` shows zero uncommitted scratch files or untracked temporary assets.
2. **Production Build & Compiler Check**: Execute production build script (`npm run build`). Confirm 0 compilation errors, 0 type errors, 0 warnings.
3. **Multi-Viewport Layout Verification**: Confirm desktop, tablet, and mobile layouts render without horizontal scrollbars or visual overlap.
4. **Form & Interactive Flow Check**: Confirm form inputs validate, buttons enter loading state on submit, and success/error notifications function cleanly.
5. **SEO & Social Meta Check**: Confirm titles, descriptions, canonical links, Open Graph preview tags, and `sitemap.xml` are present.
6. **Accessibility & Reduced Motion**: Confirm keyboard navigation focus rings operate and `prefers-reduced-motion` is respected.
7. **Performance & Asset Budget Check**: Confirm initial JS bundle is under 75KB gzipped and LCP loads sub-1.2 seconds.
8. **Security & Secrets Check**: Confirm zero secret keys or private endpoints are exposed in client-side bundles.

## Safety Rules
- NEVER approve a release with failing builds, broken links, uncompressed heavy assets, or exposed secret keys.

## Testing Requirements
- Full automated test suite execution.
- End-to-end user path sanity check across all routes.

## Final Reporting Requirements
Produce a Pre-Release Certification Report summarizing all 8 checklist audit results, performance metrics, asset package sizes, and explicit release authorization.
