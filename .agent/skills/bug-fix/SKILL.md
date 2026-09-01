# Skill: Bug Fix & Regression Isolation (`bug-fix`)

## Objective
Diagnose runtime bugs, layout regressions, or component errors, reproduce the root cause empirically, implement a surgical minimal fix, and verify zero unintended side effects.

## When to Use
- When addressing reported bugs, layout glitches, script errors, or broken interactions.

## Required Inspection
1. Read relevant error logs, stack traces, or browser console output completely.
2. Read `PAGE_OWNERSHIP.md` to identify affected page boundaries.
3. Inspect recent `git log` commits to see if recent changes introduced the bug.

## Step-by-Step Procedure
1. **Reproduce the Bug**: Replicate the exact steps triggering the reported bug in a controlled environment.
2. **Empirical Root Cause Analysis**: Trace error stack, variable initialization, or CSS property conflict to pinpoint the exact failure line.
3. **Minimal Surgical Fix**: Formulate the minimal change required to fix the root cause. Avoid heavy refactorings or rewriting adjacent working code.
4. **Scope Protection Verification**: Ensure the fix does not modify unrelated pages or break shared component contracts.
5. **Regression Verification**: Re-test the original broken flow AND test adjacent components/pages to confirm zero regressions.

## Safety Rules
- NEVER resolve errors by wrapping calls in silent `try/except` blocks, returning dummy fallbacks, or disabling lint rules.
- NEVER delete or comment out failing tests to force a pass.

## Testing Requirements
- Confirm reproduction steps no longer trigger error.
- Run project build and test suite to ensure clean build output.

## Final Reporting Requirements
Document root cause analysis, modified code snippet/files, reproduction test results, and regression protection verification.
