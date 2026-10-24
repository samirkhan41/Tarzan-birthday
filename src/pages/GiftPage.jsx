import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Gift, Heart } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';
import BirthdayCake3D from '../components/BirthdayCake3D';

export default function GiftPage({ onNext }) {
  const handleOpenGift = () => {
    // Trigger celebratory confetti burst
    try {
      confetti({
        particleCount: 75,
        spread: 80,
        origin: { y: 0.8 },
        colors: ['#D91F55', '#F6AFC4', '#D7B8F8', '#FFEAA7', '#C5F0E3'],
      });
    } catch (e) {}

    // Animate to Screen 2
    if (onNext) onNext();
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center text-center px-4 pt-4 pb-6 overflow-hidden">
      
      {/* ================= TOP HEADER SECTION ================= */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-sm flex flex-col items-center z-10"
      >
        {/* Top Tag: — A GIFT FOR YOU — */}
        <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-rose-500 uppercase mb-2">
          <span className="w-3 h-0.5 bg-rose-400 rounded-full" />
          <span>{birthdayConfig.screen1.badge}</span>
          <span className="w-3 h-0.5 bg-rose-400 rounded-full" />
        </div>

        {/* Main Heading: Happy Birthday, Bhai! ♡ */}
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#38213D] tracking-tight leading-tight">
          {birthdayConfig.screen1.title}
          <br />
          <span className="text-[#38213D]">
            {birthdayConfig.name}! <span className="font-handwriting text-rose-500 font-normal">♡</span>
          </span>
        </h1>

        {/* Handwritten Subtitle: for being so awesome */}
        <div className="font-handwriting text-2xl sm:text-3xl text-[#38213D] mt-1.5 flex items-center justify-center gap-1.5">
          <span>{birthdayConfig.screen1.subtitleLead}</span>
          <span className="text-raspberry font-bold relative">
            {birthdayConfig.screen1.subtitleAccent}
            <svg
              className="absolute -bottom-1 left-0 w-full text-raspberry"
              height="4"
              viewBox="0 0 100 4"
              fill="none"
              preserveAspectRatio="none"
            >
              <path d="M0,2 Q50,4 100,2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </span>
        </div>

        {/* Supporting Message */}
        <p className="text-xs sm:text-sm text-[#38213D]/70 font-medium mt-3 max-w-xs leading-relaxed">
          {birthdayConfig.screen1.supportingText}
        </p>

        {/* Small doodle heart */}
        <div className="text-rose-400 font-handwriting text-lg mt-0.5">
          ♡
        </div>
      </motion.div>

      {/* ================= CENTRE: ROTATING 3D CAKE ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="my-auto py-2 z-10"
      >
        <BirthdayCake3D scale={1.05} />
      </motion.div>

      {/* ================= BOTTOM: OPEN MY GIFT BUTTON ================= */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-xs z-10"
      >
        <button
          onClick={handleOpenGift}
          id="open-gift-btn"
          className="group relative w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#D91F55] via-[#E82C64] to-[#D91F55] text-white font-sans font-bold text-base sm:text-lg shadow-raspberry-glow hover:shadow-[0_12px_35px_-4px_rgba(217,31,85,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2.5 overflow-hidden"
        >
          {/* Subtle breathing glow ring */}
          <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Gift Icon */}
          <Gift className="w-5 h-5 text-white animate-bounce" />

          <span>{birthdayConfig.screen1.buttonText}</span>
        </button>
      </motion.div>

    </div>
  );
}
