import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      
      if (scrollHeight) {
        setScrollProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-200/20 dark:bg-slate-800/20">
      <div 
        className="h-full bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 transition-all duration-300 shadow-lg"
        style={{
          width: `${scrollProgress}%`,
          boxShadow: '0 0 10px rgba(147, 51, 234, 0.5)',
          fontFamily: 'Orbitron, monospace'
        }}
      />
    </div>
  );
}