"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiHeart } from "react-icons/hi";

const REASONS = [
  { id: 1, title: "Your Smile", text: "Your smile turns ordinary moments into my favorite memories. No matter how my day goes, seeing you smile makes everything feel right again.", image: "/images/graduation.jpeg" },
  { id: 2, title: "Your Kindness", text: "Your kindness is one of the things I admire most about you. The way you care for people, even in the smallest moments, shows how beautiful your heart truly is, and it makes me love you even more every day.", image: "/images/letter.jpeg" },
  { id: 3, title: "Your Laughter", text: "Your laughter is my favorite sound in the world. It fills every room with joy and makes even the simplest moments unforgettable.", image: "/images/gallary.jpeg" },
  { id: 4, title: "Your Strength", text: "You face challenges with courage and grace. Your strength amazes me, and it reminds me that no obstacle is too great when you believe in yourself.", image: "/images/link.jpeg" },
  { id: 5, title: "Your Eyes", text: "Your eyes tell stories words never could. Every time I look into them, I find comfort, warmth, and a place I never want to leave.", image: "/images/memories/WhatsApp Image 2026-06-18 at 1.33.05 PMxs.jpeg" },
  { id: 6, title: "Your Voice", text: "Your voice has a way of calming my mind and brightening my day. It's a melody I could listen to forever.", image: "/images/memories/WhatsApp Image 2026-06-18 at 1.33.06 PM12f - Copy.jpeg" },
  { id: 7, title: "Your Hugs", text: "Your hugs feel like home. In your arms, I find peace, comfort, and a happiness that words can't fully describe.", image: "/images/advan.jpeg" },
  { id: 8, title: "Your Dreams", text: "I love how passionately you chase your dreams. Your ambition and determination inspire me to become a better person every day.", image: "/images/memories/WhatsApp Image 2026-06-18 at 1.33.05 PMc.jpeg" },
  { id: 9, title: "Your Spirit", text: "Your beautiful spirit shines through everything you do. Your energy, kindness, and authenticity make the world a brighter place, and my life infinitely better.", image: "/images/memories/WhatsApp Image 2026-06-18 at 1.33.05 PMd.jpeg" },
];

export default function ReasonsLove() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section id="reasons" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/reason.jpeg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <HiHeart className="w-8 h-8 text-roseGold mx-auto mb-4 animate-heartBeat" />
          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-roseGold mb-4">
            Reasons I Love You
          </h2>
          <p className="text-foreground/60 text-base sm:text-lg max-w-xl mx-auto">
            Tap each card to discover another reason why you mean the world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setFlipped(flipped === reason.id ? null : reason.id)}
              className="cursor-pointer perspective-[1000px] h-48 sm:h-56"
            >
              <motion.div
                animate={{ rotateY: flipped === reason.id ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="relative w-full h-full preserve-3d"
              >
                <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/40 shadow-lg hover:shadow-xl transition-shadow duration-300 backface-hidden">
                  <img src={reason.image} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 flex flex-col items-center justify-center p-6">
                    <HiHeart className="w-8 h-8 text-roseGold mb-3 animate-heartBeat" />
                    <span className="text-4xl sm:text-5xl font-serif text-white/20 absolute top-3 right-4">
                      {String(reason.id).padStart(2, "0")}
                    </span>
                    <p className="font-serif text-lg sm:text-xl text-white font-semibold text-center drop-shadow-lg">
                      {reason.title}
                    </p>
                    <p className="text-white/60 text-xs mt-2">Tap to reveal</p>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-roseGold to-roseGoldDark p-6 shadow-xl flex flex-col items-center justify-center backface-hidden rotateY-180 border border-white/10">
                  <HiHeart className="w-6 h-6 text-white/80 mb-3" />
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed text-center">
                    {reason.text}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
