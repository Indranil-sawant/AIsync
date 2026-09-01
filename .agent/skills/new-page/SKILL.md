# Skill: New Page Construction (`new-page`)

## Objective
Construct brand-new pages or view routes while strictly preserving the established design system tokens, typography scales, shared header/footer architecture, and responsive performance limits.

## When to Use
- When introducing a new page route (e.g. `/services`, `/about`, `/case-studies`).

## Required Inspection
1. Read `AGENTS.md`, `PROJECT_CONTEXT.md`, and `DESIGN_SYSTEM.md`.
2. Inspect `PAGE_OWNERSHIP.md` and add the new route to the Page Ownership Matrix.
3. Review existing page components for pattern consistency.

## Step-by-Step Procedure
1. **Register Ownership**: Add new page entry to `PAGE_OWNERSHIP.md` with designated local component directory and shared component dependencies.
2. **Create Page Template**: Generate new page route file utilizing shared layout wrappers (`<Header>`, `<Footer>`, `<Container>`).
3. **Build Local Components**: Create dedicated local section components within `src/components/[page-name]/`.
4. **Apply Design Tokens**: Style page elements strictly using design tokens (`--bg-primary`, `--text-primary`, `--accent-primary`) per `DESIGN_SYSTEM.md`.
5. **Add SEO & Head Tags**: Populate unique page title, meta description, Open Graph tags, and canonical URL.
6. **Implement Micro-Interactions**: Apply performant CSS transitions for hover, focus, and entrance reveals.
7. **Placeholder Verification**: Ensure zero fake metrics, fictional logos, or false claims are present.

## Safety Rules
- NEVER create a new page by copying and pasting a global component into a local file; reuse shared components properly.
- NEVER break header/footer layout structure.

## Testing Requirements
- Test route rendering in browser at Desktop, Tablet, and Mobile viewports.
- Run `seo-audit` and `accessibility-audit` skills on the new page.

## Final Reporting Requirements
Report created page file path, added local components, matrix entry in `PAGE_OWNERSHIP.md`, and verified responsive/SEO status.
