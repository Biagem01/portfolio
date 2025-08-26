import { useEffect } from 'react';

export const useScrollAnimations = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          
          // Trigger animation immediately when visible
          element.classList.add('animate');
          
          // Add specific animation class based on data attribute
          const animationType = element.dataset.animation;
          if (animationType) {
            element.classList.add(animationType);
          }
          
          // Stop observing once animated
          observer.unobserve(element);
        }
      });
    }, observerOptions);

    // Enhanced scroll reveal with stagger support
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach((el, index) => {
      observer.observe(el);
      
      // Add stagger delays for projects
      if (el.classList.contains('project-delay-1')) {
        el.style.animationDelay = '0.2s';
      } else if (el.classList.contains('project-delay-2')) {
        el.style.animationDelay = '0.4s';
      } else if (el.classList.contains('project-delay-3')) {
        el.style.animationDelay = '0.6s';
      } else if (el.classList.contains('project-delay-4')) {
        el.style.animationDelay = '0.8s';
      }
    });

    // Enhanced magnetic effect
    const magneticElements = document.querySelectorAll('.magnetic');
    
    magneticElements.forEach(element => {
      element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
        
        element.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
      });
      
      element.addEventListener('mouseleave', () => {
        element.style.transform = 'translate(0px, 0px) scale(1)';
      });
    });

    // Add bounce effect on scroll
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const parallaxElements = document.querySelectorAll('.animate-float');
          
          parallaxElements.forEach((element) => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      magneticElements.forEach(element => {
        element.removeEventListener('mousemove', () => {});
        element.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);
};