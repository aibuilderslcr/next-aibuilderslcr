import Link from "next/link";
import { BrandLockup } from "@/components/BrandLockup";
import { CrtOverlay } from "@/components/CrtOverlay";
import { EventsCalendar } from "@/components/EventsCalendar";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-ground">
      <CrtOverlay />
      <SiteHeader />

      <main>
        <section id="top" className="mx-auto max-w-3xl px-6 pt-16 pb-20 sm:pt-20">
          <BrandLockup />

          <p className="mt-12 max-w-xl text-lg leading-relaxed text-bright sm:text-xl">
            The community for cracked AI builders in the Liverpool City
            Region.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink">
            Bring your ideas. Build something brilliant. We run coworking
            days, demo nights and hackathons for people shipping real things
            with AI.
          </p>
        </section>

        <section
          id="members"
          className="mx-auto max-w-3xl px-6 pb-20"
          aria-labelledby="home-members-heading"
        >
          <div className="term-meta term-label" aria-hidden="true">
            <span>01</span>
            <span>Members</span>
          </div>

          <h2
            id="home-members-heading"
            className="mt-8 text-lg tracking-tight text-bright sm:text-xl"
          >
            Who&apos;s building
          </h2>
          <p className="mt-2 max-w-xl text-sm text-dim">
            Meet the builders in the community, or add your own profile with
            a pull request.
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
      </main>

      <SiteFooter />
    </div>
  );
}
