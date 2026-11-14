import { useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function NotFound() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Page not found — Wright Gichana';

    let robots = document.querySelector('meta[name="robots"]');
    const previousRobots = robots?.getAttribute('content');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'noindex, follow');

    return () => {
      document.title = previousTitle;
      if (previousRobots) robots.setAttribute('content', previousRobots);
      else robots.remove();
    };
  }, []);

  return (
    <div className="app">
      <div className="site-shell">
        <main className="grid min-h-[calc(100svh-1.75rem)] place-items-center px-4 py-12">
          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.32, 0.02, 0.15, 1] }}
            className="card mx-auto w-full max-w-2xl p-[clamp(1.6rem,5vw,3.4rem)] text-center"
          >
            <span className="eyebrow justify-center">
              <span className="h-1 w-1 rounded-full bg-[var(--teal-deep)]" />
              Error 404
            </span>

            <p
              aria-hidden="true"
              className="display mt-4 text-[clamp(4.5rem,18vw,9rem)] leading-none tracking-[-0.06em]"
            >
              4<span className="text-[var(--teal-deep)]">0</span>4
            </p>

            <h1 className="mt-2 text-[clamp(1.35rem,3vw,2rem)] font-semibold tracking-[-0.04em]">
              This page went off the grid
            </h1>

            <p className="mx-auto mt-3 max-w-md text-[0.92rem] leading-relaxed text-[var(--ink-soft)]">
              The link may be broken, or the page may have moved. Let’s get you back to
              something that actually exists.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a className="btn-dark" href="/">
                <ArrowLeft size={15} />
                Back to home
              </a>
              <a className="btn-light" href="/#projects">
                View my projects
                <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="mt-8 border-t border-[var(--line)] pt-5">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.17em] text-[var(--muted)]">
                Or jump straight to
              </p>
              <nav
                aria-label="Quick links"
                className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
              >
                {quickLinks.map((link) => (
                  <a
                    key={link.href}
                    href={`/${link.href}`}
                    className="text-[0.8rem] font-medium text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </Motion.div>
        </main>
      </div>
    </div>
  );
}
