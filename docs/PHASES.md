# Implementation Phases

## Phase 1: Above-the-Fold Experience ✅

> Complete. All components implemented and functional.

### Navigation (`src/components/blocks/Navigation.tsx`)
- Sticky header with `backdrop-blur-md` and `bg-background/80`.
- Centered logo: `media/noletorious-logo.svg`.
- Right-aligned theme toggle via `DropdownMenu` (Light / Dark / System).
- Theme switching powered by `next-themes` with `Sun`, `Moon`, `Monitor` icons from `lucide-react`.

### Hero (`src/components/blocks/Hero.tsx`)
- `min-h-[calc(100vh-4rem)]` viewport section, vertically centered.
- Glass-card: shadcn `Card` with `backdrop-blur-md` + `bg-card/60`.
- Avatar: `media/noel-torres.jpg`, circular with `ring-2 ring-border`, motion.dev spring hover (`scale: 1.05`).
- Social links: X, LinkedIn, Resume — each wrapped in `motion.a` with spring-physics hover/tap animations.
- Pulsing scroll-down `ChevronDown` indicator with infinite `y: [0, 8, 0]` animation.
- Entrance animation: fade-in + slide-up on the card (`opacity: 0→1`, `y: 20→0`).

### Theming & Styling
- Tailwind 4.0 with `@tailwindcss/vite` (CSS-first config, no `tailwind.config.js`).
- OKLCH color system defined in `src/index.css`, full light/dark support.
- shadcn/ui primitives in use: `Button`, `Card`, `CardContent`, `DropdownMenu`.

### Scaffolding
- `App.tsx` wraps everything in `ThemeProvider` (attribute="class", defaultTheme="system").
- Placeholder `ProjectGrid` and `Footer` components in place for later phases.

---

## Phase 2: Sanity.io Content Modeling

### Studio Setup
- Create `/studio` directory with Sanity config (`sanity.config.ts`, `sanity.cli.ts`).

### Schemas
- **`project.ts`** — Title (string), Slug (slug), Thumbnail (image), Description (text), TechStack (array of strings), ProjectLink (url).
- **`blog.ts`** — Title (string), Slug (slug), Body (portable text), PublishedDate (datetime).

### Integration
- Create `src/lib/sanity.ts` — Sanity client + GROQ query helpers.
- Lazy-load images from Sanity CDN.

---

## Phase 3: Below-the-Fold Content (Grid + Footer)

### Project Grid
- Replace `ProjectGrid` placeholder with Sanity-driven project data.
- Responsive CSS Grid: 1 column mobile, 2 columns desktop.
- Motion.dev staggered entry animations triggered on scroll (viewport intersection).

### Footer Widgets
- Custom `useLiveStats` hook.
- **Weather:** Portland, OR via OpenWeather API.
- **Markets:** DOW and S&P 500 (mock data or financial API).
- Monochromatic, minimalist utility bar styling.

---

## Phase 4: TBD

> This phase is intentionally left open. Define scope here when ready.
