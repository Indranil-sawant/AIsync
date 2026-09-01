# Skill: Premium UI Engineering (`premium-ui`)

## Objective
Design and implement Apple-level, luxury dark-first UI components and layouts adhering strictly to the project design tokens, visual principles, and interaction standards defined in `DESIGN_SYSTEM.md`.

## When to Use
- Building new UI sections, landing pages, or feature views.
- Elevating existing components to meet the high quality bar.
- Refactoring clunky or generic layouts into sleek, cinematic interfaces.

## Required Inspection
1. Read `DESIGN_SYSTEM.md` for exact color tokens, font scales, and border properties.
2. Read `PAGE_OWNERSHIP.md` to confirm component scope (local vs shared).
3. Inspect surrounding sibling components to ensure visual harmony and alignment.

## Step-by-Step Procedure
1. **Establish Structural Layout**: Apply dark-first container surfaces (`--bg-primary`, `--bg-surface-1`) with generous whitespace.
2. **Apply Typography Hierarchy**: Use `--font-sans` with exact tracking, line heights, and off-white hierarchy (`--text-primary`, `--text-secondary`).
3. **Add Subtle Precision Borders**: Enforce `1px solid rgba(255,255,255,0.08)` borders for sharp structural division.
4. **Integrate Micro-Interactions**: Add subtle hover focus states (`150ms cubic-bezier(0.16, 1, 0.3, 1)`) with GPU-accelerated `transform` or `opacity`.
5. **Obey Placeholder Rule**: Ensure zero invented metrics or client claims are hardcoded.

## Safety Rules
- NEVER use generic SaaS patterns (centered 3-card grids, bright rainbow gradients, excessive glass blur).
- NEVER alter shared UI components without testing all consuming pages.
- NEVER use unoptimized images or uncompressed assets.

## Testing Requirements
- Test layout responsiveness at 320px, 768px, 1024px, 1440px, and 1920px widths.
- Verify focus rings are clearly visible for keyboard navigation.
- Ensure 60fps interaction smooth rendering.

## Final Reporting Requirements
Report modified components, visual token usage, mobile responsiveness verification, and git diff preview.
