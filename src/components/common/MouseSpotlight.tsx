import React, { useEffect, useRef } from 'react';

export const MouseSpotlight: React.FC = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Check if user prefers reduced motion or is on touch device
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (prefersReducedMotion || isTouchDevice) return;

    let mouseX = -1000;
    let mouseY = -1000;
    let isVisible = false;

    const updateSpotlight = () => {
      if (spotlightRef.current) {
        if (!isVisible) {
          spotlightRef.current.style.opacity = '1';
          isVisible = true;
        }
        spotlightRef.current.style.background = `radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(79, 70, 229, 0.07), transparent 80%)`;
      }
      rafId.current = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(updateSpotlight);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed inset-0 z-30 opacity-0 transition-opacity duration-300"
      aria-hidden="true"
    />
  );
};
