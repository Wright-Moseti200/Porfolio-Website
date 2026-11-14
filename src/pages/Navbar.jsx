import { useEffect, useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navLinks, profile, socialLinks } from '../lib/site';

const EASE = [0.32, 0.02, 0.15, 1];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <Motion.div
      className="nav-wrap"
      initial={{ opacity: 0, y: -26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.18, ease: EASE }}
    >
      <nav className={`nav ${scrolled || open ? 'nav--scrolled' : ''}`} aria-label="Primary">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand-mark">W</span>
          <span className="brand-name">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} className="nav-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            className="btn-dark hidden !px-5 !py-2.5 sm:inline-flex"
            href="#contact"
            aria-label="Book a call with Wright"
          >
            Book a call
            <ArrowUpRight size={14} strokeWidth={2} />
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[rgba(23,23,22,0.08)] bg-white text-[var(--ink)] md:hidden"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode="wait" initial={false}>
              <Motion.span
                key={open ? 'close' : 'menu'}
                initial={{ rotate: -70, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 70, opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="grid place-items-center"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </Motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {open && (
          <Motion.div
            initial={{ height: 0, opacity: 0, y: -6 }}
            animate={{ height: 'auto', opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -6 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="overflow-hidden md:hidden"
          >
            <div className="mt-2 rounded-[18px] border border-[rgba(23,23,22,0.06)] bg-white p-3 shadow-[0_24px_50px_-40px_rgba(10,10,9,0.5)]">
              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <Motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + index * 0.07, duration: 0.5, ease: EASE }}
                    className="flex items-center justify-between border-b border-[var(--line)] px-2 py-3 text-[0.95rem] last:border-none"
                  >
                    {link.label}
                    <ArrowUpRight size={15} className="text-[var(--muted)]" />
                  </Motion.a>
                ))}
              </div>

              <div className="mt-3 flex items-center justify-between gap-3 px-2 pb-1">
                <div className="flex gap-2">
                  {socialLinks.slice(0, 2).map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.external ? '_blank' : undefined}
                      rel={social.external ? 'noreferrer noopener' : undefined}
                      className="tag !normal-case !tracking-normal"
                      onClick={() => setOpen(false)}
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-dark !px-4 !py-2.5 text-xs"
                >
                  Book a call
                </a>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.div>
  );
}
