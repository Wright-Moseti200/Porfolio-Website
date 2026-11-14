import { motion as Motion, useScroll, useSpring } from 'framer-motion';

/**
 * Hairline scroll indicator — a small, premium touch that shows how far
 * through the page the visitor is. Driven by the same scroll as Lenis.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.35,
    restDelta: 0.001,
  });

  return <Motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}
