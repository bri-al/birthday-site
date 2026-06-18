"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiHeart } from "react-icons/hi";
import ConfettiEffect from "./ConfettiEffect";

export default function FinalSurprise() {
  const [revealed, setRevealed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [textReveal, setTextReveal] = useState(false);

  useEffect(() => {
    if (!revealed) return;
    const t1 = setTimeout(() => setShowConfetti(true), 500);
    const t2 = setTimeout(() => setTextReveal(true), 1500);
    const t3 = setTimeout(() => setShowConfetti(false), 8000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [revealed]);

  return (
    <section id="surprise" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <video
          src="/videos/last .mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(183,110,121,0.3)_0%,_transparent_70%)]" />
      </div>

      <ConfettiEffect active={showConfetti} duration={7500} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="button"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="flex flex-col items-center gap-8"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <HiHeart className="w-16 h-16 text-roseGoldLight" />
              </motion.div>

              <p className="font-script text-2xl sm:text-3xl text-white/60">
                One last surprise awaits...
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setRevealed(true)}
                className="px-10 py-4 rounded-full bg-gradient-to-r from-roseGold to-roseGoldDark text-white font-medium text-lg shadow-xl shadow-roseGold/20 hover:shadow-2xl hover:shadow-roseGold/30 transition-all duration-500"
              >
                Open Your Surprise
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="surprise"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center gap-8"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.3 }}
              >
                <HiHeart className="w-20 h-20 text-roseGoldLight animate-heartBeat" />
              </motion.div>

              {textReveal && (
                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="font-serif text-4xl sm:text-5xl md:text-7xl text-white leading-tight"
                >
                  Happy Birthday,
                  <br />
                  <span className="text-gradient-gold">MI AMOR</span>
                </motion.h2>
              )}

              {textReveal && (
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed"
                >
                  This entire website was made just for you.
                  <br />
                  Every pixel, every word, every heartbeat in this page
                  <br />
                  is a reflection of my love for you.
                </motion.p>
              )}

              {textReveal && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="font-script text-2xl sm:text-3xl text-roseGoldLight mt-4"
                >
                  You are my everything. Forever and always.
                </motion.p>
              )}

              {textReveal && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2, duration: 0.8 }}
                  className="flex gap-2 mt-4"
                >
                  {["❤️", "✨", "🎂", "✨", "❤️"].map((emoji, i) => (
                    <motion.span
                      key={i}
                      animate={{ y: [0, -8, 0] }}
                      transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
                      className="text-2xl"
                    >
                      {emoji}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
