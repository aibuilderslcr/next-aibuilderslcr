import type { Metadata } from "next";
import { CrtOverlay } from "@/components/CrtOverlay";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { DEMOS } from "@/data/demos";

export const metadata: Metadata = {
  title: "Demos · AI Builders LCR",
  description: "See what AI Builders LCR members have demoed and try it yourself.",
};

const demoDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

const contributionUrl =
  "https://github.com/aibuilderslcr/next-aibuilderslcr/edit/main/src/data/demos.ts";

export default function DemosPage() {
  const demos = [...DEMOS].sort((a, b) => b.demoedOn.localeCompare(a.demoedOn));

  return (
    <div className="min-h-screen bg-ground">
      <CrtOverlay />
      <SiteHeader />

      <main className="relative mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-20 lg:pt-24 lg:pb-28">
        <h1 className="text-2xl tracking-tight text-bright sm:text-3xl">
          Look what we built
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink">
          Demos from AI Builders LCR. See what people made and try it yourself.
        </p>

        <ul className="mt-10 grid gap-4 lg:grid-cols-2">
          {demos.map((demo) => {
            const date = (
              <time dateTime={demo.demoedOn}>
                {demoDate.format(new Date(demo.demoedOn))}
              </time>
            );

            return (
              <li key={demo.slug}>
                <article
                  id={demo.slug}
                  className="h-full border border-line bg-panel p-6"
                >
                  <p className="term-meta">{demo.useCase}</p>
                  <h2 className="mt-3 text-lg text-bright">{demo.title}</h2>
                  <p className="mt-1 text-xs leading-relaxed text-dim">
                    {demo.builder} · Demoed on{" "}
                    {demo.eventUrl ? (
                      <a
                        href={demo.eventUrl}
                        className="underline underline-offset-4 hover:text-bright"
                      >
                        {date}
                      </a>
                    ) : (
                      date
                    )}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink">
                    {demo.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm">
                    <a
                      href={demo.projectUrl}
                      aria-label={`Try the demo for ${demo.title}`}
                      className="text-accent underline underline-offset-4 hover:text-bright"
                    >
                      Try the demo
                    </a>
                    {demo.makeYourOwnUrl && (
                      <a
                        href={demo.makeYourOwnUrl}
                        aria-label={`Make your own ${demo.title}`}
                        className="text-accent underline underline-offset-4 hover:text-bright"
                      >
                        Make your own
                      </a>
                    )}
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <p className="mt-10 text-sm text-ink">
          Demoed something at AI Builders LCR?{" "}
          <a
            href={contributionUrl}
            className="text-accent underline underline-offset-4 hover:text-bright"
          >
            Add your demo on GitHub
          </a>
          .
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
