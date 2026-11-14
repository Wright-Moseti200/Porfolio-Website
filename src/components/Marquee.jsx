import { Star } from 'lucide-react';

/**
 * Infinite CSS marquee, inspired by React Bits' Logo Loop.
 * The list is duplicated and translated by -50% for a seamless loop,
 * then paused on hover.
 */
export default function Marquee({
  items = [],
  duration = 30,
  className = '',
  itemClassName = '',
  separator = true,
}) {
  const group = (hidden) => (
    <div className="marquee__group" aria-hidden={hidden ? 'true' : undefined}>
      {items.map((item, index) => (
        <span
          key={`${hidden ? 'b' : 'a'}-${item}-${index}`}
          className={`inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap text-[0.7rem] font-medium uppercase tracking-[0.16em] ${itemClassName}`}
        >
          {separator && <Star size={9} className="opacity-60" strokeWidth={1.5} />}
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee ${className}`} role="region" aria-label="Tools and technologies">
      <div className="marquee__track" style={{ animationDuration: `${duration}s` }}>
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}
