## Portfolio · Backend & ML Engineer

Dark, minimal portfolio built with the latest Next.js tooling. Highlights projects, talks, and long-form writing for backend and machine learning work.

### Tech Stack

- Next.js 16 (App Router + React Compiler + Turbopack)
- TypeScript with src/ directory & path aliases (`@/*`)
- Tailwind CSS v4 (new `@import "tailwindcss"` pipeline)
- Geist font family via `next/font`

### Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to explore the site. ESLint is configured; run `npm run lint` to keep things tidy.

### Update Your Details

All editable content lives in `src/data/content.ts`:

- `profile`: name, location, availability, focus areas, toolkit, and social links
- `projects`: showcase work with meta, description, and tag pills
- `talks`: conference talks, meetups, or podcasts
- `articles`: blog posts with publish date and reading time

The landing page (`src/app/page.tsx`) consumes this data and keeps layout/styling centralized.

### Customising The Look

- Global tokens and gradients: `src/app/globals.css`
- Metadata and shared fonts: `src/app/layout.tsx`
- Components: defined inline within `src/app/page.tsx` for quick iteration

To tweak colors, adjust the custom properties in `globals.css`. The design relies heavily on CSS variables, so changing them will cascade throughout cards, backgrounds, and typography.

### Deploy

This project deploys cleanly to any Next.js–compatible host (Vercel, Netlify, Render). For Vercel:

```bash
npm run build
```

Push the repo to GitHub and import it into Vercel—defaults work out of the box.
