"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

export default function HeroSection() {
  const scrollToLetter = () => {
    document.getElementById("love-letter")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="images/graduation.jpeg"
          alt=""
          className="w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(183,110,121,0.2)_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">

        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-script text-roseGoldLight text-xl sm:text-2xl md:text-3xl mb-4 tracking-wide"
        >
          To My Dearest Cerlyne
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight"
        >
          Happy Birthday,
          <br />
          <span className="text-gradient-gold">MI AMOR</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <p className="text-white/70 text-base sm:text-lg md:text-xl font-light leading-relaxed">
            Today, we celebrate the incredible woman you are kind, beautiful, strong, and endlessly inspiring. You deserve everything great that comes in your life, May God Bless You Beyond Measures.
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          onClick={scrollToLetter}
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-base hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-xl hover:shadow-roseGold/20"
        >
          Begin Our Journey
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <HiChevronDown className="w-5 h-5" />
          </motion.span>
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/40 text-xs tracking-widest uppercase"
        >
          <span>Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-roseGoldLight"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
