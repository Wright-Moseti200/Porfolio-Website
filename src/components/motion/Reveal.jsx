import { motion as Motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';

const EASE = [0.32, 0.02, 0.15, 1];

/* ------------------------------------------------------------------
   Scroll reveal — subtle rise + de-blur, adapted from React Bits'
   Animated Content / Blur Text patterns.
------------------------------------------------------------------ */
export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 28,
  blur = true,
  amount = 0.16,
  once = true,
}) {
  return (
    <Motion.div
      className={className}
      initial={{ opacity: 0, y, filter: blur ? 'blur(9px)' : 'blur(0px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once, amount, margin: '0px 0px -40px 0px' }}
      transition={{ duration: 1.3, delay, ease: EASE }}
    >
      {children}
    </Motion.div>
  );
}

const staggerParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const staggerChild = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.25, ease: EASE },
  },
};

export function Stagger({
  children,
  className = '',
  amount = 0.15,
  once = true,
  delay = 0,
}) {
  return (
    <Motion.div
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ delayChildren: delay }}
    >
      {children}
    </Motion.div>
  );
}

export function StaggerItem({ children, className = '', ...props }) {
  return (
    <Motion.div variants={staggerChild} className={className} {...props}>
      {children}
    </Motion.div>
  );
}

/* ------------------------------------------------------------------
   Converge — every card glides in from the left and settles into its
   final spot. One consistent direction, slow weighted easing, and a
   small per-item delay.
------------------------------------------------------------------ */
export function Converge({
  children,
  className = '',
  x = -88,
  delay = 0,
  duration = 1.45,
  amount = 0.1,
  once = true,
}) {
  return (
    <Motion.div
      className={className}
      initial={{ opacity: 0, x, scale: 0.98 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once, amount, margin: '0px 0px -60px 0px' }}
      transition={{ duration, delay, ease: EASE }}
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
  once = true,
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
  once = true,
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
