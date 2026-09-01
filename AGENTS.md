# AGENTS.md — Permanent Project Operating System & Governance

> **IMPORTANT**: This document is the permanent source of truth for all AI agents and human developers operating within the **Aisync Software Solutions** codebase. Every prompt, task, and feature implementation must strictly obey the principles and protocols defined here.

---

## 1. Project Mission & Quality Standards

**Aisync Software Solutions** is a premier, high-end technology and software engineering firm. The website must position the company as an elite software engineering partner capable of building complex, enterprise-grade digital products and intelligence platforms.

### The Quality Bar
- **Apple-Level Polish**: Meticulous alignment, zero visual jitter, flawless micro-typography, pixel-perfect spacing, and crisp visual hierarchy.
- **Premium Tech Company Aesthetic**: Sophisticated dark-first design, restrained luxury, high contrast, clean architectural layout, and deep technical authority.
- **Cinematic Storytelling**: Purposeful progression, structured narrative flow, immersive media reveal, and spatial depth without gimmickry.
- **Exceptional Typography**: Strict typographic scale, exact line-height ratios, proper tracking, and tabular figures for numerical data.
- **Sophisticated Interaction**: Intentional micro-feedback, state transitions with natural damping/physics, keyboard accessibility, and tactile responsiveness.
- **Relentless Performance**: Sub-second initial render, 60fps animations (120fps on ProMotion displays), zero layout shifts, and zero non-essential bundle bloat.
- **Flawless Responsiveness**: Unified perfection across ultra-wide monitors, standard laptops, tablets, foldables, and budget mobile screens.
- **Production-Grade Rigor**: Strict accessibility (WCAG AA), airtight client-side security, complete SEO optimization, semantic HTML, and bulletproof maintainability.

> **INSPIRATION RULE**: References like Apple, Linear, Stripe, and Vercel serve solely as benchmarks for craftsmanship and engineering discipline. **Never copy** their exact branding, visual assets, layouts, copy, or distinct identity elements.

---

## 2. Mandatory Development Workflow

Every single task—regardless of size or urgency—must follow this linear 8-step execution pipeline:

```text
INSPECT
   │
   ▼
  PLAN
   │
   ▼
 SCOPE
   │
   ▼
IMPLEMENT
   │
   ▼
  TEST
   │
   ▼
 VERIFY
   │
   ▼
DIFF REVIEW
   │
   ▼
 REPORT
```

### Stage Definitions & Directives
1. **INSPECT**: Read file dependencies, page ownership matrix, parent styles, routing declarations, and git status before touching code.
2. **PLAN**: Formulate a clear, minimal solution path. For non-trivial changes, write an `implementation_plan.md`.
3. **SCOPE**: Isolate the exact set of files required for the task. Identify shared assets and flag potential side effects.
4. **IMPLEMENT**: Write precise, production-grade code adhering to `DESIGN_SYSTEM.md` and codebase conventions.
5. **TEST**: Verify unit correctness, responsive layout boundaries, keyboard navigation, and edge-case behavior.
6. **VERIFY**: Run build checks, linters, performance validations, and cross-screen responsive checks.
7. **DIFF REVIEW**: Inspect `git diff` line by line to verify zero unintended edits, leftover debug logs, or formatting drift.
8. **REPORT**: Present a concise summary of changes, modified files, verification evidence, and next steps to the user.

> **RULE**: Never start modifying code without completing the **INSPECT** phase.

---

## 3. Scope Protection Protocol

To prevent code bloat, regressions, and accidental breakage across unrelated pages:

- **Local Modification Only**: If requested to modify `Page A`, touch *only* `Page A`, its direct local components, and its explicit local assets.
- **Shared Code Caution**: Do NOT modify global CSS, shared layout wrappers, root utility hooks, or global design tokens unless strictly required and approved.
- **No Unrequested Refactorings**: Working code must remain untouched. Do NOT rewrite existing logic or components simply to introduce a personal coding preference.
- **Dependency Minimization**: Do NOT introduce new npm packages, UI libraries, or external scripts without explicit necessity and justification.

---

## 4. Git Safety & Integrity Rules

All repository modifications must adhere to strict source-control hygiene:

- **Pre-Work Inspection**: Always run `git status`, verify current branch, and inspect recent commit history prior to starting work.
- **Atomic Commits**: Group logical edits into isolated, cleanly named commits.
- **Forbidden Destructive Commands**:
  - `git push --force` / `--force-with-lease` (unless explicitly authorized)
  - `git reset --hard` (use `.agent/skills/page-recovery` for safe restoration)
  - `git rebase -i` on public/shared history
  - `git branch -D` on unmerged work
- **Diff Sanitation**: Never leave untracked temporary files, `.DS_Store`, build artifacts, or secret keys in the workspace.

---

## 5. Zero Invented Information Rule

To preserve commercial integrity and client trust:

- **No Fictional Client Data**: Never invent company names, client logos, case studies, client testimonials, employee profiles, or user reviews.
- **No Fictional Metrics**: Never generate arbitrary statistics (e.g., "99.99% uptime", "10M+ active users", "500+ projects completed") unless officially provided.
- **No Fictional Accreditations**: Never list fake awards, security certifications (e.g., ISO 27001, SOC2 Type II), partnerships (e.g., "AWS Premier Partner"), or office addresses.
- **Placeholder Standard**: When building UI layouts requiring unconfirmed text or metrics, use explicit standard placeholders (e.g., `[Client Partner Logo]`, `[Validated Metric TBD]`, `[Case Study Narrative Pending]`).

---

## 6. Operating System File Index

Before executing any specific task, refer to the corresponding operating system module:

- [README.md](file:///c:/Users/indranil%20sawant/Desktop/Aisync%20Software%20Solutions/README.md) — System Overview & Onboarding
- [PROJECT_CONTEXT.md](file:///c:/Users/indranil%20sawant/Desktop/Aisync%20Software%20Solutions/PROJECT_CONTEXT.md) — Brand Identity, Positioning & Services
- [DESIGN_SYSTEM.md](file:///c:/Users/indranil%20sawant/Desktop/Aisync%20Software%20Solutions/DESIGN_SYSTEM.md) — Visual Language, Tokens, Motion & Components
- [RESPONSIVE_PERFORMANCE.md](file:///c:/Users/indranil%20sawant/Desktop/Aisync%20Software%20Solutions/RESPONSIVE_PERFORMANCE.md) — Multi-Tier Performance & Screen Standards
- [PAGE_OWNERSHIP.md](file:///c:/Users/indranil%20sawant/Desktop/Aisync%20Software%20Solutions/PAGE_OWNERSHIP.md) — Component Hierarchy & Isolation Matrix
- [.agent/WORKFLOW.md](file:///c:/Users/indranil%20sawant/Desktop/Aisync%20Software%20Solutions/.agent/WORKFLOW.md) — Execution Protocols & Workflows
- [.agent/rules/CHANGE_CONTROL.md](file:///c:/Users/indranil%20sawant/Desktop/Aisync%20Software%20Solutions/.agent/rules/CHANGE_CONTROL.md) — Strict Change Control Rules
- [.agent/skills/](file:///c:/Users/indranil%20sawant/Desktop/Aisync%20Software%20Solutions/.agent/skills/) — Specialized Audit & Task Execution Skills
