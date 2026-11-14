import { ArrowUpRight, MapPin } from 'lucide-react';
import { experience } from '../lib/site';
import { Converge, SplitHeading } from '../components/motion/Reveal';

export default function Experience() {
  return (
    <section className="section-y section-pad" id="experience">
      <div className="exp-grid">
        <Converge className="h-full">
          <div className="exp-card card h-full">
            <div>
              <span className="eyebrow">
                <span className="h-1 w-1 rounded-full bg-[var(--teal-deep)]" />
                Experience
              </span>
              <SplitHeading
                as="h2"
                inView
                className="display mt-4 text-[clamp(1.95rem,3.4vw,2.9rem)]"
                lines={[{ text: 'Wanna see' }, { text: 'my experience?' }]}
              />
            </div>
            <a className="btn-dark self-start" href="#contact">
              Book a call
              <ArrowUpRight size={14} />
            </a>
          </div>
        </Converge>

        {experience.map((item, index) => (
          <Converge
            key={`${item.company}-${item.role}`}
            delay={0.1 + index * 0.09}
            className="h-full"
          >
            <div className="exp-card card h-full">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="exp-mark">{item.mark}</span>
                  <span className="text-[0.8rem] font-medium text-[var(--muted)]">
                    {item.company}
                  </span>
                </div>
                <span className="text-right text-[0.66rem] font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
                  {item.period}
                </span>
              </div>

              <div>
                <h3 className="text-[1.1rem] font-semibold tracking-[-0.025em]">
                  {item.role}
                </h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-[var(--ink-soft)]">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-[0.72rem] font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
                <MapPin size={12} />
                {item.location}
              </div>
            </div>
          </Converge>
        ))}
      </div>
    </section>
  );
}
