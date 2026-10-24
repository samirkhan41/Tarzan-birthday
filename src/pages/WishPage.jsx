import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, RotateCcw, Heart, Gift, Crown, PartyPopper } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';
import BirthdayCake3D from '../components/BirthdayCake3D';

export default function WishPage({ onReset }) {
  useEffect(() => {
    // Grand celebratory confetti burst
    try {
      const duration = 2.5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

      const randomInRange = (min, max) => Math.random() * (max - min) + min;

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 45 * (timeLeft / duration);

        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.4), y: Math.random() - 0.2 },
          colors: ['#D91F55', '#F6AFC4', '#D7B8F8', '#FFEAA7'],
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.6, 0.9), y: Math.random() - 0.2 },
          colors: ['#C5F0E3', '#D91F55', '#FFEAA7', '#FFD7DF'],
        });
      }, 250);

      return () => clearInterval(interval);
    } catch (e) {}
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center text-center px-4 pt-4 pb-6 overflow-hidden">
      
      {/* ================= TOP BADGE & HEADINGS ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-sm flex flex-col items-center z-10"
      >
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-rose-100 to-purple-100 border border-rose-200 text-rose-600 text-xs font-bold uppercase tracking-wider mb-2 shadow-xs">
          <Crown className="w-3.5 h-3.5 text-amber-500 animate-bounce" />
          <span>{birthdayConfig.screen5.badge}</span>
          <Sparkles className="w-3 h-3 text-rose-400" />
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#38213D] tracking-tight leading-tight">
          {birthdayConfig.screen5.title}
        </h1>

        <p className="font-handwriting text-3xl sm:text-4xl text-raspberry font-bold mt-1">
          {birthdayConfig.screen5.subtitle}
        </p>

        {/* Floating miniature celebration tokens */}
        <div className="flex items-center justify-center gap-4 mt-2 text-rose-400">
          <PartyPopper className="w-4 h-4 animate-bounce" />
          <Heart className="w-4 h-4 fill-rose-500 animate-pulse" />
          <Gift className="w-4 h-4 text-purple-500 animate-bounce" />
        </div>
      </motion.div>

      {/* ================= CENTRE: CELEBRATORY 3D CAKE ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="my-auto py-2 z-10"
      >
        <BirthdayCake3D scale={1.05} />
      </motion.div>

      {/* ================= BOTTOM: WATCH AGAIN BUTTON ================= */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="w-full max-w-xs z-10"
      >
        <button
          onClick={onReset}
          id="watch-again-btn"
          className="group relative w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#D91F55] via-[#E82C64] to-[#D91F55] text-white font-sans font-bold text-base sm:text-lg shadow-raspberry-glow hover:shadow-[0_12px_35px_-4px_rgba(217,31,85,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2.5 overflow-hidden"
        >
          <RotateCcw className="w-5 h-5 group-hover:-rotate-90 transition-transform duration-300" />
          <span>{birthdayConfig.screen5.buttonText}</span>
          <Sparkles className="w-4 h-4 text-amber-200" />
        </button>
      </motion.div>

    </div>
  );
}
