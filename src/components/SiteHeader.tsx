import Link from "next/link";

/* Sticky terminal site bar, shared by every page. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ground/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm tracking-tight text-bright"
        >
          <span
            className="brand-triangle transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
          <span className="text-dim" aria-hidden="true">
            /
          </span>
          <span className="font-medium">AI Builders LCR</span>
        </Link>

        <div className="flex items-center gap-5">
          <nav className="term-meta flex gap-5">
            <Link href="/#events" className="transition-colors hover:text-bright">
              Events
            </Link>
            <Link href="/members" className="transition-colors hover:text-bright">
              Members
            </Link>
            <a
              href="https://github.com/aibuilderslcr"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-bright"
            >
              GitHub
            </a>
          </nav>

          <span
            className="term-meta hidden items-center gap-2 text-accent sm:flex"
            aria-label="System online"
          >
            <span
              className="status-dot size-1.5 rounded-full bg-accent"
              aria-hidden="true"
            />
            Online
          </span>
        </div>
      </div>
    </header>
  );
}
