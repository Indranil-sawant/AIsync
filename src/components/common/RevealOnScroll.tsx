import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in seconds, e.g. 0.1, 0.2
  yOffset?: number; // in pixels, default 20
  as?: React.ElementType;
  onClick?: () => void;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className = '',
  delay = 0,
  yOffset = 20,
  as: Component = 'div',
  onClick,
}) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. Immediately reveal if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    // 2. Fallback safety timer: guarantees element is never permanently invisible
    const safetyTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    // 3. Native IntersectionObserver with generous rootMargin for smooth entrance before user reaches element
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (ref.current) {
              observer.unobserve(ref.current);
            }
            clearTimeout(safetyTimer);
          }
        },
        {
          rootMargin: '50px 0px 50px 0px',
          threshold: 0.05,
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        clearTimeout(safetyTimer);
        observer.disconnect();
      };
    } else {
      // Fallback for environments without IntersectionObserver
      setIsVisible(true);
      clearTimeout(safetyTimer);
    }
  }, []);

  const transitionDelay = delay > 0 ? `${delay}s` : '0s';

  const transformStyle = isVisible
    ? 'translate3d(0, 0, 0)'
    : `translate3d(0, ${yOffset}px, 0)`;

  return (
    <Component
      ref={ref as any}
      onClick={onClick}
      style={{
        transitionDuration: '500ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionProperty: 'opacity, transform',
        transitionDelay,
        opacity: isVisible ? 1 : 0,
        transform: transformStyle,
      }}
      className={className}
    >
      {children}
    </Component>
  );
};
