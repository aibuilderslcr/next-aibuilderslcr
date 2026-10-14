import type { Metadata } from "next";
import Link from "next/link";
import { BrandLockup } from "@/components/BrandLockup";
import { PosterHero } from "@/components/PosterHero";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { EventsCalendar } from "@/components/EventsCalendar";
import { CrtOverlay } from "@/components/CrtOverlay";

export const metadata: Metadata = {
  title: "Design System · AI Builders LCR",
  description:
    "Color tokens, type, primitives and components for the AI Builders LCR terminal/ANSI theme.",
};

type Swatch = {
  token: string;
  tailwind: string;
  hex: string;
  note: string;
};

const SWATCHES: Swatch[] = [
  {
    token: "--color-ground",
    tailwind: "bg-ground",
    hex: "#08070c",
    note: "Page background — near-black base of the whole stage.",
  },
  {
    token: "--color-panel",
    tailwind: "bg-panel",
    hex: "#0e0c15",
    note: "Raised surface for bordered panels (e.g. the Luma iframe).",
  },
  {
    token: "--color-line",
    tailwind: "border-line",
    hex: "#1e1a2b",
    note: "Default hairline border for panels, header, footer.",
  },
  {
    token: "--color-line-strong",
    tailwind: "border-line-strong",
    hex: "#2e2842",
    note: "Higher-contrast border, e.g. the Events iframe frame.",
  },
  {
    token: "--color-dim",
    tailwind: "text-dim",
    hex: "#8b85a3",
    note: "Supporting copy and .term-meta labels.",
  },
  {
    token: "--color-ink",
    tailwind: "text-ink",
    hex: "#c5c0d6",
    note: "Default body text color set on <body>.",
  },
  {
    token: "--color-bright",
    tailwind: "text-bright",
    hex: "#efecf7",
    note: "Headings and the ANSI art foreground.",
  },
  {
    token: "--color-accent",
    tailwind: "text-accent",
    hex: "#a97dff",
    note: "Interactive/emphasis accent — links, rule dots, status dot.",
  },
  {
    token: "--color-accent-deep",
    tailwind: "bg-accent-deep",
    hex: "#863bff",
    note: "Deeper accent used in glow/shadow blends, not for flat text.",
  },
];

function SectionHeader({ index, label }: { index: string; label: string }) {
  return (
    <div className="term-meta term-label" aria-hidden="true">
      <span>{index}</span>
      <span>{label}</span>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-ground">
      <CrtOverlay />

      <main className="relative mx-auto max-w-3xl px-6 py-20">
        {/* 1. Intro */}
        <section aria-labelledby="ds-intro-heading">
          <SectionHeader index="00" label="Design_system" />

          <h1
            id="ds-intro-heading"
            className="mt-8 text-2xl tracking-tight text-bright sm:text-3xl"
          >
            Design system
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink">
            A living reference for the terminal/ANSI theme that powers AI
            Builders LCR: color tokens, type, shared primitives and the page
            components built from them. Everything below renders with the
            same CSS as the live site — no invented colors, fonts or rounded
            corners.
          </p>
          <p className="mt-4">
            <Link
              href="/"
              className="term-meta text-accent transition-colors hover:text-bright"
            >
              ← Back to site
            </Link>
          </p>
        </section>

        {/* 2. Color tokens */}
        <section className="mt-20" aria-labelledby="ds-tokens-heading">
          <SectionHeader index="01" label="Tokens" />
          <h2
            id="ds-tokens-heading"
            className="mt-8 text-lg tracking-tight text-bright sm:text-xl"
          >
            Color tokens
          </h2>
          <p className="mt-2 text-sm text-dim">
            Every custom color defined in the <code>@theme</code> block,
            ground up to accent.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {SWATCHES.map((swatch) => (
              <li
                key={swatch.token}
                className="flex items-center gap-4 border border-line bg-panel p-4"
              >
                <span
                  className="h-12 w-12 shrink-0 border border-line-strong"
                  style={{ backgroundColor: swatch.hex }}
                  aria-hidden="true"
                />
                <span className="min-w-0">
                  <span className="block text-sm text-bright">
                    {swatch.token}
                  </span>
                  <span className="term-meta mt-1 block">
                    {swatch.tailwind} · {swatch.hex}
                  </span>
                  <span className="mt-1 block text-xs text-dim">
                    {swatch.note}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* 3. Typography */}
        <section className="mt-20" aria-labelledby="ds-type-heading">
          <SectionHeader index="02" label="Typography" />
          <h2
            id="ds-type-heading"
            className="mt-8 text-lg tracking-tight text-bright sm:text-xl"
          >
            Typography
          </h2>
          <p className="mt-2 max-w-xl text-sm text-dim">
            A single mono stack throughout —{" "}
            <code>ui-monospace, &quot;SF Mono&quot;, SFMono-Regular, Menlo, Consolas,
            &quot;DejaVu Sans Mono&quot;, monospace</code> — set once on <code>body</code>.
            No secondary typeface is loaded anywhere on the site.
          </p>

          <div className="mt-8 space-y-6 border border-line bg-panel p-6">
            <p className="text-xl tracking-tight text-bright">
              Bright heading — text-bright
            </p>
            <p className="text-sm leading-relaxed text-ink">
              Ink body copy — text-ink. This is the default body color set on
              the document, used for paragraph text throughout the site.
            </p>
            <p className="text-sm text-dim">
              Dim supporting text — text-dim. Used for captions, helper
              copy and anything secondary to the main message.
            </p>
            <p className="term-meta">
              .term-meta uppercase tracking — small, letter-spaced labels
              used for section headers and meta strips.
            </p>
          </div>
        </section>

        {/* 4. Primitives */}
        <section className="mt-20" aria-labelledby="ds-primitives-heading">
          <SectionHeader index="03" label="Primitives" />
          <h2
            id="ds-primitives-heading"
            className="mt-8 text-lg tracking-tight text-bright sm:text-xl"
          >
            Primitives
          </h2>
          <p className="mt-2 text-sm text-dim">
            Shared building blocks composed from the tokens above.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="border border-line bg-panel p-6">
              <p className="term-meta">.term-label</p>
              <div className="term-meta term-label mt-4" aria-hidden="true">
                <span>01</span>
                <span>Section_label</span>
              </div>
            </div>

            <div className="border border-line bg-panel p-6">
              <p className="term-meta">.term-split</p>
              <div className="term-meta term-split mt-4" aria-hidden="true">
                <span>Left meta</span>
                <span>Right meta</span>
              </div>
            </div>

            <div className="border border-line bg-panel p-6">
              <p className="term-meta">.status-dot</p>
              <span
                className="term-meta mt-4 flex items-center gap-2 text-accent"
                aria-label="System online"
              >
                <span
                  className="status-dot size-1.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                Online
              </span>
              <p className="mt-3 text-xs text-dim">
                Pulses via <code>@keyframes status-pulse</code>; disabled
                under <code>prefers-reduced-motion: reduce</code>.
              </p>
            </div>

            <div className="border border-line bg-panel p-6">
              <p className="term-meta">.brand-triangle</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="brand-triangle" aria-hidden="true" />
                <span className="text-sm text-bright">AI Builders LCR</span>
              </div>
            </div>

            <div className="border border-line bg-panel p-6">
              <p className="term-meta">.ansi-divider</p>
              <div className="ansi-divider mt-4" aria-hidden="true" />
            </div>

            <div className="border border-line bg-panel p-6">
              <p className="term-meta">.poster-rule</p>
              <div className="mt-4 flex justify-center">
                <div
                  className="poster-rule !mt-0 !w-full"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Components */}
        <section className="mt-20" aria-labelledby="ds-components-heading">
          <SectionHeader index="04" label="Components" />
          <h2
            id="ds-components-heading"
            className="mt-8 text-lg tracking-tight text-bright sm:text-xl"
          >
            Components
          </h2>
          <p className="mt-2 text-sm text-dim">
            Live instances of each component, rendered with their real
            markup and styles.
          </p>

          <div className="mt-8 space-y-10">
            <div className="border border-line bg-panel p-6">
              <p className="term-meta">SiteHeader</p>
              <div className="relative mt-4 overflow-hidden border border-line-strong">
                <SiteHeader />
              </div>
            </div>

            <div className="border border-line bg-panel p-6">
              <p className="term-meta">BrandLockup</p>
              <p className="mt-1 text-xs text-dim">
                Carries its own <code>sr-only</code> h1 — a duplicate
                heading is expected in this showcase context.
              </p>
              <div className="mt-4 border border-line-strong bg-ground p-6">
                <BrandLockup />
              </div>
            </div>

            <div className="border border-line bg-panel p-6">
              <p className="term-meta">EventsCalendar</p>
              <div className="mt-4 border border-line-strong bg-ground">
                <EventsCalendar />
              </div>
            </div>

            <div className="border border-line bg-panel p-6">
              <p className="term-meta">SiteFooter</p>
              <div className="mt-4 border border-line-strong">
                <SiteFooter />
              </div>
            </div>

            <div className="border border-line bg-panel p-6">
              <p className="term-meta">PosterHero</p>
              <p className="mt-1 text-xs text-dim">
                An 800×2100 poster — scaled down for preview rather than
                shown at full size.
              </p>
              <div
                className="relative mt-4 h-[420px] overflow-hidden border border-line-strong bg-ground"
                aria-hidden="true"
              >
                <div
                  className="absolute left-1/2 top-0 origin-top"
                  style={{ transform: "translateX(-50%) scale(0.4)" }}
                >
                  <PosterHero />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Page footer */}
        <footer className="term-meta term-split mt-20 border-t border-line pt-8">
          <span>AI Builders LCR · Design system</span>
          <span aria-hidden="true">Tokens / Primitives / Components</span>
        </footer>
      </main>
    </div>
  );
}
