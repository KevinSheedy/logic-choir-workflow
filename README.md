# Ascolta Audio Workflow

A living reference site for recording and editing Ascolta's live a cappella concerts (Zoom H5essential → Logic Pro). Built with [Astro Starlight](https://starlight.astro.build/) and deployed to GitHub Pages.

Live: https://kevinsheedy.github.io/logic-choir-workflow/

## Develop

```sh
nvm use          # Node 22 (.nvmrc)
npm install
npm run dev      # http://localhost:4321/logic-choir-workflow/
npm run build
```

## Add or edit content

- Pages live in `src/content/docs/<section>/`. New files appear in the sidebar automatically (order via `sidebar.order` frontmatter).
- Use `.mdx` for components (`Tabs`, `Steps`, `Aside`, `Card`), and `.md` otherwise.
- New concert: copy `src/content/docs/concerts/template.md`.
- Workflow decisions: add to `src/content/docs/reference/changelog.md`.

## Deploy

Push to `main`. `.github/workflows/deploy.yml` builds and publishes to GitHub Pages.

Audio and Logic projects are git-ignored. Never commit recordings.
