# Skill: Client & Code Security Audit (`security-audit`)

## Objective
Audit client-side code, forms, environment variables, third-party scripts, dependencies, and headers to prevent secret leaks, XSS, injection vulnerabilities, and unsafe data processing.

## When to Use
- Before integrating API integrations or form endpoints.
- Prior to public releases or security reviews.

## Required Inspection
1. Inspect `.env` files, config files, and build assets for exposed secrets or API keys.
2. Read `CHANGE_CONTROL.md` (Rule 6: Zero Secret Exposure).
3. Inspect `package.json` for known vulnerability notices or obsolete dependencies.

## Step-by-Step Procedure
1. **Secret Leak Scan**: Search codebase for hardcoded tokens, secret keys, password strings, or internal private URLs.
2. **XSS & HTML Injection Audit**: Ensure user input in forms or dynamic rendering paths is safely sanitized and never rendered using unescaped raw HTML methods (e.g. `dangerouslySetInnerHTML`).
3. **Dependency Vulnerability Scan**: Run `npm audit` to detect high or critical security vulnerabilities in third-party packages.
4. **Third-Party Script Isolation**: Verify external scripts (if any) are loaded over HTTPS with integrity hashes where applicable.
5. **HTTP Security Headers**: Ensure recommendation of essential security headers (`Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`).

## Safety Rules
- NEVER commit `.env` or secret configuration files to source control.
- NEVER output raw database errors or stack traces to client-side UI.

## Testing Requirements
- Test form inputs with XSS payload strings (`<script>alert(1)</script>`) to confirm sanitization.
- Perform automated security scan on package dependencies.

## Final Reporting Requirements
Provide a Security Assessment Report listing scanned directories, verified secret handling, package audit results, and security header compliance.
