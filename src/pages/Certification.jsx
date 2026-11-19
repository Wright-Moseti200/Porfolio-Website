import { ArrowUpRight } from 'lucide-react';
import { certifications } from '../lib/site';
import { Reveal, SplitHeading, WordsReveal } from '../components/motion/Reveal';

export default function Certification() {
  return (
    <section className="section-y section-pad" id="certifications">
      <div className="mb-9 flex flex-col gap-5 sm:mb-11 sm:flex-row sm:items-end sm:justify-between">
        <Reveal animation="fade-down">
          <span className="eyebrow">
            <span className="h-1 w-1 rounded-full bg-[var(--teal-deep)]" />
            Credentials
          </span>
          <SplitHeading
            as="h2"
            inView
            className="display mt-4 text-[clamp(2rem,4vw,3.35rem)]"
            lines={[
              { text: 'Certified &' },
              { text: 'always learning', color: 'var(--muted)' },
            ]}
          />
        </Reveal>
        <Reveal delay={0.08} animation="fade-left" className="sm:max-w-[19rem]">
          <WordsReveal
            className="text-[0.94rem] leading-relaxed text-[var(--ink-soft)]"
            text="Verified programs from Google, IBM and Mimo covering full-stack engineering, AI and technical support."
            stagger={0.016}
            delay={0.06}
          />
        </Reveal>
      </div>

      <div className="cert-grid">
        {certifications.map((cert, index) => {
          const animation = ['flip-right', 'zoom-in-left', 'fade-up-left', 'zoom-out'][
            index % 4
          ];

          return (
            <Reveal
              key={cert.title}
              className="h-full"
              animation={animation}
              delay={0.06 + index * 0.1}
              duration={animation.startsWith('flip') ? 1.35 : 1.05}
            >
            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer noopener"
              className="cert-card card group h-full"
              aria-label={`${cert.title} — verify credential`}
            >
              <div className="cert-media">
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate from ${cert.issuer}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex flex-1 flex-col px-1.5 pb-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="tag">{cert.issuer}</span>
                  <span className="text-[0.68rem] font-medium text-[var(--muted)]">
                    {cert.date}
                  </span>
                </div>
                <h3 className="mt-2.5 text-[1rem] font-semibold leading-snug tracking-[-0.02em]">
                  {cert.title}
                </h3>
                <p className="mt-1.5 line-clamp-3 text-[0.82rem] leading-relaxed text-[var(--ink-soft)]">
                  {cert.description}
                </p>
                <span className="verify-link mt-auto flex items-center gap-1 pt-3 text-[0.73rem] font-semibold uppercase tracking-[0.08em] text-[var(--ink-soft)] transition-colors group-hover:text-[var(--ink)]">
                  Verify credential
                  <ArrowUpRight size={13} />
                </span>
              </div>
            </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
