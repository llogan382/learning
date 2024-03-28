# Three areas

1. Working area. Files NOT in staging. Just in local directory. Untracked.
2. Staging area. Files that are part of current commit. This is how GIT knows what changes. It is an EXACT COPY of the latest commit. Also called `INDEX`
3. Repository. The files GIT knows about.

A commit is a snapshot of what the staging area looks like.

# references

These are pointers to commits.
A BRANCH is a pointer to a commit.
The pointer of a branch changes as commits are made.

`HEAD` is how Git knows what branch you are on. ALSO, what the next parent will be.
- INDEx. It is a pointer: It points to the NAME of the current branch. It is the current commit.

`git commit -P` can add changes in hunks

# Merging

What is a fast forward?
Add new commits to master branch. If this happens, we can lose track of a feature that was added.

Git merge no-ff will retail a history of a merge commit. even if it isnt necessary.

Git rerere can help with refactors.
It tells how you resolved a conflict.

If you have to make the same resolutions over and over, it can save hours.

`git config rerere.enabled true` will enable it.

If turned on, git merge, there is a conflict. Resolve conflict, merge file.
Next time there is the same conflict, it will be merged.

Git will add the automatic merged to the staging for review.

# Git checkout.

To fix something, you need an idea of the three areas:

1. Working area
2. Staging Area (also called INDEX)
3. Repo.

When checking out a branch, this is what happens:

1. Change HEAD to point to new branch.
2. Copy the commit snapshot to staging area.
3. Update working area with branch contents.

When checking out a commit:

- copies to WORKING and STAGING area
- can restore a deleted file.
-



## Useful
`git log --since="yesterday"`

For files that have been renamed:
`git log --name-status --follow == <file>`

For files that have been changed:
Added, Deleted, modified, Renamed (A, D, M, R)

`git log --diff-filter=R --stat`


# Git show

`git show <commit> ` shows a commit and contents

Files changed in a commit:
`git show <commit> --stat`

`git diff` unstaged changes
`git diff --staged` staged differences.

Which branches NOT merged w master?
`git branch --no-merged master`


# Main vs. Origin Master

`git Checkout origin/main -b branchname` will get the latest version.

When you run `fetch` it will update `origin/master` from the most recent.

`fetch` synchronizes remote with origin.

`git pull origin master` is the most reliable way to do it. It will fetch and merge at the same time.

Go back a few commits:

`A^^` goes back 2 commits
or
`A~2` is the same thing: Go 2 commits back.

# Git Clean

How to clean up working area?

It deletes untracked files.

use `--dry-run` to see what will be deleted.
Or:
`git clean -d --dry-run` tells FILES and DIRECTORIES that would be deleted.


## Git reset

- with a path.
- without a path. This is default.

Git reset --hard can overwrite changes.

git checkout moves head. Branch stays where it was
Git reset moves HEAD and moves BRANCH REFERENCE, so the branch POINTS to something different.

`soft` is the first steap. It moves the head pointer to the previous commit.

`git reset HEAD~` moves the head, then it copies file from repo to staging area.

`git reset --hard HEAD~`

1. Moves the HEAD back 1 commit in repo (head is the HASH we are working from, the parent)
2. It copies file from repo to staging area
3. Copies from STAGING to WORKING area.



`git reset 80b1e13a7647d9af029e7000e466dbd813eb3944 -- src/api/leases/operations/GenerateLeaseUrl.operation.ts`
Cheat sheet:

1. Soft. Move HEAD and current branch.
2. Mixed. Does SOFT, AND resets staging area.
3. Does both, AND resets WORKING area.


1. Working area. Files NOT in staging. Just in local directory. Untracked.
2. Staging area. Files that are part of current commit. This is how GIT knows what changes. It is an EXACT COPY of the latest commit.
3. Repository. The files GIT knows about.


GIT RESET can change history.

# Git revert

It createsa  new commit with the opposite changes from the previous commit.
It does NOT change history.
It createsa  new commit that is the mirror opposite

## Git Amend

- `amend` to make changes to previous commit
- `git commit --amend` adds the changes to the previous commit. the SHA will be different though.
- a new commit is created.
- originally commit is left dangling, and gets garbage collecetc

## Rebase

- Avoids messy merge commits in history.
- changes parent commit (or new BASE commit)
- it rewinds HEAD

If on a feature branch:

1. `git rebase master` will replay commits on top of head.
2. It creates a copy of your comm on top of the lates from master

It makes history a lot neater and cleaner.

When commits are replayes, we can change them.
Interactive rebase is interactive.

feat(pencil): add 'graphiteWidth' option