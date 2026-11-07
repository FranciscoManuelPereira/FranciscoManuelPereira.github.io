# FranciscoManuelPereira.github.io

Resume and portfolio website, focused on web security. Built with [Astro](https://astro.build) and Tailwind CSS, deployed to GitHub Pages.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Where things live

- `src/data/profile.ts`: name, bio, skills, services, projects and CV entries.
- `src/content/writeups/`: writeups in Markdown (one file per post).
- `src/layouts/Base.astro`: page shell, including the Content Security Policy.

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it.
In the repository settings, **Pages → Build and deployment → Source** must be set to **GitHub Actions**.

## Security notes

GitHub Pages cannot set custom HTTP headers, so the CSP is delivered as a `<meta>` tag. The build ships no
inline scripts or styles (syntax highlighting is off because Shiki emits inline styles), so the policy stays strict.
