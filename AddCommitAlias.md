# Add `crm-commit` Git Alias

Register a global Git alias that runs the interactive commit helper script (`git-commit.sh`).

## Prerequisites

- The helper script lives at an **absolute path** you control, e.g. `~/scripts/git-commit.sh`.
- It is executable:

  ```bash
  chmod +x ~/scripts/git-commit.sh
  ```

## Register the alias

Replace `<ABSOLUTE_PATH>` with the real path to the script:

```bash
git config --global alias.crm-commit '!sh <ABSOLUTE_PATH>/git-commit.sh'
```

Example:

```bash
git config --global alias.crm-commit '!sh /home/sontt/scripts/git-commit.sh'
```

> Note: `~` is **not** expanded inside the alias string — use the full path (or `$HOME`).

## Usage

From inside any Git repository:

```bash
git crm-commit
```

You will be prompted to:

1. Pick a task type — `FEAT`, `FIX`, `HOTFIX`, `FEAT (Modified)`, `MIGRATION`, or a custom value.
2. Enter a ticket / link.
3. Enter the commit message.

The final commit will be formatted as:

```
[<TASK>][<LINK>] : <MESSAGE>
```

## Verify

```bash
git config --global --get alias.crm-commit
```

## Remove

```bash
git config --global --unset alias.crm-commit
```
