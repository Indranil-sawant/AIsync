# Skill: Accessibility Audit (`accessibility-audit`)

## Objective
Audit semantic HTML structure, keyboard navigation, focus management, color contrast ratios, ARIA attributes, alt text coverage, reduced motion support, and mobile touch targets to achieve WCAG 2.1 AA compliance.

## When to Use
- During component development and UI reviews.
- Before final production releases.

## Required Inspection
1. Read `DESIGN_SYSTEM.md` for contrast and token standards.
2. Inspect target page HTML landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`).

## Step-by-Step Procedure
1. **Semantic Structure Audit**: Ensure page uses native HTML5 tags (`<main>`, `<header>`, `<footer>`, `<nav>`, `<article>`, `<section>`) and heading hierarchy (`<h1>` through `<h6>`).
2. **Keyboard Navigation & Focus Test**: Tab through the entire page using keyboard only. Ensure visible focus indicators (`:focus-visible`) exist for all interactive elements and focus traps are avoided.
3. **Color Contrast Verification**: Check text contrast ratios against backgrounds (minimum `4.5:1` for normal body text, `3:1` for large display titles).
4. **Media Alt Text & Labels**: Verify every `<img>` has a meaningful `alt` attribute (or `alt=""` if purely decorative). Verify form inputs have associated `<label>` tags or `aria-label`.
5. **ARIA Attribute Hygiene**: Ensure ARIA roles (`role="dialog"`, `aria-expanded`, `aria-hidden`) are used properly without redundant overrides on native semantic tags.
6. **Motion & Reduced Motion**: Confirm `prefers-reduced-motion` immediately disables non-essential animations.

## Safety Rules
- NEVER use `outline: none` or `outline: 0` without providing a distinct custom focus indicator.
- NEVER rely solely on color to convey information or state (e.g. error indicators must include text/icons).

## Testing Requirements
- Perform full keyboard-only navigation test across all interactive routes.
- Verify color contrast levels using automated contrast checkers.

## Final Reporting Requirements
Document audit findings, tested WCAG AA criteria, fixed accessibility issues, and focus ring compliance proof.
