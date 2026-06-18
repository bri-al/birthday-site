"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { HiHeart, HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";

const CATEGORIES = [
  { id: "all", label: "All Memories" },
  { id: "memories", label: "Memories" },
  { id: "adventures", label: "Adventures" },
  { id: "favorites", label: "Favorite Moments" },
];

const GALLERY_ITEMS = [
  { id: 2, src: "images/advan.jpeg", title: "", category: "adventures", width: 1000, height: 800 },
  { id: 4, src: "images/reson.jpeg", title: "video call on a random day", category: "favorites", width: 600, height: 900 },
  { id: 8, src: "images/reason.jpeg", title: "video call on a random day", category: "favorites", width: 800, height: 1100 },
  { id: 9, src: "images/memories/letter.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 10, src: "images/memories/link.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 11, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.05 PMc.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 12, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.05 PMd.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 13, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.05 PMxs.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 14, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.06 PM12f - Copy.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 15, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.06 PM12f.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 16, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.06 PM1j.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 17, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.06 PM233h - Copy.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 18, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.06 PM233h.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 19, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.06 PM2jd.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 20, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.06 PM3hj.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 21, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.06 PM7y - Copy.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 22, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.06 PM7y.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 23, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.06 PMc - Copy.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 24, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.06 PMc.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 25, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.06 PMhj.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 26, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.06 PMx.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 27, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.06 PMz.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 28, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.07 PMhg.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 29, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.07 PMhn.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 30, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.07 PMkl.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 31, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.07 PMw - Copy.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 32, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.07 PMw.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 33, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.07 PMz - Copy.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 34, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.07 PMz.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 35, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.08 PM - Copy.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 36, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.08 PM 3 - Copy.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 37, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.08 PM 3.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 38, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.08 PM.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 39, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.08 PM123.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 40, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.08 PM128.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 41, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.08 PM32.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 42, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.08 PM43.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 43, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.08 PM7 - Copy.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 44, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.08 PM7.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 45, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.08 PM8.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 46, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.08 PM9.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 47, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.09 PM (1).jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
  { id: 48, src: "images/memories/WhatsApp Image 2026-06-18 at 1.33.09 PM 2.jpeg", title: "Memory", category: "memories", width: 800, height: 1000 },
];

export default function Gallery() {
  const [activeCat, setActiveCat] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 0.5], ["-20%", "0%"]);

  const filtered = activeCat === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCat);

  const currentIndex = lightbox !== null ? filtered.findIndex((item) => item.id === lightbox) : -1;

  const navigate = (dir: "prev" | "next") => {
    if (currentIndex === -1) return;
    const newIndex = dir === "next"
      ? (currentIndex + 1) % filtered.length
      : (currentIndex - 1 + filtered.length) % filtered.length;
    setLightbox(filtered[newIndex].id);
  };

  return (
    <section id="gallery" ref={sectionRef} className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src="images/link.jpeg"
          alt=""
          style={{ y: bgY }}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <HiHeart className="w-8 h-8 text-roseGold mx-auto mb-4 animate-heartBeat" />
          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-roseGold mb-4">
            Your Beautiful Memories
          </h2>
          <p className="text-foreground/60 text-base sm:text-lg max-w-xl mx-auto">
            Every picture tells a story of our love
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCat === cat.id
                  ? "bg-roseGold text-white shadow-lg shadow-roseGold/20"
                  : "bg-white/60 text-foreground/70 hover:bg-roseGold/10 hover:text-roseGold border border-white/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                onClick={() => setLightbox(item.id)}
                className="break-inside-avoid cursor-pointer group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white font-medium text-sm">{item.title}</p>
                    <span className="text-white/60 text-xs capitalize">{item.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close lightbox"
            >
              <HiX className="w-6 h-6" />
            </button>

            {filtered.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); navigate("prev"); }}
                  className="absolute left-4 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label="Previous image"
                >
                  <HiChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); navigate("next"); }}
                  className="absolute right-4 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label="Next image"
                >
                  <HiChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[85vh] mx-4"
            >
              <img
                src={filtered.find((item) => item.id === lightbox)?.src}
                alt={filtered.find((item) => item.id === lightbox)?.title}
                className="w-full h-full object-contain rounded-2xl"
              />
              <p className="text-white/80 text-center mt-4 font-medium text-lg">
                {filtered.find((item) => item.id === lightbox)?.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
