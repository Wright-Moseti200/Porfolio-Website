import { ArrowUpRight } from 'lucide-react';
import { projects, profile } from '../lib/site';
import { Reveal, SplitHeading, WordsReveal } from '../components/motion/Reveal';

function WorkCard({ project, className, mediaClass }) {
  const href = project.live || project.github;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={`work-card card group ${className}`}
      aria-label={`${project.title} — open project`}
    >
      <div className={`work-media ${mediaClass}`}>
        <img
          src={project.image}
          alt={project.alt || `${project.title} preview`}
          loading="lazy"
          decoding="async"
        />
        <span className="work-open">
          <ArrowUpRight size={16} />
        </span>
      </div>

      <div className="px-1.5 pb-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="work-title text-[1.04rem] font-semibold leading-tight tracking-[-0.025em]">
            {project.title}
          </h3>
          <span className="shrink-0 text-[0.7rem] font-medium text-[var(--muted)]">
            {project.year}
          </span>
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section className="section-y section-pad" id="projects">
      <div className="mb-9 flex flex-col gap-5 sm:mb-11 sm:flex-row sm:items-end sm:justify-between">
        <Reveal>
          <span className="eyebrow">
            <span className="h-1 w-1 rounded-full bg-[var(--teal-deep)]" />
            Portfolio
          </span>
          <SplitHeading
            as="h2"
            inView
            className="display mt-4 text-[clamp(2rem,4vw,3.35rem)]"
            lines={[{ text: 'Selected' }, { text: 'work', color: 'var(--muted)' }]}
          />
        </Reveal>
        <Reveal delay={0.08} className="sm:max-w-[19rem]">
          <WordsReveal
            className="text-[0.94rem] leading-relaxed text-[var(--ink-soft)]"
            text="A few products I've designed and built end-to-end — from booking platforms to e-commerce and AI tools."
            stagger={0.016}
            delay={0.06}
          />
          <a
            className="btn-light mt-4"
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            All projects
            <ArrowUpRight size={14} />
          </a>
        </Reveal>
      </div>

      <div className="work-grid">
        {projects.map((project, index) => {
          const layout =
            index === 0
              ? { className: 'work-card--featured', media: 'work-media--featured' }
              : index === 1
                ? { className: 'work-card--side', media: 'work-media--featured' }
                : { className: 'work-card--third', media: 'work-media--third' };
          const direction = ['up', 'right', 'left', 'up', 'right', 'left', 'up'][index % 7];
          const columnDelay = (index % 3) * 0.08;

          return (
            <Reveal
              key={project.title}
              className={`${layout.className} h-full`}
              direction={direction}
              delay={0.06 + columnDelay}
              distance={direction === 'up' ? 40 : 56}
            >
              <WorkCard project={project} className="h-full" mediaClass={layout.media} />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
