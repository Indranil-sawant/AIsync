# Skill: Safe Page Recovery (`page-recovery`)

## Objective
Safely restore a broken or corrupted page route to a known-good past Git commit state without destroying unrelated working code, dirty files, or separate page updates.

## When to Use
- When a page update introduces severe regressions that cannot be quickly patched.
- When an experiment on a specific page fails and must be cleanly discarded.

## Required Inspection
1. Run `git status` to identify modified, untracked, or staged files.
2. Read `PAGE_OWNERSHIP.md` to identify the exact files owned exclusively by the target page.
3. Review `git log -n 10 -- [target-page-files]` to locate the last clean commit hash.

## Step-by-Step Procedure
1. **Isolate Page File Boundaries**: List exact local files belonging exclusively to the corrupted page (e.g. `src/pages/services/index.tsx`, `src/styles/services.module.css`).
2. **Verify Shared File Safety**: Confirm no shared components (`Header`, `Footer`) are included in the target recovery list unless they specifically broke *only* due to this page edit.
3. **Execute Targeted Checkout**: Checkout target page files from the verified clean commit hash:
   ```bash
   git checkout <clean-commit-hash> -- <path/to/page/file1> <path/to/page/file2>
   ```
4. **Verify Page Restoration**: Run local dev build and inspect restored page to confirm clean functionality.
5. **Verify Unrelated Work**: Check `git status` to ensure all other pages and working code remain intact.

## Safety Rules
- NEVER run `git reset --hard` across the workspace.
- NEVER delete or overwrite files belonging to other pages during recovery.

## Testing Requirements
- Confirm the target page renders error-free after checkout.
- Verify unrelated pages modified during the session maintain their changes.

## Final Reporting Requirements
Report recovered page path, commit hash restored from, list of checked-out files, and verification of workspace stability.
