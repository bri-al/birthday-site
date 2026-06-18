"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LoveLetter from "./components/LoveLetter";
import Gallery from "./components/Gallery";
import VideoMemories from "./components/VideoMemories";
import ReasonsLove from "./components/ReasonsLove";


import FinalSurprise from "./components/FinalSurprise";
import FloatingHearts from "./components/FloatingHearts";
import SparkleParticles from "./components/SparkleParticles";
import MusicControls from "./components/MusicControls";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("birthday-loaded");
    if (alreadySeen) {
      setLoading(false);
      return;
    }
    const timer = setTimeout(() => {
      sessionStorage.setItem("birthday-loaded", "true");
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-6xl mb-6"
            >
              ❤️
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-script text-3xl text-roseGoldLight mb-4"
            >
              Loading your surprise...
            </motion.p>
            <div className="w-48 h-1 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-full h-full rounded-full bg-gradient-to-r from-roseGold via-goldLight to-roseGold"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      <FloatingHearts count={15} />
      <SparkleParticles count={25} />
      <MusicControls />

      <main>
        <HeroSection />
        <LoveLetter />
        <Gallery />
        <VideoMemories />
        <ReasonsLove />


        <FinalSurprise />
      </main>

      <footer className="relative py-8 bg-[#1a1a2e] text-center">
        <p className="text-white/40 text-sm font-light">
          Made with infinite love, just for you. ❤️
        </p>
        <p className="text-white/20 text-xs mt-1">
          Every heartbeat in this code beats for you.
        </p>
      </footer>
    </>
  );
}
