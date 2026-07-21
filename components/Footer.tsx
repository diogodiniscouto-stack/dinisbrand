import Link from "next/link";
import { Container } from "./ui/Container";
import { Linkedin } from "./Icons";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Resources", href: "#resources" },
      { label: "Roadmaps", href: "#zero-to-brand" },
      { label: "Newsletter", href: "#newsletter" },
      { label: "Mentorship", href: "#mentorship" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Starter Kit", href: "#starter-kit" },
      { label: "Zero to Brand™", href: "#zero-to-brand" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-neutral-50/50">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="#top" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-900 text-sm font-semibold text-white">
                D
              </span>
              <span className="text-[0.95rem] font-semibold tracking-tight text-neutral-900">
                Diogo Dinis
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-neutral-500">
              Helping founders build profitable ecommerce brands.
            </p>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 shadow-soft transition-colors hover:border-neutral-300 hover:text-neutral-900"
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
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-400">
              Connect
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link
                  href="#newsletter"
                  className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                >
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-neutral-100 pt-8 sm:flex-row">
          <p className="text-sm text-neutral-400">© DinisBrands</p>
          <p className="text-sm text-neutral-400">
            Built for founders who ship.
          </p>
        </div>
      </Container>
    </footer>
  );
}
