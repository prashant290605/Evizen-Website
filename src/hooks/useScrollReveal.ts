import { useEffect } from 'react';

const revealSelector = '[data-reveal], [data-reveal-group] > *';

export function useScrollReveal(dependency: string) {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));

    elements.forEach((element) => {
      element.classList.remove('is-visible');
      const group = element.parentElement?.hasAttribute('data-reveal-group') ? element.parentElement : null;
      const delay = group ? Array.from(group.children).indexOf(element) * 70 : Number(element.dataset.revealDelay ?? 0);
      element.style.setProperty('--reveal-delay', `${Math.max(delay, 0)}ms`);
    });

    if (reduceMotion) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.16,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [dependency]);
}
