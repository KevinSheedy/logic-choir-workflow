---
title: How to use this site
description: How the site is organised and how to keep it up to date.
---

This site is a **living notebook**. It documents the workflow as it is today, not as a finished textbook.

## Conventions

- **Options pages** (marked with tabs) list several ways to do one job. When a choice is made, it gets a **✅ Current choice** note and an entry in the [changelog](/logic-choir-workflow/reference/changelog/).
- **Asides** flag tips (💡), cautions (⚠️) and things still to learn.
- **"To learn"** sections are honest gaps. Fill them in once something has been tried.
- **Concert log** pages record what actually happened for each recording. Guide pages record what to do in general.

## The update loop

1. Do an editing session in Logic.
2. Note what you tried, what worked and what didn't (rough notes are fine).
3. Update the relevant guide page and the concert log entry.
4. Add a line to the [changelog](/logic-choir-workflow/reference/changelog/) if the *workflow* changed.
5. `git commit` and `git push`. GitHub Actions rebuilds and deploys the site in about a minute.

## Working on the site

```sh
nvm use            # Node 22, from .nvmrc
npm run dev        # http://localhost:4321/logic-choir-workflow/
npm run build      # same build that CI runs
```

Pages live in `src/content/docs/`. A new file in a section folder shows up in the sidebar automatically. Use `.mdx` when you need components such as `<Tabs>`, and plain `.md` otherwise. See the [Starlight docs](https://starlight.astro.build/) for components.
