import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsComplete(true), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  if (isComplete) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Logo */}
        <div className="animate-float">
          <div className="text-6xl font-orbitron font-bold text-accent mb-4">BC</div>
          <div className="text-sm font-cinzel tracking-widest text-white/60 uppercase">
            Portfolio
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center space-x-2 mb-8">
          <div className="w-2 h-2 bg-accent rounded-full loading-dot"></div>
          <div className="w-2 h-2 bg-accent rounded-full loading-dot"></div>
          <div className="w-2 h-2 bg-accent rounded-full loading-dot"></div>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-px bg-white/20 mx-auto relative">
          <div 
            className="h-full bg-accent transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Loading text */}
        <div className="text-xs font-orbitron tracking-widest text-white/40 uppercase animate-pulse">
          Loading Experience
        </div>
      </div>
    </div>
  );
}