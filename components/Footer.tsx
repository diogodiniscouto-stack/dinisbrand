import Link from "next/link";
import { Container } from "./ui/Container";
import { Linkedin, ArrowUpRight } from "./Icons";

const LINKEDIN = "https://www.linkedin.com/in/diogo-dinis-a16bb1188/";

const columns = [
  {
    title: "Starter Kit",
    links: [
      { label: "Dashboard", href: "/toolkit" },
      { label: "Ecommerce Reality Check", href: "/toolkit/reality-check" },
      { label: "Beginner Roadmap", href: "/toolkit/roadmap" },
      { label: "AI Prompt Library", href: "/toolkit/prompts" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Free Starter Kit", href: "/#resources" },
      { label: "The Profitable Brand Roadmap", href: "/#zero-to-brand" },
      { label: "Newsletter", href: "/#newsletter" },
    ],
  },
  {
    title: "Work with me",
    links: [
      { label: "1:1 Mentorship", href: LINKEDIN, external: true },
      { label: "LinkedIn", href: LINKEDIN, external: true },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-neutral-100 bg-neutral-50/50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
      />
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 text-sm font-semibold text-white shadow-soft">
                D
              </span>
              <span className="text-[0.95rem] font-semibold tracking-tight text-neutral-900">
                Diogo Dinis
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-neutral-500">
              Helping ambitious founders build profitable ecommerce brands
              through practical systems and 1:1 mentorship.
            </p>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-300 hover:text-neutral-900"
            >
              <Linkedin className="h-[1.15rem] w-[1.15rem]" />
            </a>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-400">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-1 text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3 w-3 text-neutral-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-neutral-100 pt-8 sm:flex-row">
          <p className="text-sm text-neutral-400">
            © {year} DinisBrands. All rights reserved.
          </p>
          <p className="text-sm text-neutral-400">
            Build smarter. Build profitable brands.
          </p>
        </div>
      </Container>
    </footer>
  );
}
