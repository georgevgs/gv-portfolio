# George Vagdas — Portfolio

My personal portfolio site, built with Astro and Tailwind CSS. It's where I showcase my work, skills, and a bit about who I am.

Live at: [georgevagdas.com](https://georgevagdas.com)

## Getting started

Clone the repo, install dependencies, and spin up the dev server:

```bash
git clone https://github.com/georgevgs/gv-portfolio.git
cd gv-portfolio
bun install
bun run dev
```

The dev server starts at `http://localhost:4321`.

## Commands

| Command            | What it does                              |
| ------------------ | ----------------------------------------- |
| `bun run dev`      | Start local dev server at `localhost:4321` |
| `bun run build`    | Build the site to `./dist/`               |
| `bun run preview`  | Preview the production build locally      |

## Project structure

```
.
├── public/              # Static assets (images, fonts, etc.)
├── src/
│   ├── components/      # Reusable UI components
│   ├── layouts/         # Page layout templates
│   ├── pages/           # Routes — each file becomes a page
│   ├── scripts/         # Client-side scripts
│   ├── styles/          # Global styles and Tailwind setup
│   └── types.ts         # Shared TypeScript types
├── astro.config.mjs     # Astro config
├── tailwind.config.js   # Tailwind config
└── package.json
```

## Stack

- [Astro](https://astro.build) — static site framework
- [Tailwind CSS](https://tailwindcss.com) — utility-first styling
- [Vercel](https://vercel.com) — hosting and analytics

## License

MIT
