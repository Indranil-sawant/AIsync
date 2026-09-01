# Skill: Git Safe Change Protocol (`git-safe-change`)

## Objective
Enforce safe Git procedures for checking out, branching, committing, diffing, and merging code edits to guarantee zero data loss, clean commit history, and zero destructive operations.

## When to Use
- Before starting any non-trivial code modification.
- Before committing changes to source control.

## Required Inspection
1. Run `git status` to inspect current branch, staged changes, and untracked files.
2. Run `git log -n 5` to review recent repository commits.

## Step-by-Step Procedure
1. **Pre-Change Verification**: Confirm workspace is clean or work is safely stashed before switching branches or pulling updates.
2. **Atomic Branching / Scoped Commits**: Group edits into logical, well-scoped commits with descriptive commit messages following Conventional Commits (e.g. `feat(home): add hero visual container`, `fix(contact): repair email input validation`).
3. **Line-by-Line Diff Review**: Prior to staging, execute `git diff` and verify:
   - No leftover `console.log()` or debug statements.
   - No unintended whitespace or formatting drift in untouched files.
   - No secrets or credentials added.
4. **Clean Staging & Commit**: Stage explicit files using `git add <file1> <file2>` rather than reckless `git add .` whenever untracked scratch files exist.

## Safety Rules
- FORBIDDEN COMMANDS:
  - `git push --force` or `--force-with-lease`
  - `git reset --hard`
  - `git rebase -i` on shared/pushed branches
  - `git branch -D` on unmerged work

## Testing Requirements
- Confirm `git status` reports clean state following commit.
- Verify project compiles cleanly after commit.

## Final Reporting Requirements
Report active branch name, committed files, commit hash, commit message summary, and clean git status.
