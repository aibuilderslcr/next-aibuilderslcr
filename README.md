# AI Builders LCR — website (Next.js)

Next.js rewrite of the site for [aibuilderslcr.co.uk](https://aibuilderslcr.co.uk). Next.js (App Router) + React + TypeScript + Tailwind CSS v4, all server components, no backend.

## Stack notes

- **Next.js App Router, server components only.** Nothing on the site uses client-side state, so there is no `"use client"` anywhere. The build is fully static.
- **Events come from Luma's free embed widget**, not the Luma API. In Luma: calendar settings → Embed → copy the "upcoming events" snippet → paste it into `src/components/EventsCalendar.tsx`. No API key involved. Custom event cards styled to the site would need the Luma API (Plus subscription) plus a route handler to keep the key server-side — Next.js makes that straightforward when the time comes.
- **Tailwind CSS v4** — no config file; it scans the source. Design tokens (the terminal palette, mono stack) live in the `@theme` block in `src/app/globals.css`, which is also where the ANSI lockup and shared terminal chrome are styled.
- **Bun** as the package manager and dev runner (`bun install`, `bun dev`, `bun run build`).

## Running locally

```
bun install
bun dev
```

## Pages

- `/` — the poster home page (identical to the original Vite site).
- `/design-system` — living documentation of the terminal/ANSI theme: color tokens, typography, chrome primitives, and live component showcases.

## Structure

```
src/
  app/
    layout.tsx             ← metadata, viewport, html/body shell
    page.tsx               ← home: poster stage + CRT overlay + PosterHero
    globals.css            ← Tailwind import, @theme tokens, terminal chrome
    design-system/page.tsx ← theme + component documentation
  components/
    BrandLockup.tsx    ← ANSI wordmark lockup + liver-bird icon (the h1)
    PosterHero.tsx     ← the 800×2100 poster section (lockup + strapline copy)
    CrtOverlay.tsx     ← fixed scanline/glow atmosphere layer
    SiteHeader.tsx     ← sticky terminal site bar (not on the poster home page)
    SiteFooter.tsx     ← terminal meta footer strip (not on the poster home page)
    EventsCalendar.tsx ← Luma embed section (not on the poster home page)
```

The ANSI art is a fixed character grid: each block is padded to a uniform
column count and `globals.css` derives its font size from that count via
container queries, so it scales to the container rather than wrapping. Editing
the art means updating the matching `.ansi-art-*` rule. Keep the art in plain
template literals — `String.raw` breaks it under transpilers that emit
non-ASCII as escape sequences.
