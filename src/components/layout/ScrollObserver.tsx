"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // 🧲 Magnetic Button Logic
    const handleMagneticMove = (e: MouseEvent) => {
      const magnetics = document.querySelectorAll('.btn-magnetic');
      magnetics.forEach(btn => {
        const rect = (btn as HTMLElement).getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);
        
        // Only trigger if kursor is close (within 80px)
        if (distance < 80) {
          const x = (e.clientX - centerX) * 0.45;
          const y = (e.clientY - centerY) * 0.45;
          (btn as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
        } else {
          (btn as HTMLElement).style.transform = `translate(0, 0)`;
        }
      });
    };

    // ✨ Card Glow Logic
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
    window.addEventListener('mousemove', handleMagneticMove);

    // 🚀 Intersection Observer for Animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          
          // Handle Staggered Children
          if (entry.target.classList.contains('stagger-in')) {
            const children = entry.target.children;
            Array.from(children).forEach((child, index) => {
              (child as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
            });
          }
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    const timer = setTimeout(() => {
      document.querySelectorAll('.fade-up, .stagger-in').forEach(el => {
        observer.observe(el);
      });
    }, 150);

    document.body.style.overflow = '';

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleMagneticMove);
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
