# Skill: Forms & Interactivity Audit (`forms-audit`)

## Objective
Audit every form control, contact workflow, input field validation state, submit button feedback, network handling, keyboard navigation, and error message presentation.

## When to Use
- When creating or modifying contact forms, newsletter signups, or interactive input tools.
- Prior to release or security audits.

## Required Inspection
1. Read `PROJECT_CONTEXT.md` for form inquiry expectations.
2. Inspect target form component files, submit API endpoints, and validation schemas.

## Step-by-Step Procedure
1. **Client Validation Check**: Test empty submissions, malformed emails, invalid phone numbers, and character limits. Ensure immediate, readable inline error messaging.
2. **State & Micro-Feedback Check**: Confirm submit buttons transition to loading state (disabled + spinner/label update) upon submission to prevent double-submits.
3. **Success & Failure States**: Verify accessible visual confirmation upon success and graceful error handling on network failure.
4. **Keyboard Accessibility**: Ensure logical Tab key order through inputs, visual focus outlines, and Enter key form submission.
5. **Mobile Keyboard Ergonomics**: Verify inputs utilize proper HTML types (`type="email"`, `type="tel"`, `autocomplete="email"`) for optimized mobile keyboard layouts.

## Safety Rules
- NEVER allow unvalidated raw HTML strings in form fields to prevent XSS vulnerabilities.
- NEVER leave form endpoints unprotected against automated spam bots (use honeypot fields or CAPTCHA).

## Testing Requirements
- Test form input validation with valid, invalid, and edge-case inputs.
- Simulate offline or network error states to verify user-facing error fallback displays.

## Final Reporting Requirements
Document audited form routes, validation schemas tested, input ergonomics compliance, and security/anti-spam measures implemented.
