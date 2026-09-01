# PAGE_OWNERSHIP.md — Component Hierarchy & Regression Protection Matrix

---

## 1. Objective & Purpose

The purpose of this document is to establish explicit page ownership boundaries, component dependencies, and code isolation rules. This prevents cross-page regressions where modifying a single section or component unintentionally damages unrelated pages or layout structures.

---

## 2. Seven-Step Page Task Execution Protocol

Whenever assigned a page-specific edit, feature addition, or layout adjustment:

```text
1. IDENTIFY THE TARGET PAGE
   └── Determine exact route, page entry file, and child views.

2. MAP DIRECT DEPENDENCIES
   └── Trace imports, local components, and local sub-styles.

3. IDENTIFY SHARED COMPONENTS
   └── Flag navigation bars, footer modules, global buttons, or shared modals.

4. IDENTIFY SHARED CSS / DESIGN TOKENS
   └── Check whether proposed styling impacts global CSS utility classes.

5. ASSESS LOCAL VS GLOBAL SCOPE
   └── Evaluate whether the requested change can be contained entirely locally.

6. PREFER LOCAL ISOLATION
   └── If a change is specific to Page A, create a scoped variant or local override.

7. MANDATORY SHARED CONSUMER AUDIT
   └── If global code MUST be altered, test and verify EVERY consuming page.
```

---

## 3. Page Ownership & Dependency Matrix

> **NOTE**: As pages are introduced, update this matrix with their exact entry file paths, local components, and shared dependencies.

| Page / Route | Local Entry Point | Shared Components Used | Local Component Scope | Shared Risk Factor |
| :--- | :--- | :--- | :--- | :--- |
| **Home (`/`)** | `src/pages/index` | `Header`, `Footer`, `Button`, `Container` | `HeroSection`, `ServicesOverview`, `ProcessGrid` | HIGH (Shared Layout) |
| **Services (`/services`)** | `src/pages/services` | `Header`, `Footer`, `Button`, `ServiceCard` | `ServiceDetailList`, `CapabilitiesFilter` | MEDIUM |
| **Work / Cases (`/work`)** | `src/pages/work` | `Header`, `Footer`, `Button`, `MediaModal` | `CaseStudyGrid`, `MetricsCard` | MEDIUM |
| **About (`/about`)** | `src/pages/about` | `Header`, `Footer`, `Button` | `PhilosophySection`, `EngineeringValues` | LOW |
| **Contact (`/contact`)** | `src/pages/contact` | `Header`, `Footer`, `Input`, `FormButton` | `InquiryForm`, `LocationGrid` | HIGH (Form State & Security) |
| **404 / Error (`/404`)** | `src/pages/404` | `Header`, `Footer`, `Button` | `NotFoundGraphic`, `RecoveryLinks` | LOW |

---

## 4. Component Scope Rules

### Local Components
- Belong exclusively to one page route (e.g. `src/components/home/HeroSection`).
- Can be modified freely without affecting other pages.
- May inherit global design tokens from `DESIGN_SYSTEM.md`.

### Shared Components
- Used across two or more page routes (e.g. `src/components/common/Header`, `src/components/ui/Button`).
- **MUST NOT** be modified for single-page visual tweaks.
- If a page requires a unique variant of a shared component, extend the component via explicit props (e.g., `<Button variant="hero">`) or create a localized wrapper component.

---

## 5. Regression Check Verification Log

Before committing edits to shared files, run through this verification checklist:

- [ ] Has `git diff` been inspected to verify no global styles were accidentally changed?
- [ ] Were all consuming pages listed in the Matrix verified on desktop and mobile viewports?
- [ ] Are all shared component props backward-compatible with existing call sites?
