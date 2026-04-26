"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    // Give React a tick to render the DOM
    setTimeout(() => {
      document.querySelectorAll('.fade-up').forEach(el => {
        observer.observe(el);
      });
    }, 100);

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
