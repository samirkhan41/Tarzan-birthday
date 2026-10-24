import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Heart } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';
import EnvelopeAnimation from '../components/EnvelopeAnimation';

export default function LetterPage({ onNext }) {
  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center text-center px-4 pt-6 pb-6 overflow-hidden">
      
      {/* ================= TOP HEADER ================= */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-sm z-10"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-xs font-bold uppercase tracking-wider mb-2">
          <Mail className="w-3.5 h-3.5" />
          <span>From My Heart</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#38213D]">
          {birthdayConfig.screen2.title}
        </h2>
        <p className="text-xs sm:text-sm text-[#38213D]/70 font-medium mt-1">
          {birthdayConfig.screen2.instruction}
        </p>
      </motion.div>

      {/* ================= ENVELOPE COMPONENT ================= */}
      <div className="w-full my-auto z-20">
        <EnvelopeAnimation onNext={onNext} />
      </div>

      {/* ================= BOTTOM CONTINUE BUTTON ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full max-w-xs z-10"
      >
        <button
          onClick={onNext}
          id="letter-next-btn"
          className="w-full py-3.5 px-6 rounded-full bg-[#FFFDF8] hover:bg-white text-[#38213D] font-bold text-sm sm:text-base border-2 border-[#F6AFC4] shadow-soft-card hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95"
        >
          <span>See Our Moments</span>
          <ArrowRight className="w-4 h-4 text-raspberry group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

    </div>
  );
}
