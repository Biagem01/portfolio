import { useEffect } from 'react';

export const useScrollAnimations = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          
          // Add stagger delay based on index
          setTimeout(() => {
            element.classList.add('animate');
            
            // Add specific animation class based on data attribute
            const animationType = element.dataset.animation;
            if (animationType) {
              element.classList.add(animationType);
            }
          }, index * 100); // 100ms delay between each element
        }
      });
    }, observerOptions);

    // Observe all scroll-reveal elements
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach((el) => observer.observe(el));

    // Magnetic effect for buttons
    const magneticElements = document.querySelectorAll('.magnetic');
    
    magneticElements.forEach(element => {
      element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
      });
      
      element.addEventListener('mouseleave', () => {
        element.style.transform = 'translate(0px, 0px)';
      });
    });

    return () => {
      observer.disconnect();
      magneticElements.forEach(element => {
        element.removeEventListener('mousemove', () => {});
        element.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);
};