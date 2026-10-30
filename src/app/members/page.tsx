import type { Metadata } from "next";
import Link from "next/link";
import { CrtOverlay } from "@/components/CrtOverlay";
import { SiteFooter } from "@/components/SiteFooter";
import { MEMBERS } from "@/data/members";

export const metadata: Metadata = {
  title: "Members · AI Builders LCR",
  description:
    "The builders in the AI Builders LCR community, and how to add your own profile with a pull request.",
};

const REPO = "https://github.com/aibuilderslcr/next-aibuilderslcr";
const MEMBERS_FILE = `${REPO}/blob/main/src/data/members.ts`;
const EDIT_MEMBERS_FILE = `${REPO}/edit/main/src/data/members.ts`;

const EXAMPLE_ENTRY = `{
  name: "Ada Lovelace",
  github: "adalovelace",
  tagline: "Building agents that write poetry about engines.",
  url: "https://example.com", // optional
},`;

function SectionHeader({ index, label }: { index: string; label: string }) {
  return (
    <div className="term-meta term-label" aria-hidden="true">
      <span>{index}</span>
      <span>{label}</span>
    </div>
  );
}

export default function MembersPage() {
  const members = [...MEMBERS].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="min-h-screen bg-ground">
      <CrtOverlay />

      <main className="relative mx-auto max-w-3xl px-6 py-20">
        {/* 1. Intro */}
        <section aria-labelledby="members-heading">
          <SectionHeader index="00" label="Members" />

          <h1
            id="members-heading"
            className="mt-8 text-2xl tracking-tight text-bright sm:text-3xl"
          >
            Members
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink">
            The people building with AI across the Liverpool City Region.
            Profiles live in the site&apos;s GitHub repo — add yours with a
            pull request.
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

        {/* 2. Directory */}
        <section className="mt-20" aria-labelledby="members-list-heading">
          <SectionHeader index="01" label="Directory" />
          <h2
            id="members-list-heading"
            className="mt-8 text-lg tracking-tight text-bright sm:text-xl"
          >
            Builders{" "}
            <span className="text-dim">[{members.length}]</span>
          </h2>

          {members.length === 0 ? (
            <p className="mt-6 border border-line bg-panel p-6 text-sm text-dim">
              <span className="text-accent">$</span> ls members/
              <br />
              No profiles yet — be the first. Instructions below.
            </p>
          ) : (
            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {members.map((member) => (
                <li
                  key={member.github}
                  className="flex items-start gap-4 border border-line bg-panel p-4"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- tiny remote avatar, no optimisation needed */}
                  <img
                    src={`https://github.com/${member.github}.png?size=96`}
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                    className="size-12 shrink-0 border border-line-strong"
                  />
                  <span className="min-w-0">
                    <span className="block text-sm text-bright">
                      {member.name}
                    </span>
                    <a
                      href={`https://github.com/${member.github}`}
                      target="_blank"
                      rel="noreferrer"
                      className="term-meta mt-1 block text-accent transition-colors hover:text-bright"
                    >
                      @{member.github}
                    </a>
                    <span className="mt-2 block text-xs leading-relaxed text-ink">
                      {member.tagline}
                    </span>
                    {member.url && (
                      <a
                        href={member.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 block truncate text-xs text-dim transition-colors hover:text-bright"
                      >
                        {member.url.replace(/^https?:\/\//, "")}
                      </a>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* 3. How to add yourself */}
        <section className="mt-20" aria-labelledby="members-join-heading">
          <SectionHeader index="02" label="Add_your_profile" />
          <h2
            id="members-join-heading"
            className="mt-8 text-lg tracking-tight text-bright sm:text-xl"
          >
            Add your profile
          </h2>
          <p className="mt-2 max-w-xl text-sm text-dim">
            You&apos;ll need a GitHub account. No local setup required — it
            can all be done in the browser.
          </p>

          <ol className="mt-8 space-y-6 text-sm leading-relaxed text-ink">
            <li>
              <span className="term-meta text-accent">01 /</span>{" "}
              Open{" "}
              <a
                href={EDIT_MEMBERS_FILE}
                target="_blank"
                rel="noreferrer"
                className="text-accent underline-offset-4 hover:underline"
              >
                src/data/members.ts
              </a>{" "}
              in GitHub&apos;s editor. GitHub will offer to fork the repo
              for you — accept.
            </li>
            <li>
              <span className="term-meta text-accent">02 /</span>{" "}
              Add an entry to the <code className="text-bright">MEMBERS</code>{" "}
              array, keeping it in alphabetical order by name:
              <pre className="mt-3 overflow-x-auto border border-line bg-panel p-4 text-xs leading-relaxed text-bright">
                <code>{EXAMPLE_ENTRY}</code>
              </pre>
            </li>
            <li>
              <span className="term-meta text-accent">03 /</span>{" "}
              Commit with a message like{" "}
              <code className="text-bright">Add &lt;your name&gt; to members</code>{" "}
              and choose <span className="text-bright">Propose changes</span>,
              then <span className="text-bright">Create pull request</span>.
            </li>
            <li>
              <span className="term-meta text-accent">04 /</span>{" "}
              A maintainer will review it. Once merged, your profile goes
              live automatically within a couple of minutes.
            </li>
          </ol>

          <div className="mt-10 border border-line bg-panel p-6">
            <p className="term-meta">Guidelines</p>
            <ul className="mt-4 space-y-2 text-sm text-ink">
              <li>
                <span className="text-accent">›</span> One profile per
                person, and only your own.
              </li>
              <li>
                <span className="text-accent">›</span> Your avatar comes from
                your GitHub account — change it there.
              </li>
              <li>
                <span className="text-accent">›</span> Keep the tagline to one
                line about what you build. No ads or referral links.
              </li>
              <li>
                <span className="text-accent">›</span> Only touch{" "}
                <code className="text-bright">members.ts</code> in the PR.
              </li>
            </ul>
          </div>

          <p className="mt-6 text-xs text-dim">
            Prefer git?{" "}
            <a
              href={REPO}
              target="_blank"
              rel="noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              Fork the repo
            </a>
            , edit{" "}
            <a
              href={MEMBERS_FILE}
              target="_blank"
              rel="noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              members.ts
            </a>{" "}
            on a branch, and open a PR against <code>main</code>.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
