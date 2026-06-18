"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiHeart } from "react-icons/hi";

export default function LoveLetter() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const cardRotate = useTransform(scrollYProgress, [0, 0.3], [15, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 1, 1]);
  const cardY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  return (
    <section
      id="love-letter"
      ref={sectionRef}
      className="relative min-h-screen py-20 sm:py-32 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/letter.jpeg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <HiHeart className="w-8 h-8 text-roseGold mx-auto mb-4 animate-heartBeat" />
          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-roseGold mb-4">
            MI AMOR
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-roseGold to-transparent mx-auto" />
        </motion.div>

        <motion.div
          style={{
            rotateX: cardRotate,
            opacity: cardOpacity,
            y: cardY,
          }}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 md:p-16 shadow-[0_20px_80px_rgba(183,110,121,0.15)] border border-white/40"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-roseGold via-goldLight to-roseGold rounded-t-3xl" />

            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-roseGold/20 to-goldLight/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-roseGold/20 to-goldLight/20 rounded-full blur-xl" />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1.5 }}
        >
          <p className="font-script text-2xl sm:text-3xl text-roseGold mb-6 text-center">
            My Dearest Cerlyne,
          </p>

          <div className="space-y-5 text-foreground/80 leading-relaxed text-base sm:text-lg">
            <p>
              Today is all about you.
            </p>
            <p>
              As you celebrate another beautiful year of life, I want you to know how grateful I am
              that you exist and that I get to love someone as amazing as you.
            </p>
            <p>
              You came into my life and changed it in ways I never imagined. You brought joy to my
              ordinary days, peace to my restless moments, and love to places in my heart I didn't
              know needed healing. Being with you has made life more meaningful, more exciting, and
              infinitely more beautiful.
            </p>
            <p>
              Your smile brightens my darkest days. Your laughter is a sound I never get tired of hearing.
            </p>
            <p>
              Thank you for every conversation, every memory, every shared dream, and every moment
              we've spent together. Whether we're laughing about something silly or simply enjoying
              each other's company, those moments mean more to me than words can express.
            </p>
            <p>
              I love the person you are today, and I'm excited for the incredible person you're
              becoming tomorrow. Never stop believing in yourself, because you are capable of amazing
              things, and I'll always be cheering you on.
            </p>
            <p>
              On your birthday, my wish is simple: that you feel as loved, appreciated, and special
              as you truly are. You deserve all the happiness, success, and beautiful moments this
              world has to offer.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-roseGold/10 text-center">
            <p className="font-script text-2xl text-roseGold mb-2">Happy Birthday, Babe</p>
          </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2"
            >
              <HiHeart className="w-6 h-6 text-roseGold animate-heartBeat" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
