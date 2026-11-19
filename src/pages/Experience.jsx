import { ArrowUpRight, MapPin } from 'lucide-react';
import { experience } from '../lib/site';
import { Reveal, SplitHeading } from '../components/motion/Reveal';

export default function Experience() {
  return (
    <section className="section-y section-pad" id="experience">
      <div className="exp-grid">
        <Reveal className="h-full" animation="fade-right" distance={64} delay={0.06}>
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
        </Reveal>

        {experience.map((item, index) => (
          <Reveal
            key={`${item.company}-${item.role}`}
            className="h-full"
            animation={['flip-up', 'fade-up', 'zoom-in-left', 'fade-down'][index % 4]}
            delay={0.06 + index * 0.1}
            duration={index % 4 === 0 ? 1.35 : 1.05}
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
          </Reveal>
        ))}
      </div>
    </section>
  );
}
