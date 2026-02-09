# Portfolio 2026 — noletorious.com

Minimalist, high-contrast developer portfolio. Glassmorphism, spring-physics animations, premium typography.

## Quick Reference

| What                  | Where                  |
| --------------------- | ---------------------- |
| Tech stack & configs  | `docs/STACK.md`        |
| Phase specs (1–4)     | `docs/PHASES.md`       |
| Code style & patterns | `docs/CONVENTIONS.md`  |
| Session handoff state | `CONTEXT.md`           |

## Progressive Disclosure Rules

Read the relevant doc **before** starting work:

- **Building UI or adding components?** → Read `docs/STACK.md` + `docs/CONVENTIONS.md`
- **Working on a specific phase?** → Read `docs/PHASES.md` for that phase's spec
- **Starting a new session?** → Read `CONTEXT.md` for current state and next steps
- **Setting up or querying Sanity?** → Read `docs/PHASES.md` (Phase 2) + `docs/STACK.md`

## Core Stack (at a glance)

Vite + React 19 (TS) · Tailwind 4.0 · Sanity.io · Motion.dev · shadcn/ui · next-themes

## File Layout

- `src/components/ui/` — shadcn primitives
- `src/components/blocks/` — layout sections (Hero, Navigation, ProjectGrid, Footer)
- `src/lib/` — clients and utilities
- `media/` — static assets (logo, avatar)
- `studio/` — Sanity Studio (Phase 2)
- `docs/` — detailed project documentation
