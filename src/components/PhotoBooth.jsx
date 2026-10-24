import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Sparkles, X, RefreshCw, Heart, Grid, ZoomIn } from 'lucide-react';
import { personalPhotos } from '../data/photos';

export default function PhotoBooth({ onNext }) {
  const [currentPrintIndex, setCurrentPrintIndex] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const [printedPhotos, setPrintedPhotos] = useState([]);
  const [activeModalPhoto, setActiveModalPhoto] = useState(null);
  const [showFullGallery, setShowFullGallery] = useState(false);

  // Trigger camera print interaction
  const handlePrintPhoto = () => {
    if (isPrinting || currentPrintIndex >= personalPhotos.length) return;

    setIsFlashing(true);
    setIsPrinting(true);

    // Camera flash & shutter effect
    setTimeout(() => {
      setIsFlashing(false);
    }, 250);

    // Photo emerges from slot
    setTimeout(() => {
      const nextPhoto = personalPhotos[currentPrintIndex];
      setPrintedPhotos((prev) => [nextPhoto, ...prev]);
      setCurrentPrintIndex((prev) => prev + 1);
      setIsPrinting(false);
    }, 700);
  };

  const handleResetBooth = () => {
    setCurrentPrintIndex(0);
    setPrintedPhotos([]);
    setShowFullGallery(false);
  };

  return (
    <div className="relative w-full max-w-sm mx-auto flex flex-col items-center">
      
      {/* Camera Flash Screen Overlay */}
      <AnimatePresence>
        {isFlashing && (
          <motion.div
            initial={{ opacity: 0.95 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {!showFullGallery ? (
        /* ================= RETRO PHOTO BOOTH MACHINE ================= */
        <motion.div
          animate={isPrinting ? { x: [-3, 3, -2, 2, 0] } : {}}
          transition={{ duration: 0.4 }}
          className="relative w-full rounded-3xl bg-gradient-to-b from-[#D7B8F8] to-[#C39BEE] p-4 border-4 border-white shadow-photo-booth overflow-hidden"
        >
          {/* Top Marquee Sign with Blinking Bulbs */}
          <div className="rounded-2xl bg-[#D91F55] py-2 px-3 mb-3 border-2 border-rose-300 shadow-inner flex flex-col items-center">
            {/* Blinking Bulbs Row */}
            <div className="flex items-center justify-around w-full mb-1">
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={`bulb-${i}`}
                  className="w-2.5 h-2.5 rounded-full bg-[#FFEAA7] border border-amber-300 animate-bulb-blink shadow-[0_0_6px_rgba(255,234,167,0.8)]"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>

            <div className="flex items-center justify-between w-full px-2">
              <span className="font-serif font-black text-white text-sm sm:text-base tracking-widest uppercase drop-shadow-sm">
                ★ PHOTO BOOTH ★
              </span>
              <button
                onClick={() => setShowFullGallery(true)}
                className="text-[10px] font-sans font-bold text-white bg-white/20 hover:bg-white/30 px-2 py-0.5 rounded-full transition-colors flex items-center gap-1"
                title="View all 8 photos"
              >
                <Grid className="w-3 h-3" />
                <span>All (8)</span>
              </button>
            </div>
          </div>

          {/* Interactive Retro Camera - Tap Camera directly or use button */}
          <div 
            onClick={handlePrintPhoto}
            className="cursor-pointer relative w-full aspect-[16/9] rounded-2xl bg-gradient-to-b from-[#683677] to-[#451C53] p-3 overflow-hidden flex flex-col items-center justify-center border-2 border-purple-900/30 group"
          >
            {/* Purple velvet draped curtains on sides */}
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-purple-900 to-purple-800 opacity-90 rounded-r-lg" />
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-purple-900 to-purple-800 opacity-90 rounded-l-lg" />

            {/* Retro Mint Camera */}
            <motion.div 
              animate={isPrinting ? { scale: [1, 1.15, 0.95, 1] } : { scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-28 h-20 rounded-2xl bg-gradient-to-b from-[#C5F0E3] to-[#A3E5D2] border-2 border-white shadow-md flex items-center justify-center"
            >
              {/* Camera Lens */}
              <div className="w-12 h-12 rounded-full bg-slate-800 border-4 border-white shadow-inner flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-400 opacity-80" />
              </div>

              {/* Camera Heart Decal */}
              <div className="absolute top-1.5 right-2">
                <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
              </div>
            </motion.div>

            <span className="text-[10px] font-sans font-bold text-pink-200 mt-1 drop-shadow-sm flex items-center gap-1">
              <Camera className="w-3 h-3" /> Tap camera or button below
            </span>
          </div>

          {/* Machine Controls Bar Above Dispenser Slot */}
          <div className="my-2.5 flex items-center justify-between px-1">
            <span className="text-xs font-bold text-[#38213D] font-sans">
              Printed: {currentPrintIndex} / {personalPhotos.length}
            </span>

            <div className="flex items-center gap-1.5">
              {currentPrintIndex < personalPhotos.length ? (
                <button
                  onClick={handlePrintPhoto}
                  disabled={isPrinting}
                  id="camera-print-btn"
                  className="px-4 py-2 rounded-full bg-[#D91F55] hover:bg-rose-600 text-white font-bold text-xs sm:text-sm border border-white/60 shadow-md flex items-center gap-1.5 active:scale-95 transition-all"
                >
                  <Camera className="w-3.5 h-3.5 text-white" />
                  <span>{isPrinting ? 'Printing...' : 'Snap & Print!'}</span>
                </button>
              ) : (
                <button
                  onClick={() => setShowFullGallery(true)}
                  id="view-gallery-btn"
                  className="px-4 py-2 rounded-full bg-[#D91F55] text-white font-bold text-xs sm:text-sm shadow-md hover:bg-rose-600 transition-all active:scale-95 flex items-center gap-1"
                >
                  <span>See All (8) Memories</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Photo Dispenser Slot */}
          <div className="px-4">
            <div className="h-2.5 w-3/4 mx-auto bg-slate-900 rounded-full shadow-inner border border-purple-300/40" />
          </div>

          {/* Dispensed Photo Display */}
          <div className="relative min-h-[170px] flex items-center justify-center pt-2">
            <AnimatePresence mode="popLayout">
              {printedPhotos.length > 0 ? (
                <motion.div
                  key={printedPhotos[0].id}
                  initial={{ y: -40, opacity: 0, scale: 0.8 }}
                  animate={{ y: 0, opacity: 1, scale: 1, rotate: -1.5 }}
                  transition={{ type: "spring", damping: 14, stiffness: 120 }}
                  onClick={() => setActiveModalPhoto(printedPhotos[0])}
                  className="cursor-pointer bg-white p-2.5 pb-4 rounded-xl shadow-lg border border-purple-200 w-48 text-center transform hover:scale-105 transition-transform"
                >
                  <div className="aspect-square w-full rounded-lg overflow-hidden bg-[#FFF1E7] mb-1.5 relative group">
                    <img
                      src={printedPhotos[0].image}
                      alt={printedPhotos[0].caption}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <ZoomIn className="w-6 h-6 text-white drop-shadow" />
                    </div>
                  </div>
                  <span className="font-handwriting text-base font-bold text-[#38213D] block truncate">
                    {printedPhotos[0].caption}
                  </span>
                  <span className="text-[10px] text-slate-400 font-sans block mt-0.5">
                    Tap to enlarge ♡
                  </span>
                </motion.div>
              ) : (
                <div className="text-xs font-handwriting text-[#38213D]/70 py-8 text-center">
                  Tap camera or "Snap & Print!" to print memories...
                </div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ) : (
        /* ================= FULL POLAROID MEMORIES GALLERY ================= */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full bg-[#FFFDF8] rounded-3xl p-4 sm:p-5 border-2 border-[#F6AFC4] shadow-soft-card"
        >
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#F6AFC4]/40">
            <div>
              <h3 className="font-serif text-lg font-bold text-[#38213D]">
                Our Memory Reel 📸
              </h3>
              <p className="text-[11px] text-slate-500 font-sans">
                All {personalPhotos.length} moments saved with love
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowFullGallery(false)}
                className="px-2.5 py-1 rounded-full bg-slate-100 text-xs font-bold text-[#38213D] hover:bg-slate-200"
              >
                Booth Mode
              </button>
              <button
                onClick={handleResetBooth}
                className="p-1 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
                title="Print again"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 max-h-[380px] overflow-y-auto p-1">
            {personalPhotos.map((photo, i) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setActiveModalPhoto(photo)}
                className="cursor-pointer bg-white p-2 rounded-xl shadow-xs border border-pink-100 text-center transform hover:scale-102 transition-transform"
                style={{ transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)` }}
              >
                <div className="aspect-square w-full rounded-lg overflow-hidden bg-slate-100 mb-1 relative">
                  <img
                    src={photo.image}
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-handwriting text-xs font-bold text-[#38213D] truncate">
                  {photo.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* ================= FULLSCREEN LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {activeModalPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#38213D]/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-sm w-full bg-[#FFFDF8] rounded-3xl p-4 sm:p-5 border-2 border-[#F6AFC4] shadow-2xl"
            >
              <button
                onClick={() => setActiveModalPhoto(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#FFF1E7] border border-[#F6AFC4] text-[#38213D] flex items-center justify-center hover:bg-rose-100"
              >
                <X className="w-4 h-4 text-rose-500" />
              </button>

              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100 mb-3 shadow-inner relative">
                <img
                  src={activeModalPhoto.image}
                  alt={activeModalPhoto.caption}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-left px-1">
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-raspberry">
                  {activeModalPhoto.date}
                </span>
                <h4 className="font-handwriting text-2xl font-bold text-[#38213D] mt-0.5 leading-snug">
                  {activeModalPhoto.caption}
                </h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
