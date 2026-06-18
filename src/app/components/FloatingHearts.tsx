"use client";

import { useEffect, useState, useCallback } from "react";

interface Heart {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  rotation: number;
}

interface FloatingHeartsProps {
  count?: number;
  speed?: number;
  className?: string;
}

export default function FloatingHearts({ count = 12, speed = 1, className = "" }: FloatingHeartsProps) {
  const [hearts, setHearts] = useState<Heart[]>([]);

  const createHeart = useCallback((id: number): Heart => ({
    id,
    x: Math.random() * 100,
    size: 12 + Math.random() * 24,
    duration: (8 + Math.random() * 12) / speed,
    delay: Math.random() * 10,
    opacity: 0.15 + Math.random() * 0.25,
    rotation: Math.random() * 360,
  }), [speed]);

  useEffect(() => {
    setHearts(Array.from({ length: count }, (_, i) => createHeart(i)));
    const interval = setInterval(() => {
      setHearts(prev => prev.map(h => h.id === Math.floor(Math.random() * count)
        ? createHeart(h.id)
        : h
      ));
    }, 3000);
    return () => clearInterval(interval);
  }, [count, createHeart]);

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 overflow-hidden ${className}`}>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float"
          style={{
            left: `${heart.x}%`,
            bottom: "-10%",
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            opacity: heart.opacity,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            transform: `rotate(${heart.rotation}deg)`,
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-roseGoldLight">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      ))}
    </div>
  );
}
