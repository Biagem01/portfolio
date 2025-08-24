import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = (e) => {
      const target = e.target;
      const isClickable = target.tagName === 'A' || target.tagName === 'BUTTON' || target.style.cursor === 'pointer' || target.closest('a') || target.closest('button');
      setIsPointer(isClickable);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', updateCursorType);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', updateCursorType);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed top-0 left-0 w-6 h-6 pointer-events-none z-50 transition-all duration-300 ${
          isPointer ? 'scale-150' : 'scale-100'
        }`}
        style={{
          transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px)`,
        }}
      >
        <div className={`w-full h-full rounded-full border-2 ${
          isPointer 
            ? 'border-purple-500 bg-purple-500/20' 
            : 'border-blue-500 bg-blue-500/10'
        } transition-all duration-300`} />
      </div>
      
      {/* Trailing cursor */}
      <div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-50 transition-all duration-500"
        style={{
          transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`,
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse" />
      </div>
    </>
  );
}