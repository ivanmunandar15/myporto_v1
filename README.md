# Ivan Munandar — Portfolio
Next.js (App Router) + TypeScript + Tailwind CSS portfolio, positioning Ivan
Munandar as an electrical engineer working across laboratory testing, IoT,

## Stack

- Next.js 16 / React 19 / TypeScript (strict)
- Tailwind CSS 3, with the color/spacing/radius system as centralized tokens
  in `tailwind.config.ts`
- `lucide-react` for icons (single icon library, referenced via
  `src/components/ui/icon-map.tsx`)
- `motion` for restrained, viewport-triggered reveal animations
  (`src/components/ui/reveal.tsx`), respecting `prefers-reduced-motion`
- `next/font` (Manrope for headings, Inter for body, JetBrains Mono for
  technical/data elements — nav labels, tech tags, timestamps)

## Getting started

```bash
npm install
npm run dev
```

Then verify before shipping:

```bash
npm run lint
npm run build
```


## Project structure

```
src/
  app/            layout, page, not-found, opengraph-image, metadata routes (sitemap, robots, icon)
  components/
    layout/       sidebar (desktop), mobile-nav, footer
    sections/     one file per homepage section
    cards/        reusable card components (expertise, project)
    ui/           button, badge, section-heading, empty-state, icon-map, reveal
  data/           typed content arrays — edit these, not the JSX
  lib/            cn() className helper, isPlaceholder() guard
public/
  images/projects/   place real project screenshots here
```