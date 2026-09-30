# Indo-ASEAN-Pacific NEXUS Dialogue for 2050 — Official Website

Official bilingual website for the international student policy conference **Indo-ASEAN-Pacific NEXUS Dialogue for 2050**, organized by THE MIRAI INSTITUTE OF POLITICS AND ECONOMICS.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)

No additional runtime dependencies — animations use CSS and browser APIs.

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
  app/              # Next.js App Router (layout, page, styles)
  components/
    layout/         # Header, Footer
    sections/       # Page sections (Hero, About, Program, etc.)
    map/            # Geographic visualizations
    providers/      # Language context
    ui/             # Reusable UI primitives
  data/
    site.ts         # URLs, dates, fees, partners (edit frequently)
    content.ts      # Bilingual copy and labels
    program.ts      # Themes and schedule
    faq.ts          # FAQ items
  lib/
    i18n.ts         # Locale helpers
public/
  logos/            # Logo and brand assets
  maps/             # Generated Natural Earth vector geography
  images/           # OGP and photography
scripts/
  generate-indo-pacific-map.mjs # Rebuilds the optimized map SVG
```

## Updating Content

### Application URL (Google Form)

Edit `src/data/site.ts`:

```ts
applicationUrl: "https://docs.google.com/forms/...",
```

While `null`, the Apply button shows **Applications Opening Soon**.

### Contact Form URL

Edit `src/data/site.ts`:

```ts
contactUrl: "https://docs.google.com/forms/...",
```

### Speakers

Add entries to the `speakers` array in `src/data/site.ts`:

```ts
speakers: [
  {
    id: "speaker-1",
    name: { en: "Name", ja: "名前" },
    title: { en: "Title", ja: "肩書" },
    organization: { en: "Organization", ja: "所属" },
    photo: "/images/speakers/name.jpg", // optional
  },
],
```

### Sponsors & Partners

Add to the `partners` array in `src/data/site.ts`. Set `logo` when a logo file is available in `public/logos/`.

### Dates, Fees, Venue

All in `src/data/site.ts`.

### Bilingual Text

Section copy and labels live in `src/data/content.ts`. Program themes in `src/data/program.ts`. FAQ in `src/data/faq.ts`.

The language switcher (EN / JP) in the header toggles between English and Japanese. Default is English.

## Map Data

The Indo-Pacific outline is generated from the public-domain Natural Earth 1:50m
admin-0 dataset. The generated, browser-ready asset is
`public/maps/indo-pacific-outline.svg`; its build helper is retained in `scripts/` so
the selected geography or projection can be updated without hand-editing SVG paths.

## Replacing Logo & Images

1. The official logo is stored at `public/logos/nexus-logo-official.png` and is used
   by the header, footer, and metadata. Keep its square aspect ratio if replacing it.
2. Replace `public/images/og-image-final.svg` with the official social image, or
   update `site.ts` → `seo.ogImage` if you use another filename.

The included social image remains fallback artwork and can be replaced when an approved
campaign image becomes available.

## Deploy on Vercel

1. Push the repository to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no extra configuration required.

Set `NEXT_PUBLIC_SITE_URL` to the final public origin (for example,
`https://example.org`) so absolute Open Graph image URLs resolve to the canonical site.
Until a final domain is confirmed, the app uses its current Vercel deployment origin
when available and a local development origin otherwise.

## License

© THE MIRAI INSTITUTE OF POLITICS AND ECONOMICS. All rights reserved.
