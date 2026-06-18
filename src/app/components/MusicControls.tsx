"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMusicalNote, HiPlay, HiPause } from "react-icons/hi2";

const SONG_URL = "/audio/Alex warren - Ordinary.mp3";

export default function MusicControls() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(SONG_URL);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    audioRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {});
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full glassCard flex items-center justify-center text-roseGold hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-roseGold/20"
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      <motion.div
        animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
        transition={isPlaying ? { repeat: Infinity, duration: 4, ease: "linear" } : {}}
      >
        {isPlaying ? <HiPause className="w-5 h-5" /> : <HiPlay className="w-5 h-5" />}
      </motion.div>
    </motion.button>
  );
}
