"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiHeart, HiGlobeAlt, HiHome, HiCamera, HiAcademicCap, HiMusicalNote } from "react-icons/hi2";

const DREAMS = [
  {
    icon: HiGlobeAlt,
    title: "Travel the World",
    description: "Visit every continent together, starting with Japan's cherry blossoms, the Northern Lights in Iceland, and the Amalfi Coast in Italy.",
    gradient: "linear-gradient(135deg, #e0f0f8, #93c5fd)",
    progress: 15,
  },
  {
    icon: HiHome,
    title: "Our Forever Home",
    description: "A cozy home filled with plants, art, and warmth. A garden where we grow our own flowers and a reading nook by the window.",
    gradient: "linear-gradient(135deg, #b76e79, #8b4f5a)",
    progress: 25,
  },
  {
    icon: HiCamera,
    title: "Capture Every Moment",
    description: "Fill albums with our adventures. Learn photography together and document our journey through the years.",
    gradient: "linear-gradient(135deg, #c9a96e, #e8d5a3)",
    progress: 40,
  },
  {
    icon: HiAcademicCap,
    title: "Grow Together",
    description: "Support each other's dreams, take classes together, learn new languages, and become the best versions of ourselves.",
    gradient: "linear-gradient(135deg, #e8e0f0, #d8b4e2)",
    progress: 30,
  },
  {
    icon: HiMusicalNote,
    title: "Dance in the Kitchen",
    description: "A lifetime of cooking together, dancing while dinner burns, and creating traditions that our future family will cherish.",
    gradient: "linear-gradient(135deg, #e0f5ec, #86efac)",
    progress: 60,
  },
  {
    icon: HiHeart,
    title: "Forever Us",
    description: "Grow old together, holding hands, laughing at our memories, and loving each other more with every passing day.",
    gradient: "linear-gradient(135deg, #fce4ec, #f9a8d4)",
    progress: 100,
  },
];

export default function FutureTogether() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      id="future"
      ref={sectionRef}
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-warmWhite via-cream to-softPink" />
      <motion.div style={{ y: bgY }} className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 text-9xl text-roseGold">∞</div>
        <div className="absolute bottom-20 right-10 text-8xl text-roseGold">∞</div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <HiHeart className="w-8 h-8 text-roseGold mx-auto mb-4 animate-heartBeat" />
          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-roseGold mb-4">
            Our Future Together
          </h2>
          <p className="text-foreground/60 text-base sm:text-lg max-w-xl mx-auto">
            Dreams we'll chase, memories we'll make, a lifetime we'll share
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DREAMS.map((dream, i) => (
            <motion.div
              key={dream.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/40 h-full">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: dream.gradient }}>
                  <dream.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="font-serif text-xl text-foreground font-semibold mb-3">{dream.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-5">{dream.description}</p>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-foreground/50">
                    <span>Our journey</span>
                    <span>∞</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-roseGold/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${dream.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.5, duration: 1.2, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundImage: dream.gradient }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
