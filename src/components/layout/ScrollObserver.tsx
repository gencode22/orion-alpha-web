"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.glass-card, [class*="-card"]');
      cards.forEach(card => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}%`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}%`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    // Give React a tick to render the DOM
    const timer = setTimeout(() => {
      document.querySelectorAll('.fade-up').forEach(el => {
        observer.observe(el);
      });
    }, 150);

    // Safety reset for body overflow on navigation
    document.body.style.overflow = '';

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
