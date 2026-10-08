import { useEffect } from 'react';

/**
 * Custom hook to observe elements with reveal classes and trigger
 * smooth entry animations as they enter the viewport.
 * Uses MutationObserver so dynamically mounted elements are handled safely.
 */
export default function useScrollReveal() {
  useEffect(() => {
    // Check if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger')
        .forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observerCallback = (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.05,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observeAll = () => {
      const elementsToReveal = document.querySelectorAll(
        '.reveal:not(.is-revealed), .reveal-up:not(.is-revealed), .reveal-left:not(.is-revealed), .reveal-right:not(.is-revealed), .reveal-scale:not(.is-revealed)'
      );
      elementsToReveal.forEach(el => {
        // If element is already in viewport or parent is visible, reveal immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-revealed');
        } else {
          observer.observe(el);
        }
      });
    };

    observeAll();

    // Listen for DOM changes (e.g. tabs or dynamic renders)
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
