import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ArrowRight, Heart } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';
import PhotoBooth from '../components/PhotoBooth';

export default function MomentsPage({ onNext }) {
  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center text-center px-4 pt-5 pb-6 overflow-hidden">
      
      {/* ================= TOP HEADER ================= */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-sm z-10"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-2">
          <Camera className="w-3.5 h-3.5" />
          <span>{birthdayConfig.screen3.topTag}</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#38213D]">
          {birthdayConfig.screen3.title}
        </h2>
        <p className="text-xs sm:text-sm text-[#38213D]/70 font-medium mt-1">
          {birthdayConfig.screen3.instruction}
        </p>
      </motion.div>

      {/* ================= PHOTO BOOTH INTERACTION ================= */}
      <div className="w-full my-auto z-20 py-1">
        <PhotoBooth onNext={onNext} />
      </div>

      {/* ================= BOTTOM NEXT BUTTON ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full max-w-xs z-10"
      >
        <button
          onClick={onNext}
          id="moments-next-btn"
          className="w-full py-3.5 px-6 rounded-full bg-[#FFFDF8] hover:bg-white text-[#38213D] font-bold text-sm sm:text-base border-2 border-[#D7B8F8] shadow-soft-card hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95"
        >
          <span>Time to Make a Wish 🎂</span>
          <ArrowRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

    </div>
  );
}
