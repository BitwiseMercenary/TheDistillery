# Robert Mercado — Personal Site

A small React + TypeScript single-page site, built with [Vite](https://vite.dev)
and deployed to [Netlify](https://www.netlify.com).

## Getting started

Requires Node 24 (see `.nvmrc`) and [pnpm](https://pnpm.io), which Corepack can
provision for you:

```sh
corepack enable
pnpm install
pnpm dev
```

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the dev server |
| `pnpm build` | Type-check, then build for production into `dist/` |
| `pnpm preview` | Serve the production build locally |
| `pnpm typecheck` | Run `tsc` with no emit |
| `pnpm test` | Run the test suite once (Vitest) |
| `pnpm test:watch` | Run tests in watch mode |
| `pnpm lint` | Lint `src` with ESLint |
| `pnpm format` | Format `src` with Prettier |

## Deployment

Netlify builds from `netlify.toml` (`pnpm build` → `dist/`) and serves the SPA
shell on every route via the catch-all redirect.
