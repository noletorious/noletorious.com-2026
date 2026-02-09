# Coding Conventions

## File Structure

```
src/
├── components/
│   ├── ui/          # shadcn primitives (button, card, etc.)
│   └── blocks/      # Layout sections (Hero, Navigation, ProjectGrid, Footer)
├── lib/             # Clients and utilities (sanity.ts, utils.ts)
├── App.tsx          # Root component
├── main.tsx         # Entry point
└── index.css        # Global styles + Tailwind directives
media/               # Static assets (logo, avatar)
studio/              # Sanity Studio config + schemas (Phase 2)
docs/                # Project documentation (progressive disclosure)
```

## Naming
- Components: PascalCase (`Hero.tsx`, `ProjectGrid.tsx`).
- Utilities/hooks: camelCase (`useLiveStats.ts`, `utils.ts`).
- Sanity schemas: camelCase (`project.ts`, `blog.ts`).

## Design Language
- **High-contrast** — strong foreground/background separation.
- **Glassmorphism** — `backdrop-blur-md`, semi-transparent backgrounds, subtle borders.
- **Micro-interactions** — spring-physics via `motion`, not CSS transitions.
- **Typography** — premium, minimal. Let whitespace do the work.

## Performance
- Keep bundle size minimal.
- Lazy-load Sanity images.
- Prefer native CSS (Tailwind) over JS-driven layout.

## Accessibility
- All interactive elements must have ARIA labels.
- Theme toggle must announce state changes.
- Ensure sufficient color contrast in both light and dark modes.
