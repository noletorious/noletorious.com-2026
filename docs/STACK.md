# Tech Stack Reference

## Core

| Layer       | Tool                        | Notes                                      |
| ----------- | --------------------------- | ------------------------------------------ |
| Framework   | Vite + React 19 (TypeScript)| `npm run dev` / `npm run build`            |
| Styling     | Tailwind CSS 4.0            | CSS-first config via `@tailwindcss/vite`   |
| CMS         | Sanity.io                   | Headless, GROQ queries, `/studio` dir      |
| Animation   | Motion.dev (`motion`)       | React-specific, spring physics preferred   |
| UI System   | shadcn/ui (Radix Primitives)| Components in `src/components/ui/`         |
| Theming     | next-themes                 | Light / Dark / System modes                |

## Tailwind 4.0 Specifics

- No `tailwind.config.js` — config lives in CSS via `@theme` directives.
- Plugin: `@tailwindcss/vite` (not PostCSS).
- Animations: `tw-animate-css` package installed.

## shadcn/ui Setup

- Config: `components.json` at project root.
- Components are copied into `src/components/ui/`, not installed as a package.
- Add new components: `npx shadcn@latest add <component>`
- Utility: `cn()` helper in `src/lib/utils.ts` (clsx + tailwind-merge).

## Key Dependencies

- `lucide-react` — Icon library.
- `class-variance-authority` — Variant styling for components.
- `radix-ui` — Accessible primitives (used via shadcn).
