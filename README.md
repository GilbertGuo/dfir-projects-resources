# Gilbert Guo — DFIR Projects & Resources

A lightweight, responsive project showcase for DFIR tools, investigation projects, and technical resources. Built with React, TypeScript, Vite, Tailwind CSS, and Lucide React.

## Local development

```bash
npm install
npm run dev
```

Run the production checks with:

```bash
npm run lint
npm run build
```

## Updating projects

All project content is centralized in `src/data/projects.ts`. Update URLs, descriptions, tags, status labels, and button labels there; the cards render automatically.

## GitHub Pages

The included `.github/workflows/deploy.yml` workflow builds and deploys the site whenever `main` is pushed. Enable GitHub Pages in the repository settings and choose **GitHub Actions** as the source.

Vite uses relative asset paths by default, so the current configuration works for both:

- a user site: `https://gilbertguo.github.io`
- a project site: `https://gilbertguo.github.io/<repository-name>/`

If you prefer an explicit base path, set `VITE_BASE_PATH=/` for the user site or `VITE_BASE_PATH=/<repository-name>/` for a project site in the workflow environment. The fallback in `vite.config.mjs` remains portable between both deployment shapes.
