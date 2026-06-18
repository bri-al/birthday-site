"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiHeart, HiMenu, HiX } from "react-icons/hi";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "love-letter", label: "Love Letter" },
  { id: "gallery", label: "Gallery" },
  { id: "videos", label: "Videos" },
  { id: "reasons", label: "Reasons" },
  { id: "surprise", label: "Surprise" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let bestId = activeSection;
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            bestId = entry.target.id;
          }
        });
        if (bestId) setActiveSection(bestId);
      },
      { threshold: [0.1, 0.3, 0.5, 0.7], rootMargin: "-80px 0px 0px 0px" }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [activeSection]);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(183,110,121,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 group">
              <HiHeart className="w-6 h-6 text-roseGold group-hover:scale-110 transition-transform duration-300" />
              <span className={`font-script text-xl sm:text-2xl transition-colors duration-300 ${
                scrolled ? "text-roseGold" : "text-white"
              }`}>
                MI AMOR
              </span>
            </button>

            <div className="hidden md:flex items-center gap-1">
              {SECTIONS.slice(0, 5).map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === s.id
                      ? "text-roseGold bg-roseGold/10"
                      : scrolled
                      ? "text-foreground/70 hover:text-roseGold hover:bg-roseGold/5"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-full transition-colors ${
                scrolled ? "text-foreground hover:bg-roseGold/10" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-72 z-50 bg-white/95 backdrop-blur-xl shadow-2xl"
          >
            <div className="flex flex-col p-6 pt-24 gap-2">
              {SECTIONS.map((s, i) => (
                <motion.button
                  key={s.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(s.id)}
                  className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    activeSection === s.id
                      ? "text-roseGold bg-roseGold/10"
                      : "text-foreground/70 hover:text-roseGold hover:bg-roseGold/5"
                  }`}
                >
                  {s.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
        />
      )}
    </>
  );
}
