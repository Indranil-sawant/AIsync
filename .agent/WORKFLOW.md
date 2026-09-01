# .agent/WORKFLOW.md — Mandatory AI Execution Protocol

---

## 1. Core Operating Mandate

This document governs the operational workflow for all AI agents and developers building **Aisync Software Solutions**. 

Every task must progress sequentially through the **8-Stage Execution Pipeline**. Skipping stages or executing out of sequence is strictly prohibited.

---

## 2. The 8-Stage Execution Pipeline

```text
  ┌───────────┐
  │  INSPECT  │  1. Read context, check git status, map page ownership.
  └─────┬─────┘
        │
  ┌─────▼─────┐
  │   PLAN    │  2. Define minimal solution, create implementation_plan.md if needed.
  └─────┬─────┘
        │
  ┌─────▼─────┐
  │   SCOPE   │  3. Isolate exact target files, preserve shared components.
  └─────┬─────┘
        │
  ┌─────▼─────┐
  │ IMPLEMENT │  4. Write clean, production-grade code per DESIGN_SYSTEM.md.
  └─────┬─────┘
        │
  ┌─────▼─────┐
  │   TEST    │  5. Validate logic, form behavior, keyboard focus & responsiveness.
  └─────┬─────┘
        │
  ┌─────▼─────┐
  │  VERIFY   │  6. Execute build commands, linters & cross-device checks.
  └─────┬─────┘
        │
  ┌─────▼─────┐
  │DIFF REVIEW│  7. Inspect git diff line by line for unintended changes.
  └─────┬─────┘
        │
  ┌─────▼─────┐
  │  REPORT   │  8. Summarize results, modified files & verification proof.
  └───────────┘
```

---

## 3. Detailed Stage Protocols

### Stage 1: INSPECT
- **Actions**:
  - Run `git status` to verify repository state.
  - Read `AGENTS.md`, `PAGE_OWNERSHIP.md`, and relevant `.agent/skills/`.
  - Inspect target files and their direct dependencies.
- **Gate Output**: Full understanding of target codebase structure and zero uncommitted mystery code.

### Stage 2: PLAN
- **Actions**:
  - Outline step-by-step changes required.
  - If changes involve multi-file refactoring, new pages, or structural updates, generate an `implementation_plan.md` artifact.
- **Gate Output**: Structured technical plan aligned with `DESIGN_SYSTEM.md` and `PROJECT_CONTEXT.md`.

### Stage 3: SCOPE
- **Actions**:
  - List exact target files to create or modify.
  - Identify shared components and lock down local component boundaries.
  - Confirm no unrelated pages will be edited.
- **Gate Output**: Strictly bounded file modification list.

### Stage 4: IMPLEMENT
- **Actions**:
  - Write high-quality, production-ready code.
  - Obey dark-first design tokens, typography scales, and GPU-accelerated motion standards.
  - Never invent client data or metrics; use standard placeholders.
- **Gate Output**: Complete code implementation.

### Stage 5: TEST
- **Actions**:
  - Test responsive behavior across desktop, tablet, and mobile breakpoints.
  - Test keyboard navigation and ARIA attributes.
  - Test form input validation and error states if applicable.
- **Gate Output**: Manual and functional test validation across target screen sizes.

### Stage 6: VERIFY
- **Actions**:
  - Run project build tools / linters to ensure zero build errors or warnings.
  - Verify Lighthouse core web vitals and bundle size limits.
- **Gate Output**: Clean build log with zero errors or severe warnings.

### Stage 7: DIFF REVIEW
- **Actions**:
  - Execute `git diff` line by line.
  - Check for formatting drift, unintended global edits, leftover console logs, or dead code.
- **Gate Output**: Verified, pristine git diff.

### Stage 8: REPORT
- **Actions**:
  - Present a clean markdown summary to the user outlining modified files, visual enhancements, test proof, and next recommended actions.
- **Gate Output**: Executive response delivered to user.
