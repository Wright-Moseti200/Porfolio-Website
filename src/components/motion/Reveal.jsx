import { motion as Motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { createContext, useContext, useRef } from 'react';

// A long, weighted ease-out. Slow enough to read as "premium", quick enough
// that a card still settles before the next one starts moving.
const EASE = [0.22, 1, 0.36, 1];

/* ------------------------------------------------------------------
   Shared reveal engine.

   Every reveal now replays in BOTH scroll directions: elements fade and
   drift out when they leave the viewport, then animate back in when they
   re-enter. The hidden state is deliberately directional so exits read as
   the reverse of the entrance instead of a flat fade.
------------------------------------------------------------------ */
const directionOffset = {
  up: (d) => ({ x: 0, y: d }),
  down: (d) => ({ x: 0, y: -d }),
  left: (d) => ({ x: -d, y: 0 }),
  right: (d) => ({ x: d, y: 0 }),
  zoom: () => ({ x: 0, y: 0 }),
  fade: () => ({ x: 0, y: 0 }),
};

function revealVariants({
  direction = 'up',
  distance = 34,
  blur = 8,
  scale = 0.985,
  rotate = 0,
  duration = 1.05,
  delay = 0,
  exitDuration = 0.5,
} = {}) {
  const zoom = direction === 'zoom';
  const fade = direction === 'fade';
  const from = (directionOffset[direction] || directionOffset.up)(distance);
  const fromScale = zoom ? 0.9 : fade ? 1 : scale;
  const fromBlur = fade ? 0 : Math.max(zoom ? 10 : 0, blur);

  return {
    hidden: {
      opacity: 0,
      ...from,
      scale: fromScale,
      rotate,
      filter: `blur(${fromBlur}px)`,
      transition: { duration: exitDuration, ease: EASE },
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      filter: 'blur(0px)',
      transition: { duration, delay, ease: EASE },
    },
  };
}

const VIEWPORT = { once: false, amount: 0.18, margin: '0px 0px -8% 0px' };

export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 30,
  blur = 8,
  direction = 'up',
  distance,
  scale = 0.985,
  rotate = 0,
  amount = VIEWPORT.amount,
  once = VIEWPORT.once,
  margin = VIEWPORT.margin,
  duration = 1.05,
}) {
  const reduced = useReducedMotion();

  return (
    <Motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin }}
      variants={revealVariants({
        direction,
        distance: distance ?? (direction === 'up' || direction === 'down' ? y : 46),
        blur: reduced ? 0 : blur,
        scale: reduced ? 1 : scale,
        rotate,
        duration,
        delay,
      })}
    >
      {children}
    </Motion.div>
  );
}

/* ------------------------------------------------------------------
   Stagger — one observer, many cards.

   The first visible card waits `delay` seconds, then each following card
   inherits a fixed step (`stagger`). Cards can share a direction or rotate
   through a set of variants (`variants={['up', 'left', 'right', 'zoom']}`)
   so a grid feels composed instead of mechanical.
------------------------------------------------------------------ */
const StaggerContext = createContext({ variantNames: ['up'], reduced: false });

export function Stagger({
  children,
  className = '',
  amount = 0.15,
  once = false,
  delay = 0.12,
  stagger = 0.1,
  variants: variantNames = ['up'],
  margin = VIEWPORT.margin,
}) {
  const reduced = useReducedMotion();
  const parent = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduced ? 0 : stagger,
        delayChildren: reduced ? 0 : delay,
      },
    },
  };

  return (
    <StaggerContext.Provider value={{ variantNames, reduced }}>
      <Motion.div
        className={className}
        variants={parent}
        initial="hidden"
        whileInView="show"
        viewport={{ once, amount, margin }}
      >
        {children}
      </Motion.div>
    </StaggerContext.Provider>
  );
}

export function StaggerItem({
  children,
  className = '',
  index = 0,
  variant,
  distance,
  blur = 8,
  scale = 0.985,
  rotate,
  duration = 1.05,
  ...props
}) {
  const { variantNames, reduced } = useContext(StaggerContext);
  const name = variant || variantNames[index % variantNames.length];
  const tilt =
    rotate ?? (name === 'left' ? -1.1 : name === 'right' ? 1.1 : name === 'zoom' ? 0 : 0);
  const spread =
    distance ?? (name === 'left' || name === 'right' ? 52 : name === 'zoom' ? 0 : 34);

  return (
    <Motion.div
      className={className}
      variants={revealVariants({
        direction: name,
        distance: spread,
        blur: reduced ? 0 : blur,
        scale: reduced ? 1 : scale,
        rotate: reduced ? 0 : tilt,
        duration,
      })}
      {...props}
    >
      {children}
    </Motion.div>
  );
}

/* ------------------------------------------------------------------
   Converge — a single panel that glides in from the side and settles.
------------------------------------------------------------------ */
export function Converge({
  children,
  className = '',
  x = -88,
  delay = 0,
  duration = 1.2,
  amount = 0.12,
  once = false,
}) {
  const reduced = useReducedMotion();

  return (
    <Motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin: VIEWPORT.margin }}
      variants={revealVariants({
        direction: x < 0 ? 'left' : 'right',
        distance: Math.abs(x) || 0,
        blur: reduced ? 0 : 6,
        scale: reduced ? 1 : 0.98,
        duration,
        delay,
      })}
    >
      {children}
    </Motion.div>
  );
}

/* ------------------------------------------------------------------
   Masked line reveal for headings. The in-view observer sits on the
   mask itself (an inner, translated child would be clipped and never
   intersect), while each line animates via its own variant.
------------------------------------------------------------------ */
const lineParent = { hidden: {}, show: {} };

export function SplitHeading({
  lines,
  className = '',
  ariaLabel,
  as = 'h1',
  inView = false,
  once = false,
  delay = 0.14,
}) {
  const Tag = as;

  return (
    <Tag className={className} aria-label={ariaLabel || lines.map((l) => l.text).join(' ')}>
      {lines.map((line, index) => (
        <Motion.span
          key={line.text}
          aria-hidden="true"
          style={{
            display: 'block',
            overflow: 'hidden',
            paddingBottom: '0.08em',
            marginBottom: '-0.08em',
          }}
          initial="hidden"
          animate={inView ? undefined : 'show'}
          whileInView={inView ? 'show' : undefined}
          viewport={inView ? { once, amount: 0.2, margin: '0px 0px -30px 0px' } : undefined}
          variants={lineParent}
        >
          <Motion.span
            style={{ display: 'inline-block', color: line.color }}
            variants={{
              hidden: { y: '112%', opacity: 0, rotate: 1.2 },
              show: {
                y: '0%',
                opacity: 1,
                rotate: 0,
                transition: { duration: 1.3, delay: delay + index * 0.12, ease: EASE },
              },
            }}
          >
            {line.text}
            {line.trademark && (
              <sup
                style={{
                  fontSize: '0.26em',
                  verticalAlign: 'super',
                  letterSpacing: '0',
                  marginLeft: '0.06em',
                  fontWeight: 500,
                }}
              >
                ©
              </sup>
            )}
          </Motion.span>
        </Motion.span>
      ))}
    </Tag>
  );
}

/* ------------------------------------------------------------------
   Word-by-word paragraph reveal. Each word is masked and rises into
   place with a soft stagger — used for section intros and body copy.
   The parent observes the paragraph; words animate from its variant.
------------------------------------------------------------------ */
export function WordsReveal({
  text,
  as = 'p',
  className = '',
  delay = 0.08,
  stagger = 0.022,
  duration = 0.9,
  amount = 0.35,
  once = false,
}) {
  const Tag = as;
  const words = String(text).split(/\s+/).filter(Boolean);

  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <Motion.span
        aria-hidden="true"
        initial="hidden"
        whileInView="show"
        viewport={{ once, amount, margin: '0px 0px -30px 0px' }}
        variants={lineParent}
        style={{ display: 'inline' }}
      >
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              verticalAlign: 'bottom',
              paddingBottom: '0.14em',
              marginBottom: '-0.14em',
            }}
          >
            <Motion.span
              style={{ display: 'inline-block', willChange: 'transform, opacity' }}
              variants={{
                hidden: { y: '108%', opacity: 0 },
                show: {
                  y: '0%',
                  opacity: 1,
                  transition: { duration, delay: delay + index * stagger, ease: EASE },
                },
              }}
            >
              {word}
              {index < words.length - 1 ? '\u00A0' : ''}
            </Motion.span>
          </span>
        ))}
      </Motion.span>
    </Tag>
  );
}

/* ------------------------------------------------------------------
   Magnetic hover wrapper for CTAs.
------------------------------------------------------------------ */
export function Magnetic({ children, className = '', strength = 0.28 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 240, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 240, damping: 20, mass: 0.4 });

  const handleMove = (event) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * strength);
    y.set(offsetY * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY, display: 'inline-flex' }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {children}
    </Motion.div>
  );
}

/* ------------------------------------------------------------------
   3D pointer tilt, based on React Bits' TiltedCard behaviour.
------------------------------------------------------------------ */
export function Tilt({ children, className = '', max = 7 }) {
  const ref = useRef(null);
  const rotateX = useSpring(0, { stiffness: 180, damping: 18 });
  const rotateY = useSpring(0, { stiffness: 180, damping: 18 });
  const scale = useSpring(1, { stiffness: 200, damping: 22 });

  const handleMove = (event) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * max);
    rotateX.set(py * -max);
    scale.set(1.015);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  return (
    <Motion.div
      ref={ref}
      className={className}
      style={{ rotateX, rotateY, scale, transformPerspective: 900 }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {children}
    </Motion.div>
  );
}

/* ------------------------------------------------------------------
   Floating parallax wrapper (used for the hero card cluster).
------------------------------------------------------------------ */
export function Floaty({ children, className = '', distance = 12, duration = 7 }) {
  return (
    <Motion.div
      className={className}
      animate={{ y: [0, -distance, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </Motion.div>
  );
}

export { EASE };
