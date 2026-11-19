import { motion as Motion } from 'framer-motion';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { footerSocials, profile } from '../lib/site';
import { Converge, Reveal, SplitHeading } from '../components/motion/Reveal';

const rotations = [-4, 10, -9, 6, -7, 8];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-pad pb-4 pt-0">
      <div className="footer-grid">
        <Converge delay={0.08} className="h-full">
          <div className="connect-card card h-full">
            <div>
              <span className="eyebrow">
                <span className="h-1 w-1 rounded-full bg-[var(--teal-deep)]" />
                Say hello
              </span>
              <SplitHeading
                as="h2"
                inView
                className="display mt-4 text-[clamp(2.3rem,4.4vw,3.7rem)]"
                lines={[{ text: "Let's" }, { text: 'connect' }, { text: 'and chat' }]}
              />
            </div>

            <div>
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 text-[0.8rem] font-semibold uppercase tracking-[0.13em]"
              >
                Email me
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--ink)] text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={12} />
                </span>
              </a>
              <p className="mt-3 text-[0.8rem] leading-relaxed text-[var(--muted)]">
                <a
                  href={`mailto:${profile.email}`}
                  className="block break-all transition-colors hover:text-[var(--ink)]"
                >
                  {profile.email}
                </a>
                <a
                  href={`tel:${profile.phoneHref}`}
                  className="block transition-colors hover:text-[var(--ink)]"
                >
                  {profile.phoneDisplay}
                </a>
              </p>
              <p className="mt-2 text-[0.8rem] leading-relaxed text-[var(--muted)]">
                Open to full-time roles and freelance projects.
              </p>
            </div>
          </div>
        </Converge>

        <Converge delay={0.24} x={88} className="h-full">
          <div className="social-panel h-full">
            <span className="pointer-events-none absolute -left-14 -top-16 h-48 w-48 rounded-full border border-white/20" />
            <span className="pointer-events-none absolute -bottom-20 -right-10 h-52 w-52 rounded-full border border-white/15" />

            <div className="social-cloud">
              {footerSocials.map((social, index) => (
                <Motion.span
                  key={social.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: [0.32, 0.02, 0.15, 1],
                  }}
                  style={{ display: 'inline-flex' }}
                >
                  <a
                    href={social.href}
                    target={social.external ? '_blank' : undefined}
                    rel={social.external ? 'noreferrer noopener' : undefined}
                    className="social-pill"
                    style={{ transform: `rotate(${rotations[index]}deg)` }}
                  >
                    {social.label}
                    {social.sticker && <span className="ml-1.5">{social.sticker}</span>}
                  </a>
                </Motion.span>
              ))}
            </div>
          </div>
        </Converge>
      </div>

      <Reveal className="mt-3" animation="fade-up-left" amount={0.2}>
        <div className="flex flex-col items-center justify-between gap-4 rounded-[18px] border border-[rgba(23,23,22,0.05)] bg-white/60 px-5 py-4 sm:flex-row">
          <a href="#top" className="brand">
            <span className="brand-mark !h-7 !w-7 !text-[0.72rem]">W</span>
            <span className="brand-name">{profile.name}</span>
          </a>

          <p className="text-[0.72rem] font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
            © {year} — All rights reserved
          </p>

          <div className="flex items-center gap-2">
            <a className="btn-light !px-4 !py-2 !text-[0.8rem]" href="#top">
              Back to top
              <ArrowUp size={13} />
            </a>
            <a className="btn-dark !px-4 !py-2 !text-[0.8rem]" href="#contact">
              Hire me
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
