# Skill: Animation Performance Audit (`animation-audit`)

## Objective
Audit animation performance, scroll triggers, offscreen render impact, expensive CSS filters, layout-triggering properties, and reduced-motion compliance to ensure 60fps/120fps fluid playback.

## When to Use
- When introducing scroll animation, micro-interactions, or hero reveals.
- If frame drops or jank are observed during page scrolling.
- Prior to release.

## Required Inspection
1. Read `DESIGN_SYSTEM.md` (Section 3: Motion System).
2. Inspect target CSS/JS files for non-performant animated properties (`width`, `height`, `margin`, `padding`, `top`, `left`, `filter`).
3. Check for `prefers-reduced-motion` media query coverage.

## Step-by-Step Procedure
1. **Property Audit**: Ensure all CSS transitions and keyframes transform *strictly* `opacity` and `transform` (`translate3d`, `scale`, `rotate`).
2. **Layout Shift Audit**: Check that entry animations do not trigger Cumulative Layout Shift (CLS).
3. **Offscreen Optimization Audit**: Verify scroll animations (Intersection Observer) pause or disconnect when elements leave the viewport.
4. **Heavy Filter Audit**: Identify and eliminate excessive `backdrop-filter: blur()` or heavy box shadows on animated containers.
5. **Reduced-Motion Verification**: Confirm all animations halt or collapse to instant transitions when `prefers-reduced-motion: reduce` is active.

## Safety Rules
- NEVER use JS animation timers (`setInterval`, `setTimeout`) for UI frame updates; use `requestAnimationFrame` or CSS transitions/Web Animations API.
- Do NOT force smooth-scroll libraries on touch/mobile browsers.

## Testing Requirements
- Test scrolling performance in low-power mobile mode and 60Hz/120Hz displays.
- Toggle reduced motion in browser dev tools and verify zero animation execution.

## Final Reporting Requirements
Document audited animation files, eliminated performance bottlenecks, GPU acceleration status, and reduced-motion compliance verification.
