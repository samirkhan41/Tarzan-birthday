import React, { useEffect, useState, useMemo } from 'react';

/**
 * ConfettiBackground
 * Renders continuous gently falling pastel confetti, floating doodle hearts,
 * and twinkling sparkles matching the reference screenshot.
 */
export default function ConfettiBackground() {
  // Generate a fixed set of floating pastel particles for stable performance
  const particles = useMemo(() => {
    const colors = ['#F6AFC4', '#D7B8F8', '#C5F0E3', '#FFEAA7', '#FFD7DF', '#D91F55'];
    const items = [];
    
    // 24 falling confetti ribbons/rectangles
    for (let i = 0; i < 24; i++) {
      items.push({
        id: `confetti-${i}`,
        type: 'rect',
        color: colors[i % colors.length],
        left: `${(i * 4.2 + Math.random() * 3) % 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 6 + 6,
        aspectRatio: Math.random() * 2 + 1.5,
        rotation: Math.random() * 360,
        delay: Math.random() * 5,
        duration: Math.random() * 6 + 8,
      });
    }

    // 8 floating doodle hearts
    for (let i = 0; i < 8; i++) {
      items.push({
        id: `heart-${i}`,
        type: 'heart',
        left: `${(i * 12 + 5) % 94}%`,
        top: `${Math.random() * 85 + 5}%`,
        size: Math.random() * 8 + 14,
        color: i % 2 === 0 ? '#F6AFC4' : '#D91F55',
        rotation: (Math.random() - 0.5) * 30,
        delay: Math.random() * 4,
        duration: Math.random() * 4 + 6,
      });
    }

    // 6 twinkling star sparkles
    for (let i = 0; i < 6; i++) {
      items.push({
        id: `sparkle-${i}`,
        type: 'sparkle',
        left: `${(i * 16 + 8) % 92}%`,
        top: `${Math.random() * 80 + 10}%`,
        size: Math.random() * 6 + 12,
        color: '#F6AFC4',
        delay: Math.random() * 3,
        duration: Math.random() * 3 + 2.5,
      });
    }

    return items;
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft radial glow in center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] rounded-full bg-gradient-to-tr from-[#FFD7DF]/40 via-[#FFF1E7]/20 to-transparent blur-3xl" />

      {particles.map((p) => {
        if (p.type === 'rect') {
          return (
            <div
              key={p.id}
              className="absolute rounded-sm animate-float-gentle opacity-75"
              style={{
                left: p.left,
                top: p.top,
                width: `${p.size}px`,
                height: `${p.size * p.aspectRatio}px`,
                backgroundColor: p.color,
                transform: `rotate(${p.rotation}deg)`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
              }}
            />
          );
        }

        if (p.type === 'heart') {
          return (
            <div
              key={p.id}
              className="absolute animate-float-gentle"
              style={{
                left: p.left,
                top: p.top,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
                transform: `rotate(${p.rotation}deg)`,
              }}
            >
              <svg
                width={p.size}
                height={p.size}
                viewBox="0 0 24 24"
                fill="none"
                stroke={p.color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-70"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
          );
        }

        if (p.type === 'sparkle') {
          return (
            <div
              key={p.id}
              className="absolute animate-sparkle-twinkle"
              style={{
                left: p.left,
                top: p.top,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
              }}
            >
              <svg
                width={p.size}
                height={p.size}
                viewBox="0 0 24 24"
                fill="none"
                stroke={p.color}
                strokeWidth="1.5"
                className="opacity-60"
              >
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
              </svg>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
