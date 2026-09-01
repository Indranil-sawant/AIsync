# .agent/rules/CHANGE_CONTROL.md — Change Control & Code Protection Directives

---

## 1. Objective

This document enforces rigid change-control policies across the **Aisync Software Solutions** repository to prevent architectural drift, visual degradation, scope creep, and destructive code mutations.

---

## 2. Core Change-Control Rules

### Rule 1: Scoped File Modification Only
- Modifying files outside the explicit task scope is strictly prohibited.
- If a task targets `Page A`, an agent MUST NOT modify `Page B` or `Global CSS` without prior plan approval.

### Rule 2: Strict Dependency Management
- **Zero Unapproved Packages**: Do not run `npm install` for third-party libraries (UI components, utility tools, animation engines) without explicit evaluation of bundle size, security history, and necessity.
- **Prefer Native & Minimal**: Prefer native CSS, Web APIs, and micro-utilities over importing heavy npm dependencies.

### Rule 3: Preserving Working Implementations
- Do not refactor functional, bug-free code simply because an alternative syntax or library is preferred.
- Rewrites must be explicitly justified by bug fixes, measurable performance gains, or security requirements.

### Rule 4: Shared Component Governance
- Modifying shared components (`Header`, `Footer`, `Button`, `Modal`) requires evaluating all consuming routes listed in `PAGE_OWNERSHIP.md`.
- Shared component prop signatures MUST maintain backward compatibility.

### Rule 5: Asset & Media Handling
- All new media assets MUST be compressed (AVIF/WebP for images, WOFF2 for fonts) and placed in dedicated asset directories.
- Uncompressed raw PNGs, JPEGs, or giant SVGs are forbidden in production builds.

### Rule 6: Zero Hardcoded Secret Exposure
- API keys, backend endpoints, database URIs, or authentication tokens MUST NEVER be committed to client-side code.
- Always use environment variables (`.env`) with public flags (`PUBLIC_` or `VITE_`) strictly restricted to public parameters.

---

## 3. Change Violation Remediation

If an agent or developer violates these change-control rules:
1. Revert the unapproved changes using [.agent/skills/page-recovery](file:///c:/Users/indranil%20sawant/Desktop/Aisync%20Software%20Solutions/.agent/skills/page-recovery/SKILL.md) or git checkout.
2. Re-inspect `AGENTS.md` and `PAGE_OWNERSHIP.md`.
3. Submit a clean, properly scoped implementation.
