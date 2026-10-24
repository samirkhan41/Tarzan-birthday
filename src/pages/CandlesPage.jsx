import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CandleBlow from '../components/CandleBlow';

export default function CandlesPage({ onNext }) {
  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center text-center px-4 pt-4 pb-4 overflow-y-auto">
      
      {/* Top indicator */}
      <div className="w-full max-w-sm z-10">
        <span className="font-handwriting text-xl text-rose-500 font-bold block">
          Make a special birthday wish... ✨
        </span>
      </div>

      {/* Main Candle Blowing Component */}
      <div className="w-full my-auto z-20">
        <CandleBlow onCompleted={onNext} />
      </div>

      {/* Bottom Continue Button */}
      <div className="w-full max-w-xs z-10 pt-2 pb-1">
        <button
          onClick={onNext}
          id="candles-next-btn"
          className="w-full py-2.5 px-4 rounded-full bg-[#FFFDF8] hover:bg-white text-[#38213D] font-bold text-xs sm:text-sm border border-[#F6AFC4] shadow-xs hover:shadow-sm transition-all duration-300 flex items-center justify-center gap-1.5 group active:scale-95"
        >
          <span>Skip to Celebration</span>
          <ArrowRight className="w-3.5 h-3.5 text-raspberry group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </div>
  );
}
