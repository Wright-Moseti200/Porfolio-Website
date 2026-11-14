import { useRef } from 'react';
import { motion as Motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  FolderGit2,
  Github,
  Linkedin,
  Mail,
  Move,
} from 'lucide-react';
import profileImage from '../assets/opt/portrait.webp';
import projectShot from '../assets/opt/ecommerce.webp';
import { heroStack, profile, socialLinks } from '../lib/site';
import {
  Magnetic,
  SplitHeading,
  Stagger,
  StaggerItem,
  Tilt,
} from '../components/motion/Reveal';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  folder: FolderGit2,
  award: Award,
};

function QuoteCard({ constraintsRef }) {
  return (
    <Motion.div
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.16}
      dragMomentum={false}
      dragSnapToOrigin
      whileDrag={{ scale: 1.035, rotate: 0, cursor: 'grabbing' }}
      initial={{ rotate: -1.6 }}
      className="quote-card h-full min-h-[9.5rem]"
    >
      <span className="absolute right-2.5 top-2.5 z-20 flex items-center gap-1 rounded-full bg-white/30 px-2 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.12em] text-[#3a2c6e]">
        <Move size={10} />
        Drag
      </span>
      <div className="relative z-10 flex h-full flex-col justify-between gap-5 pr-8">
        <p className="max-w-full pr-12 text-[0.84rem] font-medium leading-snug text-[#2c2158]">
          The stack I happily build with <span className="font-semibold">&lt;3</span>
        </p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.13em] text-[#3d2f75]/75">
          {heroStack.map((item, index) => (
            <span key={item} className="flex items-center gap-3">
              {item}
              {index < heroStack.length - 1 && (
                <span className="h-1 w-1 rounded-full bg-[#3d2f75]/40" />
              )}
            </span>
          ))}
        </div>
      </div>
    </Motion.div>
  );
}

export default function Hero() {
  const cardsRef = useRef(null);

  return (
    <section className="hero section-pad" id="home">
      <div className="hero-grid">
        <div>
          <Motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.32, 0.02, 0.15, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--teal-soft)] px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.17em] text-[#11747d]"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#11747d] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#11747d]" />
            </span>
            Available for work
          </Motion.div>

          <SplitHeading
            className="hero-title"
            ariaLabel="Hi, I'm a fullstack developer"
            lines={[
              { text: 'Hi, I’m a', color: 'var(--ink)' },
              { text: 'fullstack', color: 'var(--muted)' },
              { text: 'developer', color: 'var(--muted)', trademark: true },
            ]}
          />

          <Motion.p
            className="hero-copy mt-7"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.25, delay: 0.7, ease: [0.32, 0.02, 0.15, 1] }}
          >
            I have 2+ years of experience building useful and mindful web products with
            startups and known brands — from elegant interfaces to robust APIs.
          </Motion.p>

          <Motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.25, delay: 0.84, ease: [0.32, 0.02, 0.15, 1] }}
          >
            <Magnetic>
              <a className="btn-dark" href="#contact">
                Contact me
                <ArrowUpRight size={15} />
              </a>
            </Magnetic>
            <a
              className="group inline-flex items-center gap-2 px-1 py-2 text-[0.82rem] font-medium text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
              href="#projects"
            >
              View selected work
              <ArrowDown
                size={14}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
          </Motion.div>
        </div>

        <div ref={cardsRef}>
          <Stagger className="hero-cards" amount={0.1}>
            <div className="hero-cards-top">
              <StaggerItem className="h-full">
                <Tilt className="h-full">
                  <div className="profile-card card h-full">
                    <div className="profile-shot">
                      <img
                        src={projectShot}
                        alt="Preview of the Ecommerce website project by Wright Gichana"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="profile-meta">
                      <div>
                        <p className="text-[0.86rem] font-semibold tracking-[-0.02em]">
                          {profile.name}
                        </p>
                        <p className="mt-0.5 text-[0.68rem] text-[var(--muted)]">
                          {profile.location}
                        </p>
                      </div>
                      <span className="tag !border-[#c9e9ec] !bg-[var(--teal-soft)] !text-[#11747d]">
                        <span className="mr-1.5 inline-block h-1 w-1 rounded-full bg-[#11747d]" />
                        Open
                      </span>
                    </div>
                    <div className="mt-auto flex items-center justify-between gap-2 border-t border-[var(--line)] pt-2.5">
                      <span className="tag">MERN expert</span>
                      <span className="text-[0.63rem] font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
                        2+ yrs
                      </span>
                    </div>
                  </div>
                </Tilt>
              </StaggerItem>

              <StaggerItem className="h-full">
                <Tilt className="h-full" max={6}>
                  <div className="hero-photo">
                    <img
                      src={profileImage}
                      alt="Portrait of Wright Gichana, full-stack web developer in Nairobi"
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                    />
                    <div className="absolute inset-x-2 bottom-2 z-10 flex items-center justify-between rounded-full bg-black/45 px-3 py-1.5 backdrop-blur-md">
                      <span className="text-[0.58rem] font-medium uppercase tracking-[0.13em] text-white/90">
                        Nairobi, KE
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7ce3b7]" />
                    </div>
                  </div>
                </Tilt>
              </StaggerItem>
            </div>

            <div className="hero-cards-bottom">
              <StaggerItem className="h-full">
                <QuoteCard constraintsRef={cardsRef} />
              </StaggerItem>

              <StaggerItem className="hero-socials">
                {socialLinks.map((social) => {
                  const Icon = iconMap[social.icon] || Mail;
                  return (
                    <Motion.a
                      key={social.label}
                      href={social.href}
                      target={social.external ? '_blank' : undefined}
                      rel={social.external ? 'noreferrer noopener' : undefined}
                      className="icon-btn"
                      aria-label={social.label}
                      whileHover={{ y: -3, rotate: -6 }}
                      whileTap={{ scale: 0.94 }}
                    >
                      <Icon size={16} strokeWidth={1.8} />
                    </Motion.a>
                  );
                })}
              </StaggerItem>
            </div>
          </Stagger>
        </div>
      </div>
    </section>
  );
}
