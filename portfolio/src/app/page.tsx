import Link from "next/link";
import { articles, profile, projects, talks } from "@/data/content";
import type { Article, Resource } from "@/data/content";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Talks", href: "#talks" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Home() {
  const emailLink = profile.links.find((link) =>
    link.href.toLowerCase().startsWith("mailto:"),
  );

  return (
    <div className="relative flex min-h-screen flex-col bg-[var(--color-background)] text-[var(--color-foreground)]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(56,189,248,0.14),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.1),transparent_65%)]" />

      <header className="mx-auto w-full max-w-5xl px-6 pb-10 pt-14 sm:pt-16">
        <nav className="flex flex-wrap items-center justify-between gap-4 text-sm text-[var(--color-muted)]">
          <span className="font-mono uppercase tracking-[0.2em]">
            {profile.location}
          </span>
          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-[var(--color-foreground)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <section className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted)]">
                {profile.title}
              </p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
              <p className="max-w-xl text-base text-[var(--color-muted)] sm:text-lg">
                {profile.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {profile.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-foreground)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  <span>{link.label}</span>
                  <span className="text-[var(--color-muted)] transition group-hover:text-[var(--color-accent)]">
                    ↗
                  </span>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {profile.focus.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 backdrop-blur">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  Availability
                </p>
                <p className="mt-2 text-sm text-[var(--color-foreground)]">
                  {profile.availability}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  Toolkit
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {profile.toolkit.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-3 py-1 text-xs text-[var(--color-muted)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </section>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-24 px-6 pb-24">
        <Section
          id="projects"
          eyebrow="Selected Work"
          title="Projects that made a dent"
          description="Hands-on ownership across architecture, deployment, and post-launch operations."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ResourceCard key={project.title} resource={project} />
            ))}
          </div>
        </Section>

        <Section
          id="talks"
          eyebrow="Stage & Community"
          title="Talks worth replaying"
          description="Sharing lessons learned with engineering leaders and practitioner communities."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {talks.map((talk) => (
              <ResourceCard key={talk.title} resource={talk} />
            ))}
          </div>
        </Section>

        <Section
          id="writing"
          eyebrow="From the notebook"
          title="Recent writing"
          description="Strategy notes, teardown posts, and patterns for calm production systems."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.title} article={article} />
            ))}
          </div>
        </Section>
      </main>

      <footer
        id="contact"
        className="border-t border-[var(--color-border)]/60 bg-[var(--color-surface-soft)]"
      >
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Contact
            </p>
            <h2 className="text-2xl font-semibold">
              Let&apos;s build the next reliable system together.
            </h2>
            <p className="text-sm text-[var(--color-muted)]">{profile.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {emailLink && (
              <a
                href={emailLink.href}
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-5 py-2 text-sm font-semibold text-[var(--color-accent-foreground)] shadow-[0_18px_50px_rgba(14,165,233,0.35)] transition hover:opacity-90"
              >
                Email me
              </a>
            )}
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-5 py-2 text-sm font-semibold text-[var(--color-foreground)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              View work
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-6">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-muted)]">
          {eyebrow}
        </p>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-3xl font-semibold text-[var(--color-foreground)]">
            {title}
          </h2>
          <p className="max-w-2xl text-sm text-[var(--color-muted)]">
            {description}
          </p>
        </div>
      </div>
      {children}
    </section>
  );
}

function ResourceCard({ resource }: { resource: Resource }) {
  const isExternal =
    resource.href.startsWith("http") || resource.href.startsWith("mailto:");

  const content = (
    <div className="flex h-full flex-col gap-4 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition duration-200 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-[0_25px_70px_rgba(15,23,42,0.55)]">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
        <span>{resource.meta}</span>
        <span>↗</span>
      </div>
      <h3 className="text-xl font-semibold text-[var(--color-foreground)]">
        {resource.title}
      </h3>
      <p className="text-sm text-[var(--color-muted)]">{resource.description}</p>
      {resource.tags && (
        <div className="mt-2 flex flex-wrap gap-2">
          {resource.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}
    </div>
  );

  if (isExternal) {
    return (
      <a
        href={resource.href}
        target={resource.href.startsWith("http") ? "_blank" : undefined}
        rel={resource.href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={resource.href} className="block">
      {content}
    </Link>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <a
      href={article.href}
      target={article.href.startsWith("http") ? "_blank" : undefined}
      rel={article.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex h-full flex-col gap-4 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition duration-200 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-[0_25px_70px_rgba(15,23,42,0.55)]"
    >
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
        <span>{article.published}</span>
        <span>{article.readingTime}</span>
      </div>
      <h3 className="text-xl font-semibold text-[var(--color-foreground)]">
        {article.title}
      </h3>
      <p className="text-sm text-[var(--color-muted)]">{article.description}</p>
      {article.tags && (
        <div className="mt-auto flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}
    </a>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-3 py-1 text-xs text-[var(--color-muted)]">
      {children}
    </span>
  );
}
