# Skill: Responsive Layout Audit (`responsive-audit`)

## Objective
Audit layout integrity across multi-tier viewport sizes (Desktop, Laptop, Tablet, Mobile) to prevent horizontal overflow, text clipping, broken touch targets, or responsive regressions.

## When to Use
- After introducing new sections, pages, or modifying layout CSS.
- Before committing pull requests or finalizing release candidates.

## Required Inspection
1. Read `RESPONSIVE_PERFORMANCE.md` for tier definitions and touch target rules.
2. Inspect CSS media queries, flexbox/grid configurations, and fluid typography clamps.

## Step-by-Step Procedure
1. **Horizontal Scroll Check**: Inspect page at `320px`, `375px`, `768px`, `1024px`, `1440px`, and `2560px` widths to ensure `overflow-x: hidden` / zero unwanted horizontal scrollbars.
2. **Touch Target Verification**: Ensure all interactive buttons, links, and form fields on mobile viewports satisfy the `44px x 44px` minimum touch target size.
3. **Typography Scale Check**: Verify display titles clamp gracefully without text wrapping errors or overlapping sibling elements.
4. **Navigation Collapse Check**: Verify desktop header navigation collapses into a functional, accessible mobile drawer/overlay below `768px`.
5. **Form Field Accessibility**: Verify input text sizes maintain `16px` minimum on mobile screens to prevent mobile browser auto-zoom.

## Safety Rules
- Do NOT hide essential content or primary CTAs on mobile viewports.
- Do NOT rely on desktop-only hover states for key actions or disclosures.

## Testing Requirements
- Test layout behavior using device emulation mode across multiple screen dimensions.
- Test both portrait and landscape orientation transitions on tablet viewports.

## Final Reporting Requirements
Provide a responsive audit matrix listing tested viewports, identified layout shifts or overflow bugs, applied fixes, and confirmation of mobile touch target compliance.
