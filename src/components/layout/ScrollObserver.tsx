"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    let rafId: number | null = null;
    let scrollRafId: number | null = null;
    let lastMouseX = 0;
    let lastMouseY = 0;

    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Parallax — write scroll-y to a CSS custom property; let CSS apply transforms.
    // rAF-throttled, no DOM queries inside the hot path.
    const handleScroll = () => {
      if (scrollRafId !== null) return;
      scrollRafId = requestAnimationFrame(() => {
        scrollRafId = null;
        document.documentElement.style.setProperty(
          '--scroll-y',
          `${window.scrollY}px`
        );
      });
    };
    if (!prefersReducedMotion) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }

    const handleMouseMove = (e: MouseEvent) => {
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;

      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;

        // Card glow — only update cards near the cursor
        const el = document.elementFromPoint(lastMouseX, lastMouseY);
        const card = el?.closest('.glass-card, [class*="-card"]') as HTMLElement | null;
        if (card) {
          const rect = card.getBoundingClientRect();
          const x = ((lastMouseX - rect.left) / rect.width) * 100;
          const y = ((lastMouseY - rect.top) / rect.height) * 100;
          card.style.setProperty('--mouse-x', `${x}%`);
          card.style.setProperty('--mouse-y', `${y}%`);
        }

        // Magnetic buttons
        const magnetics = document.querySelectorAll('.btn-magnetic');
        magnetics.forEach(btn => {
          const rect = (btn as HTMLElement).getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const distance = Math.hypot(lastMouseX - centerX, lastMouseY - centerY);

          if (distance < 80) {
            const x = (lastMouseX - centerX) * 0.35;
            const y = (lastMouseY - centerY) * 0.35;
            (btn as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
          } else {
            (btn as HTMLElement).style.transform = '';
          }
        });
      });
    };

    // Only add mousemove on non-touch devices
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (!isTouchDevice) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');

          if (entry.target.classList.contains('stagger-in')) {
            const children = entry.target.children;
            Array.from(children).forEach((child, index) => {
              (child as HTMLElement).style.transitionDelay = `${index * 0.06}s`;
            });
          }

          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

    const timer = setTimeout(() => {
      document.querySelectorAll('.fade-up, .stagger-in').forEach(el => {
        observer.observe(el);
      });
    }, 100);

    document.body.style.overflow = '';

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
      if (scrollRafId) cancelAnimationFrame(scrollRafId);
      observer.disconnect();
      clearTimeout(timer);
      document.documentElement.style.removeProperty('--scroll-y');
    };
  }, [pathname]);

  return null;
}
