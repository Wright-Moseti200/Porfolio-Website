import { motion as Motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { createContext, useContext, useRef } from 'react';

// A long, weighted ease-out. Slow enough to read as "premium", quick enough
// that a card still settles before the next one starts moving.
const EASE = [0.22, 1, 0.36, 1];

/* ------------------------------------------------------------------
   Shared reveal engine — the complete AOS animation catalog, powered by
   Framer Motion so every reveal also replays on the way back up.

   Supported animations:
     fade, fade-up, fade-down, fade-right, fade-left,
     fade-up-right, fade-up-left, fade-down-right, fade-down-left,
     zoom-in(-up|-down|-left|-right), zoom-out(-up|-down|-left|-right),
     flip-left, flip-right, flip-up, flip-down,
     slide-up, slide-down, slide-left, slide-right,
     and fade-zoom-in.
------------------------------------------------------------------ */
const AOS_ANIMATIONS = {
  fade: { from: () => ({}), blur: 8 },
  'fade-zoom-in': { from: () => ({ scale: 0.9 }), blur: 8 },
  'fade-up': { from: (d) => ({ y: d }) },
  'fade-down': { from: (d) => ({ y: -d }) },
  'fade-right': { from: (d) => ({ x: -d }) },
  'fade-left': { from: (d) => ({ x: d }) },
  'fade-up-right': { from: (d) => ({ x: -d, y: d }) },
  'fade-up-left': { from: (d) => ({ x: d, y: d }) },
  'fade-down-right': { from: (d) => ({ x: -d, y: -d }) },
  'fade-down-left': { from: (d) => ({ x: d, y: -d }) },
  'zoom-in': { from: () => ({ scale: 0.6 }), blur: 4 },
  'zoom-in-up': { from: (d) => ({ y: d, scale: 0.6 }), blur: 4 },
  'zoom-in-down': { from: (d) => ({ y: -d, scale: 0.6 }), blur: 4 },
  'zoom-in-right': { from: (d) => ({ x: -d, scale: 0.6 }), blur: 4 },
  'zoom-in-left': { from: (d) => ({ x: d, scale: 0.6 }), blur: 4 },
  'zoom-out': { from: () => ({ scale: 1.2 }), blur: 4 },
  'zoom-out-up': { from: (d) => ({ y: d, scale: 1.2 }), blur: 4 },
  'zoom-out-down': { from: (d) => ({ y: -d, scale: 1.2 }), blur: 4 },
  'zoom-out-right': { from: (d) => ({ x: -d, scale: 1.2 }), blur: 4 },
  'zoom-out-left': { from: (d) => ({ x: d, scale: 1.2 }), blur: 4 },
  'flip-left': { from: () => ({ rotateY: -100 }), blur: 0, perspective: 2200 },
  'flip-right': { from: () => ({ rotateY: 100 }), blur: 0, perspective: 2200 },
  'flip-up': { from: () => ({ rotateX: -100 }), blur: 0, perspective: 2200 },
  'flip-down': { from: () => ({ rotateX: 100 }), blur: 0, perspective: 2200 },
  'slide-up': { from: () => ({ y: '100%' }), blur: 0, scale: 1 },
  'slide-down': { from: () => ({ y: '-100%' }), blur: 0, scale: 1 },
  'slide-right': { from: () => ({ x: '-100%' }), blur: 0, scale: 1 },
  'slide-left': { from: () => ({ x: '100%' }), blur: 0, scale: 1 },
};

// Old names used by earlier versions of the site.
const LEGACY_NAMES = {
  up: 'fade-up',
  down: 'fade-down',
  left: 'fade-right',
  right: 'fade-left',
  zoom: 'zoom-in',
};

const EASINGS = {
  linear: 'linear',
  ease: [0.25, 0.1, 0.25, 1],
  'ease-in': [0.42, 0, 1, 1],
  'ease-out': [0, 0, 0.58, 1],
  'ease-in-out': [0.42, 0, 0.58, 1],
  'ease-in-back': [0.6, -0.28, 0.735, 0.045],
  'ease-out-back': [0.175, 0.885, 0.32, 1.275],
  'ease-in-out-back': [0.68, -0.55, 0.265, 1.55],
  'ease-in-sine': [0.47, 0, 0.745, 0.715],
  'ease-out-sine': [0.39, 0.575, 0.565, 1],
  'ease-in-out-sine': [0.445, 0.05, 0.55, 0.95],
  'ease-in-quad': [0.55, 0.085, 0.68, 0.53],
  'ease-out-quad': [0.25, 0.46, 0.45, 0.94],
  'ease-in-out-quad': [0.455, 0.03, 0.515, 0.955],
  'ease-out-cubic': [0.215, 0.61, 0.355, 1],
  'ease-in-cubic': [0.55, 0.055, 0.675, 0.19],
  'ease-in-out-cubic': [0.645, 0.045, 0.355, 1],
  'ease-out-quart': [0.165, 0.84, 0.44, 1],
  'ease-in-quart': [0.895, 0.03, 0.685, 0.22],
  'ease-in-out-quart': [0.77, 0, 0.175, 1],
};

function resolveEase(easing) {
  if (!easing) return EASE;
  return EASINGS[easing] || EASE;
}

function resolveAnimation(animation) {
  if (AOS_ANIMATIONS[animation]) return animation;
  return LEGACY_NAMES[animation] || 'fade-up';
}

function revealVariants({
  animation = 'fade-up',
  distance = 46,
  blur = 8,
  scale = 0.985,
  rotate = 0,
  duration = 1.05,
  delay = 0,
  exitDuration = 0.55,
  easing,
  reduced = false,
} = {}) {
  const ease = resolveEase(easing);

  // Reduced motion keeps the fade (which helps with orientation) but drops
  // every transform, blur and flip from the catalog.
  if (reduced) {
    return {
      hidden: { opacity: 0, transition: { duration: exitDuration, ease } },
      show: { opacity: 1, transition: { duration, delay, ease } },
    };
  }

  const name = resolveAnimation(animation);
  const preset = AOS_ANIMATIONS[name];
  const from = preset.from(distance);
  const fromScale = from.scale ?? preset.scale ?? scale;
  const fromBlur = preset.blur ?? blur;
  const flip = name.startsWith('flip');

  return {
    hidden: {
      opacity: 0,
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scale: fromScale,
      rotate,
      ...from,
      filter: `blur(${fromBlur}px)`,
      ...(preset.perspective
        ? {
            transformPerspective: preset.perspective,
            backfaceVisibility: 'hidden',
          }
        : {}),
      ...(flip ? { transformStyle: 'preserve-3d' } : {}),
      transition: { duration: exitDuration, ease },
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      rotate: 0,
      filter: 'blur(0px)',
      ...(preset.perspective ? { transformPerspective: preset.perspective } : {}),
      transition: { duration, delay, ease },
    },
  };
}

const VIEWPORT = { once: false, amount: 0.18, margin: '0px 0px -8% 0px' };

export function Reveal({
  children,
  className = '',
  delay = 0,
  animation,
  direction,
  easing,
  distance = 46,
  blur = 8,
  scale = 0.985,
  rotate = 0,
  amount = VIEWPORT.amount,
  once = VIEWPORT.once,
  margin,
  offset,
  duration = 1.05,
}) {
  const reduced = useReducedMotion();
  const name = animation || direction || 'fade-up';
  const viewportMargin =
    margin ?? (offset !== undefined ? `0px 0px -${offset}px 0px` : VIEWPORT.margin);

  return (
    <Motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin: viewportMargin }}
      variants={revealVariants({
        animation: name,
        distance,
        blur,
        scale,
        rotate,
        duration,
        delay,
        easing,
        reduced,
      })}
    >
      {children}
    </Motion.div>
  );
}

/* ------------------------------------------------------------------
   Stagger — one observer, many cards.

   The first visible card waits `delay` seconds, then each following card
   inherits a fixed step (`stagger`). Cards can share one animation or rotate
   through the catalog, e.g.
   variants={['fade-up', 'flip-left', 'zoom-in', 'fade-down-left']}.
------------------------------------------------------------------ */
const StaggerContext = createContext({ variantNames: ['fade-up'], reduced: false });

export function Stagger({
  children,
  className = '',
  amount = 0.15,
  once = false,
  delay = 0.12,
  stagger = 0.1,
  variants: variantNames = ['fade-up'],
  margin = VIEWPORT.margin,
  offset,
}) {
  const reduced = useReducedMotion();
  const viewportMargin =
    margin ?? (offset !== undefined ? `0px 0px -${offset}px 0px` : VIEWPORT.margin);
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
        viewport={{ once, amount, margin: viewportMargin }}
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
  animation,
  distance = 46,
  blur = 8,
  scale = 0.985,
  rotate = 0,
  duration = 1.05,
  easing,
  ...props
}) {
  const { variantNames, reduced } = useContext(StaggerContext);
  const name = animation || variant || variantNames[index % variantNames.length];

  return (
    <Motion.div
      className={className}
      variants={revealVariants({
        animation: name,
        distance,
        blur,
        scale,
        rotate,
        duration,
        easing,
        reduced,
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
        animation: x < 0 ? 'fade-right' : 'fade-left',
        distance: Math.abs(x) || 0,
        blur: 6,
        scale: 0.98,
        duration,
        delay,
        reduced,
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
