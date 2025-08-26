import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Attiva animazioni per i progetti
          if (entry.target.closest('#projects') || entry.target.getAttribute('data-testid')?.includes('project-card')) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = `bounceInUp 1s ease-out forwards`;
          }
          // NON rimuovere l'observer per permettere animazioni ripetute
        } else {
          // Quando esce dalla vista, rimuovi la classe per permettere nuove animazioni
          entry.target.classList.remove('revealed');
          if (entry.target.closest('#projects') || entry.target.getAttribute('data-testid')?.includes('project-card')) {
            entry.target.style.animation = '';
          }
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-reveal class
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach((el) => observer.observe(el));

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}