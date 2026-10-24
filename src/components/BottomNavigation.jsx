import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const pageNames = [
  "The gift",
  "The letter",
  "Our moments",
  "The candles",
  "The wish",
];

export default function BottomNavigation({
  currentPage = 1,
  totalPages = 5,
  onPrev,
  onNext,
  onSelectPage,
}) {
  return (
    <nav 
      aria-label="Birthday Story Navigation"
      className="w-full max-w-xs mx-auto px-2 py-2 rounded-full bg-[#FFFDF8]/90 backdrop-blur-md border border-[#F6AFC4]/40 shadow-soft-card flex items-center justify-between text-[#38213D] z-40 select-none"
    >
      {/* Previous Button */}
      <button
        onClick={onPrev}
        disabled={currentPage <= 1}
        aria-label="Previous screen"
        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
          currentPage <= 1
            ? 'opacity-30 cursor-not-allowed text-slate-400'
            : 'text-[#38213D] hover:bg-rose-100 hover:text-raspberry active:scale-90'
        }`}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Middle: Page Label, Progress Dots & Counter */}
      <div className="flex flex-col items-center">
        {/* Current Screen Title */}
        <span className="text-xs font-serif font-bold text-[#38213D] tracking-wide capitalize">
          {pageNames[currentPage - 1]}
        </span>

        {/* Animated Progress Dots & Counter */}
        <div className="flex items-center gap-1.5 mt-1">
          {Array.from({ length: totalPages }, (_, idx) => {
            const pageNum = idx + 1;
            const isActive = pageNum === currentPage;

            return (
              <button
                key={pageNum}
                onClick={() => onSelectPage(pageNum)}
                aria-label={`Go to page ${pageNum}`}
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-4 h-1.5 bg-[#D91F55]'
                    : 'w-1.5 h-1.5 bg-[#F6AFC4]/60 hover:bg-[#F6AFC4]'
                }`}
              />
            );
          })}

          <span className="text-[10px] font-sans font-bold text-slate-400 ml-1.5 font-mono">
            {currentPage}/{totalPages}
          </span>
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={currentPage >= totalPages}
        aria-label="Next screen"
        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
          currentPage >= totalPages
            ? 'opacity-30 cursor-not-allowed text-slate-400'
            : 'text-[#38213D] hover:bg-rose-100 hover:text-raspberry active:scale-90'
        }`}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </nav>
  );
}
