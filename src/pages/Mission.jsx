import { Code2, Layers3, PenTool, Server, ArrowUpRight } from 'lucide-react';
import { skills, services } from '../lib/site';
import Marquee from '../components/Marquee';
import { Converge, Reveal, SplitHeading, WordsReveal } from '../components/motion/Reveal';

const icons = {
  code: Code2,
  server: Server,
  pen: PenTool,
  layers: Layers3,
};

export default function Mission() {
  return (
    <section className="section-pad pb-0" id="about">
      <Reveal amount={0.2}>
        <div className="mission-panel">
          <div className="relative px-[clamp(1.4rem,4vw,3.4rem)] pb-[clamp(2rem,4vw,3.2rem)] pt-[clamp(1.8rem,4vw,3.2rem)]">
            <span className="eyebrow !text-white/65">
              <span className="h-1 w-1 rounded-full bg-white/70" />
              My mission
            </span>
            <WordsReveal
              as="p"
              className="mt-5 max-w-[58rem] text-[clamp(1.45rem,2.7vw,2.3rem)] font-medium leading-[1.25] tracking-[-0.035em] text-white"
              text="My mission is to assist startups and enterprises in creating an emotional bond between their products and satisfied, engaged customers."
              stagger={0.02}
              delay={0.1}
            />
          </div>
          <div className="relative border-t border-white/20 px-[clamp(1.4rem,4vw,3.4rem)] py-5">
            <Marquee items={skills} itemClassName="!text-white/70" duration={38} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Services() {
  return (
    <section className="section-y section-pad" id="services">
      <div className="services-grid">
        <div>
          <Reveal>
            <span className="eyebrow">
              <span className="h-1 w-1 rounded-full bg-[var(--teal-deep)]" />
              Services
            </span>
            <SplitHeading
              as="h2"
              inView
              className="display mt-4 text-[clamp(2rem,4vw,3.35rem)]"
              lines={[
                { text: 'How can I' },
                { text: 'assist you?', color: 'var(--muted)' },
              ]}
            />
          </Reveal>
          <Reveal delay={0.08}>
            <WordsReveal
              className="mt-5 max-w-[19rem] text-[0.95rem] leading-relaxed text-[var(--ink-soft)]"
              text="From the first sketch to production deploy, I cover the whole product — design, build and ship."
              stagger={0.016}
              delay={0.06}
            />
          </Reveal>
          <Reveal delay={0.14}>
            <a className="btn-light mt-7" href="#contact">
              Start a project
              <ArrowUpRight size={14} />
            </a>
          </Reveal>
        </div>

        <div className="service-cards">
          {services.map((service, index) => {
            const Icon = icons[service.icon] || Code2;
            return (
              <Converge
                key={service.title}
                delay={0.1 + index * 0.09}
                className="h-full"
              >
                <div className="service-card card h-full">
                  <div className="flex items-start justify-between">
                    <span className="service-icon">
                      <Icon size={18} strokeWidth={1.8} />
                    </span>
                    <span className="text-[0.7rem] font-semibold tracking-[0.15em] text-[var(--muted)]">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-[1.08rem] font-semibold tracking-[-0.025em]">
                        {service.title}
                      </h3>
                      <ArrowUpRight
                        size={16}
                        className="service-arrow text-[var(--ink-soft)]"
                      />
                    </div>
                    <p className="mt-2.5 text-[0.9rem] leading-relaxed text-[var(--ink-soft)]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Converge>
            );
          })}
        </div>
      </div>
    </section>
  );
}
