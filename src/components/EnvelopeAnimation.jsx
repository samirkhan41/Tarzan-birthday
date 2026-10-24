import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ChevronUp, X, Sparkles } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';

/**
 * EnvelopeAnimation
 * Physical 3D-folding pastel pink envelope with heart wax seal
 * and progressive letter sliding reveal.
 */
export default function EnvelopeAnimation({ onNext }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEnvelope = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full max-w-sm mx-auto flex flex-col items-center justify-center my-auto perspective-1200">
      
      {/* Background Dim Overlay when letter is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#38213D]/40 backdrop-blur-xs z-30 pointer-events-auto"
          />
        )}
      </AnimatePresence>

      {/* Main Envelope & Letter Stack */}
      <div className="relative w-full aspect-[4/3] flex items-center justify-center z-40">
        
        {/* ================= READABLE EXPANDED LETTER ================= */}
        <motion.div
          animate={
            isOpen
              ? {
                  y: -140,
                  scale: 1,
                  zIndex: 50,
                  boxShadow: '0 25px 50px -12px rgba(56, 33, 61, 0.35)',
                }
              : {
                  y: 10,
                  scale: 0.9,
                  zIndex: 10,
                  boxShadow: '0 4px 6px -1px rgba(56, 33, 61, 0.05)',
                }
          }
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          className="absolute inset-x-3 letter-paper rounded-2xl p-5 sm:p-6 border border-[#F6AFC4]/30 max-h-[460px] overflow-y-auto cursor-pointer"
          onClick={() => !isOpen && setIsOpen(true)}
        >
          {/* Close button on expanded letter */}
          {isOpen && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#FFF1E7] border border-[#F6AFC4] text-[#38213D] flex items-center justify-center hover:bg-rose-100 transition-colors"
              aria-label="Close letter"
            >
              <X className="w-4 h-4 text-rose-500" />
            </button>
          )}

          {/* Letter Content */}
          <div className="text-left font-handwriting text-xl sm:text-2xl text-[#38213D] leading-relaxed space-y-3">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#38213D] leading-tight">
              Hey {birthdayConfig.name} ❤️,
            </h3>
            
            <p className="font-sans text-xs font-bold uppercase tracking-wider text-raspberry">
              Happy Birthday!
            </p>

            <p>
              Some people become more than just friends, and you're definitely one of them.
            </p>

            <p>
              Life is better with a brother like you. Thank you for all the laughs, crazy conversations and unforgettable moments.
            </p>

            <p>
              I hope this year brings you happiness, success, good health and everything you've been working towards.
            </p>

            <p>
              No matter where life takes us, the bond stays the same.
            </p>

            <p>
              Stay happy, stay crazy, and keep being the amazing person you are.
            </p>

            <div className="pt-3 border-t border-[#F6AFC4]/40 flex items-center justify-between">
              <div>
                <p className="text-sm font-sans font-semibold text-slate-500">
                  {birthdayConfig.screen2.signOff}
                </p>
                <p className="font-handwriting text-2xl font-bold text-raspberry">
                  {birthdayConfig.screen2.author}
                </p>
              </div>
              <Heart className="w-6 h-6 text-rose-500 fill-rose-500 animate-pulse" />
            </div>
          </div>
        </motion.div>

        {/* ================= PHYSICAL ENVELOPE BODY ================= */}
        <div 
          onClick={toggleEnvelope}
          className="relative w-full h-full rounded-2xl bg-gradient-to-b from-[#F6AFC4] to-[#FFA7BD] shadow-envelope overflow-hidden border-2 border-white/60 cursor-pointer z-20 flex items-center justify-center"
        >
          {/* Back Triangle Texture */}
          <div className="absolute inset-0 bg-[#FFD7DF]/40" />

          {/* Envelope Front Left & Right Fold Triangles */}
          <div 
            className="absolute left-0 bottom-0 top-0 w-1/2 bg-gradient-to-tr from-[#FFAEC3] to-[#F6AFC4]"
            style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
          />
          <div 
            className="absolute right-0 bottom-0 top-0 w-1/2 bg-gradient-to-tl from-[#FFAEC3] to-[#F6AFC4]"
            style={{ clipPath: 'polygon(100% 0, 0 50%, 100% 100%)' }}
          />

          {/* Envelope Bottom Flap */}
          <div 
            className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#FF9EBA] to-[#FFAEC3]"
            style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}
          />

          {/* Envelope Top Flap (Animated 3D Fold) */}
          <motion.div
            animate={{
              rotateX: isOpen ? -180 : 0,
              zIndex: isOpen ? 5 : 25,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#FFAEC3] to-[#F6AFC4] origin-top preserve-3d"
            style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
          />

          {/* Wax Heart Seal on Front */}
          <AnimatePresence>
            {!isOpen && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.3, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute z-30 w-12 h-12 rounded-full bg-gradient-to-br from-[#D91F55] via-[#E82C64] to-[#B01442] shadow-md border-2 border-rose-300 flex items-center justify-center text-white"
              >
                <Heart className="w-6 h-6 fill-white text-white drop-shadow-sm" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* "PULL UP TO READ" prompt when closed */}
          {!isOpen && (
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="absolute bottom-3 z-30 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 backdrop-blur-xs text-[11px] font-bold text-[#38213D] shadow-xs"
            >
              <ChevronUp className="w-3.5 h-3.5 text-rose-500" />
              <span>{birthdayConfig.screen2.instruction}</span>
            </motion.div>
          )}
        </div>

      </div>

    </div>
  );
}
