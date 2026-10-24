import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ConfettiBackground from './components/ConfettiBackground';
import BottomNavigation from './components/BottomNavigation';
import GiftPage from './pages/GiftPage';
import LetterPage from './pages/LetterPage';
import MomentsPage from './pages/MomentsPage';
import CandlesPage from './pages/CandlesPage';
import WishPage from './pages/WishPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [resetKey, setResetKey] = useState(0);

  const totalPages = 5;

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setDirection(1);
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setDirection(-1);
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToPage = (pageNum) => {
    setDirection(pageNum > currentPage ? 1 : -1);
    setCurrentPage(pageNum);
  };

  const handleResetAll = () => {
    setDirection(-1);
    setCurrentPage(1);
    setResetKey((k) => k + 1); // Triggers re-mount and reset of stateful components
  };

  // Sliding animation variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
      },
    }),
  };

  return (
    <div className="min-h-screen w-full bg-[#FCECE3] flex items-center justify-center p-0 sm:p-4 md:p-6 overflow-hidden select-none">
      
      {/* Mobile Device Mockup Container for Desktop / Native Fullscreen on Mobile */}
      <div 
        className="relative w-full sm:max-w-[410px] h-[100dvh] sm:h-[860px] sm:max-h-[92vh] bg-pastel-gradient sm:rounded-[44px] shadow-2xl overflow-hidden flex flex-col justify-between border-0 sm:border-8 sm:border-white/80"
      >
        {/* Continuous Animated Confetti & Sparkles Background */}
        <ConfettiBackground />

        {/* Dynamic Screen View with Motion Slide Transitions */}
        <div className="relative flex-1 w-full overflow-hidden z-10">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`${currentPage}-${resetKey}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full h-full"
            >
              {currentPage === 1 && <GiftPage onNext={goToNextPage} />}
              {currentPage === 2 && <LetterPage onNext={goToNextPage} />}
              {currentPage === 3 && <MomentsPage onNext={goToNextPage} />}
              {currentPage === 4 && <CandlesPage onNext={goToNextPage} />}
              {currentPage === 5 && <WishPage onReset={handleResetAll} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Persistent Bottom Navigation Bar */}
        <div className="relative w-full pb-4 sm:pb-5 pt-1 px-4 z-30">
          <BottomNavigation
            currentPage={currentPage}
            totalPages={totalPages}
            onPrev={goToPrevPage}
            onNext={goToNextPage}
            onSelectPage={goToPage}
          />
        </div>

      </div>

    </div>
  );
}
