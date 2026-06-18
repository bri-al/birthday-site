"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiHeart, HiPlay, HiX } from "react-icons/hi";

const VIDEOS = [
  { id: 1, src: "/videos/celeb.mp4", title: "Celebration", description: "Abi and you during her birthday" },
  { id: 2, src: "/videos/fd.mp4", title: "Special Moments", description: "After exams party" },
  { id: 3, src: "/videos/del.mp4", title: "Beautiful Times", description: "Abi and you at socialization" },
  { id: 4, src: "/videos/WhatsApp Video 2026-06-18 at 1.33.06 PM12.mp4", title: "Memory 1", description: "Abi and you during her birthday" },
  { id: 5, src: "/videos/WhatsApp Video 2026-06-18 at 1.33.06 PM98j.mp4", title: "Memory 2", description: "Abi and you during her birthday" },
  { id: 6, src: "/videos/WhatsApp Video 2026-06-18 at 1.33.07 PM1q.mp4", title: "Memory 3", description: "Feeling proud of yourself after braiding" },
  { id: 7, src: "/videos/WhatsApp Video 2026-06-18 at 1.33.07 PMe.mp4", title: "Memory 4", description: "still in your proudness era" },
  { id: 8, src: "/videos/WhatsApp Video 2026-06-18 at 1.33.07 PMj.mp4", title: "Memory 5", description: "Random sunday" },
  { id: 9, src: "/videos/WhatsApp Video 2026-06-18 at 1.33.07 PMk.mp4", title: "Memory 6", description: "Random streak" },
  { id: 10, src: "/videos/WhatsApp Video 2026-06-18 at 1.33.07 PMq.mp4", title: "Memory 7", description: "You at socialization after convincing you" },
  { id: 11, src: "/videos/WhatsApp Video 2026-06-18 at 1.33.08 23.mp4", title: "Memory 8", description: "still in your proudness era" },
  { id: 12, src: "/videos/WhatsApp Video 2026-06-18 at 1.33.08 PM7.mp4", title: "Memory 9", description: "looking cute now" },
];

export default function VideoMemories() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section id="videos" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/gallary.jpeg"
          alt=""
          className="w-full h-full object-cover object-[center_70%]"
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
            Video Memories
          </h2>
          <p className="text-foreground/60 text-base sm:text-lg max-w-xl mx-auto">
            Moving pictures that capture the essence of our love
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {VIDEOS.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              onClick={() => setActiveVideo(video.id)}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="aspect-video bg-gradient-to-br from-roseGold/20 to-goldLight/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl"
                    >
                      <HiPlay className="w-7 h-7 text-roseGold ml-0.5" />
                    </motion.div>
                  </div>
                </div>
                <div className="p-5 bg-white/70 backdrop-blur-sm">
                  <h3 className="font-serif text-lg text-foreground font-semibold">{video.title}</h3>
                  <p className="text-foreground/60 text-sm mt-1">{video.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setActiveVideo(null)}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close video"
            >
              <HiX className="w-6 h-6" />
            </button>

            <motion.div
              key={activeVideo}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            >
              <video
                src={VIDEOS.find((v) => v.id === activeVideo)?.src}
                controls
                autoPlay
                className="w-full h-full rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
