"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // Scroll reveal
    const revealEls = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    revealEls.forEach((el) => observer.observe(el));

    // Nav scroll effect
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (!nav) return;
      if (window.scrollY > 60) {
        nav.style.borderBottomColor = "#1e1e1e";
      } else {
        nav.style.borderBottomColor = "var(--border)";
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
