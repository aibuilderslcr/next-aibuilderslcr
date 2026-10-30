import Link from "next/link";
import { BrandLockup } from "@/components/BrandLockup";
import { CrtOverlay } from "@/components/CrtOverlay";
import { EventsCalendar } from "@/components/EventsCalendar";
import { SectionLabel } from "@/components/SectionLabel";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const FORMATS = [
  {
    index: "A",
    title: "Coworking",
    body: "Regular days building side by side. Bring a laptop and a problem; leave with something shipped.",
  },
  {
    index: "B",
    title: "Demos",
    body: "Evening demo nights. Show what you built, see what everyone else is working on, steal good ideas.",
  },
  {
    index: "C",
    title: "Hackathons",
    body: "Focused build sprints with a theme, a deadline and a room full of people who can help.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-ground">
      <CrtOverlay />
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-6">
        {/* Hero: stacked on mobile, lockup beside the pitch on desktop. */}
        <section
          id="top"
          className="grid grid-cols-1 items-center gap-12 pt-16 pb-20 sm:pt-20 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16 lg:pt-24 lg:pb-28"
        >
          <BrandLockup />

          <div>
            <p className="text-lg leading-relaxed text-bright sm:text-xl lg:text-2xl">
              The community for cracked AI builders in the Liverpool City
              Region.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink">
              Bring your ideas. Build something brilliant. We run coworking
              days, demo nights and hackathons for people shipping real things
              with AI.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#events"
                className="term-meta border border-accent bg-accent/10 px-4 py-3 text-accent transition-colors hover:bg-accent/20 hover:text-bright"
              >
                Upcoming events
              </Link>
              <Link
                href="/members"
                className="term-meta border border-line-strong px-4 py-3 transition-colors hover:border-accent hover:text-bright"
              >
                Meet the members
              </Link>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="pb-20 lg:pb-28" aria-labelledby="formats-heading">
          <SectionLabel index="01" label="What_we_do" />
          <h2
            id="formats-heading"
            className="mt-8 text-lg tracking-tight text-bright sm:text-xl"
          >
            What we do
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {FORMATS.map((format) => (
              <li key={format.title} className="border border-line bg-panel p-6">
                <span className="term-meta text-accent">{format.index}</span>
                <h3 className="mt-3 text-base text-bright">{format.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-dim">
                  {format.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Members teaser beside the events feed on desktop. */}
        <div className="grid grid-cols-1 gap-20 pb-20 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16 lg:pb-28">
          <section
            id="members"
            aria-labelledby="home-members-heading"
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <SectionLabel index="02" label="Members" />
            <h2
              id="home-members-heading"
              className="mt-8 text-lg tracking-tight text-bright sm:text-xl"
            >
              Who&apos;s building
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-dim">
              Meet the builders in the community, or add your own profile
              with a pull request — it takes a couple of minutes in the
              browser.
            </p>
            <p className="mt-6">
              <Link
                href="/members"
                className="term-meta text-accent transition-colors hover:text-bright"
              >
                View members →
              </Link>
            </p>
          </section>

          <EventsCalendar />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
