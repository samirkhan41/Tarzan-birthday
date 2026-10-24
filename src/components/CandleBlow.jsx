import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mic, Wind, Sparkles, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';
import BirthdayCake3D from './BirthdayCake3D';

// Candle color themes matching the 3D candle stripes
const CANDLE_META = [
  { id: 1, label: 'Pink', bg: '#ff4071', text: '#ffffff' },
  { id: 2, label: 'Sky', bg: '#0284c7', text: '#ffffff' },
  { id: 3, label: 'Gold', bg: '#eab308', text: '#ffffff' },
  { id: 4, label: 'Purple', bg: '#9333ea', text: '#ffffff' },
  { id: 5, label: 'Emerald', bg: '#10b981', text: '#ffffff' },
];

export default function CandleBlow({ onCompleted }) {
  const [extinguishedCount, setExtinguishedCount] = useState(0); // 0 to 5
  const [isBlowing, setIsBlowing] = useState(false);
  const [holdProgress, setHoldProgress] = useState(0); // 0 to 100
  const [isHolding, setIsHolding] = useState(false);
  const [micActive, setMicActive] = useState(false);
  const [micError, setMicError] = useState(null);
  const [isWishGranted, setIsWishGranted] = useState(false);
  const [recentPuffIndex, setRecentPuffIndex] = useState(null);

  // Audio refs
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const micStreamRef = useRef(null);
  const animationFrameRef = useRef(null);
  const holdIntervalRef = useRef(null);
  const sustainedBlowCounterRef = useRef(0);

  // Synthesize realistic candle breath/puff sound using Web Audio API
  const playPuffSound = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const bufferSize = Math.floor(ctx.sampleRate * 0.16);
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.35));
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.16);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.28, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.16);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start();
    } catch (e) {}
  };

  // Synthesize grand celebratory chime when all candles are blown
  const playChimeSound = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.11);
        gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.11);
        gain.gain.linearRampToValueAtTime(0.22, ctx.currentTime + idx * 0.11 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.11 + 0.7);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.11);
        osc.stop(ctx.currentTime + idx * 0.11 + 0.7);
      });
    } catch (e) {}
  };

  // Clean up Web Audio resources on unmount
  useEffect(() => {
    return () => {
      stopMicrophone();
      if (holdIntervalRef.current) clearInterval(holdIntervalRef.current);
    };
  }, []);

  // When count reaches 5, trigger grand celebration
  const triggerCelebration = () => {
    setIsBlowing(false);
    setIsWishGranted(true);
    stopMicrophone();
    playChimeSound();

    try {
      confetti({
        particleCount: 110,
        spread: 90,
        origin: { y: 0.65 },
        colors: ['#D91F55', '#F6AFC4', '#D7B8F8', '#FFEAA7', '#C5F0E3'],
      });
    } catch (e) {}
  };

  // Blow out next candle in sequence
  const extinguishNextCandle = () => {
    setExtinguishedCount((prev) => {
      if (prev >= 5) return 5;
      const next = prev + 1;
      playPuffSound();
      setRecentPuffIndex(next);
      setTimeout(() => setRecentPuffIndex(null), 900);

      // Haptic vibrate on mobile devices
      if (navigator.vibrate) {
        try { navigator.vibrate(60); } catch (e) {}
      }

      if (next >= 5) {
        triggerCelebration();
      }
      return next;
    });
  };

  // ================= OPTION A: MICROPHONE BLOW =================
  const startMicrophone = async () => {
    if (extinguishedCount >= 5) return;
    setMicError(null);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      micStreamRef.current = stream;

      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const audioCtx = new AudioContext();
      audioContextRef.current = audioCtx;

      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      analyserRef.current = analyser;

      const source = audioCtx.createMediaStreamSource(stream);
      source.connect(analyser);

      setMicActive(true);

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const checkAudio = () => {
        if (!analyserRef.current) return;
        analyserRef.current.getByteFrequencyData(dataArray);

        let sum = 0;
        for (let i = 0; i < bufferLength; i++) {
          sum += dataArray[i];
        }
        const average = sum / bufferLength;

        // Breath / noise threshold
        if (average > 32) {
          setIsBlowing(true);
          sustainedBlowCounterRef.current++;

          // Every ~6 frames (approx 100ms) of sustained blowing, advance candle
          if (sustainedBlowCounterRef.current % 7 === 0) {
            extinguishNextCandle();
          }
        } else {
          setIsBlowing(false);
          sustainedBlowCounterRef.current = 0;
        }

        animationFrameRef.current = requestAnimationFrame(checkAudio);
      };

      checkAudio();
    } catch (err) {
      console.warn("Microphone access error:", err);
      setMicError("Mic unavailable. Use 'Press & Hold' or tap candles!");
      setMicActive(false);
    }
  };

  const stopMicrophone = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (micStreamRef.current) {
      micStreamRef.current.getTracks().forEach((t) => t.stop());
      micStreamRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close().catch(() => {});
      audioContextRef.current = null;
    }
    setMicActive(false);
    setIsBlowing(false);
  };

  // ================= OPTION B: HOLD TO BLOW =================
  const handleHoldStart = (e) => {
    if (extinguishedCount >= 5) return;
    if (e.cancelable) e.preventDefault();
    setIsHolding(true);
    setIsBlowing(true);

    if (holdIntervalRef.current) clearInterval(holdIntervalRef.current);

    holdIntervalRef.current = setInterval(() => {
      setHoldProgress((prev) => {
        const next = Math.min(100, prev + 5);

        // Progressively extinguish candles at 20%, 40%, 60%, 80%, 100%
        const targetCandles = Math.min(5, Math.floor((next / 100) * 5));
        setExtinguishedCount((curr) => {
          if (targetCandles > curr) {
            playPuffSound();
            setRecentPuffIndex(targetCandles);
            setTimeout(() => setRecentPuffIndex(null), 900);
            if (navigator.vibrate) {
              try { navigator.vibrate(50); } catch (e) {}
            }
          }
          return Math.max(curr, targetCandles);
        });

        if (next >= 100) {
          clearInterval(holdIntervalRef.current);
          setIsHolding(false);
          triggerCelebration();
          return 100;
        }
        return next;
      });
    }, 60);
  };

  const handleHoldEnd = () => {
    if (holdIntervalRef.current) clearInterval(holdIntervalRef.current);
    setIsHolding(false);

    if (extinguishedCount < 5) {
      setIsBlowing(false);
    }
  };

  // ================= OPTION C: TAP TO BLOW =================
  const handleTapCandle = (index) => {
    if (extinguishedCount >= 5) return;
    if (index >= extinguishedCount) {
      extinguishNextCandle();
    }
  };

  return (
    <div className="relative w-full max-w-sm mx-auto flex flex-col items-center">
      
      {/* 3D Cake with Candle Extinguishing State (focusedMode = true zooms right on candles) */}
      <div className="relative my-0 flex items-center justify-center">
        
        {/* Animated Visual Wind Gust Overlay when Blowing */}
        <AnimatePresence>
          {isBlowing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none z-20 overflow-hidden flex items-center justify-center"
            >
              {/* Dynamic Wind Streams */}
              {[1, 2, 3].map((w) => (
                <motion.div
                  key={w}
                  initial={{ y: 80, x: -60 + w * 40, opacity: 0, scale: 0.8 }}
                  animate={{
                    y: -120,
                    x: -20 + w * 30,
                    opacity: [0, 0.85, 0],
                    scale: [0.8, 1.2, 1.4],
                  }}
                  transition={{
                    duration: 0.7,
                    repeat: Infinity,
                    delay: w * 0.18,
                    ease: "easeOut",
                  }}
                  className="absolute text-rose-300 font-bold text-2xl filter blur-[0.5px]"
                >
                  💨
                </motion.div>
              ))}

              {/* Gust breeze lines */}
              <svg className="absolute w-full h-full opacity-40 text-raspberry" viewBox="0 0 300 300" fill="none">
                <path d="M40 240 Q150 160 260 200" stroke="currentColor" strokeWidth="3" strokeDasharray="8 8" className="animate-pulse" />
                <path d="M60 200 Q160 120 240 150" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 6" className="animate-pulse" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating "Puff! 💨" Badge on Candle Extinguish */}
        <AnimatePresence>
          {recentPuffIndex && (
            <motion.div
              initial={{ scale: 0.5, y: 0, opacity: 0 }}
              animate={{ scale: 1.15, y: -45, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute top-10 z-30 px-3.5 py-1 rounded-full bg-white/95 border-2 border-raspberry text-raspberry font-serif font-bold text-xs shadow-lg flex items-center gap-1"
            >
              <span>💨 Puff! Candle #{recentPuffIndex} Out!</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The 3D Cake (focusedMode brings candles right to the center!) */}
        <BirthdayCake3D
          scale={1.0}
          focusedMode={true}
          isBlowing={isBlowing}
          flameBendAngle={isHolding ? (holdProgress / 100) * 30 : 20}
          extinguishedCount={extinguishedCount}
        />
      </div>

      {/* Real-time Candle Indicator Bar: 5 Tappable Candles */}
      <div className="w-full flex items-center justify-between px-3 py-1.5 mb-1 bg-white/70 backdrop-blur-xs rounded-2xl border border-rose-200/80 shadow-xs z-10">
        <span className="text-[11px] font-bold text-[#38213D]/80">
          Candles: <span className="text-raspberry">{extinguishedCount}/5</span> Blown
        </span>
        <div className="flex items-center gap-1.5">
          {CANDLE_META.map((c, idx) => {
            const isOut = idx < extinguishedCount;
            return (
              <button
                key={c.id}
                onClick={() => handleTapCandle(idx)}
                title={isOut ? `Candle ${c.id}: Blown out` : `Tap to blow Candle ${c.id}`}
                className={`relative w-7 h-7 rounded-full flex items-center justify-center text-xs transition-all duration-300 ${
                  isOut
                    ? 'bg-slate-200 text-slate-400 scale-90 border border-slate-300'
                    : 'bg-white shadow-xs border-2 hover:scale-110 active:scale-95 animate-bounce'
                }`}
                style={{
                  borderColor: isOut ? '#cbd5e1' : c.bg,
                }}
              >
                {isOut ? '💨' : '🕯️'}
              </button>
            );
          })}
        </div>
      </div>

      {/* Control Panel Card */}
      <div className="w-full rounded-3xl bg-[#FFFDF8] border-2 border-[#F6AFC4] shadow-soft-card p-4 text-center z-10">
        
        {!isWishGranted ? (
          <>
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-raspberry mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{birthdayConfig.screen4.badge}</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#38213D] mb-1">
              {birthdayConfig.screen4.title}
            </h3>

            <p className="text-xs text-[#38213D]/70 font-sans max-w-xs mx-auto mb-3 leading-relaxed">
              {birthdayConfig.screen4.instruction}
            </p>

            {/* Error notice if mic failed */}
            {micError && (
              <div className="mb-2 px-3 py-1 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-[11px] flex items-center justify-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                <span>{micError}</span>
              </div>
            )}

            {/* Action Buttons: Microphone and Hold */}
            <div className="grid grid-cols-2 gap-2.5">
              {/* Mic Button */}
              <button
                onClick={micActive ? stopMicrophone : startMicrophone}
                id="blow-mic-btn"
                className={`py-3 px-3 rounded-2xl border-2 font-bold text-xs sm:text-sm flex flex-col items-center justify-center gap-1 transition-all ${
                  micActive
                    ? 'bg-rose-50 border-raspberry text-raspberry shadow-inner animate-pulse'
                    : 'bg-[#FFF1E7] hover:bg-rose-50 border-[#F6AFC4] text-[#38213D]'
                }`}
              >
                <Mic className={`w-5 h-5 ${micActive ? 'text-raspberry animate-bounce' : 'text-slate-600'}`} />
                <span>{micActive ? 'Listening... Blow!' : '🎤 Microphone'}</span>
              </button>

              {/* Hold Button with Real-time Progress */}
              <button
                onPointerDown={handleHoldStart}
                onPointerUp={handleHoldEnd}
                onPointerLeave={handleHoldEnd}
                id="blow-hold-btn"
                className="relative py-3 px-3 rounded-2xl border-2 border-raspberry bg-gradient-to-r from-raspberry to-rose-600 text-white font-bold text-xs sm:text-sm flex flex-col items-center justify-center gap-1 shadow-raspberry-glow active:scale-95 transition-all overflow-hidden select-none"
              >
                {/* Hold Progress Bar Overlay */}
                <div 
                  className="absolute left-0 bottom-0 top-0 bg-white/35 transition-all duration-75 pointer-events-none"
                  style={{ width: `${holdProgress}%` }}
                />

                <Wind className="w-5 h-5 animate-pulse text-white z-10" />
                <span className="z-10 font-bold">
                  {isHolding ? `Blowing (${holdProgress}%)` : '💨 Press & Hold'}
                </span>
              </button>
            </div>
          </>
        ) : (
          /* Wish Granted Celebration Card */
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="py-1 flex flex-col items-center space-y-2"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-sm">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#38213D]">
              All Candles Blown! 🎂
            </h3>
            <p className="font-handwriting text-2xl text-raspberry font-bold">
              "{birthdayConfig.screen4.successText}"
            </p>
            <button
              onClick={onCompleted}
              id="wish-granted-next-btn"
              className="mt-1 w-full py-3 px-6 rounded-full bg-gradient-to-r from-raspberry to-rose-600 text-white font-bold text-sm shadow-raspberry-glow flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all"
            >
              <span>See Final Celebration 🎉</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}

      </div>

    </div>
  );
}
