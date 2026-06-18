"use client";

import { motion } from "framer-motion";
import { HiHeart } from "react-icons/hi";

const COLORS: Record<string, string> = {
  Sarah: "linear-gradient(135deg, #b76e79, #8b4f5a)",
  Mom: "linear-gradient(135deg, #c9a96e, #e8d5a3)",
  Alex: "linear-gradient(135deg, #e8e0f0, #d8b4e2)",
  Emma: "linear-gradient(135deg, #e0f0f8, #93c5fd)",
  Grandma: "linear-gradient(135deg, #e0f5ec, #86efac)",
  Mike: "linear-gradient(135deg, #fce4ec, #f9a8d4)",
};

const MESSAGES = [
  {
    id: 1,
    name: "Sarah",
    relation: "Best Friend",
    message: "Happy Birthday to the most amazing person I know! Wishing you a day filled with love, laughter, and all the happiness you bring to everyone around you. Love you!",
    avatar: "S",
    colorKey: "Sarah",
  },
  {
    id: 2,
    name: "Mom & Dad",
    relation: "Parents",
    message: "From the moment you came into this world, you've been our greatest joy. Watching you grow into the incredible woman you are today fills our hearts with pride. Happy Birthday, sweetheart!",
    avatar: "M",
    colorKey: "Mom",
  },
  {
    id: 3,
    name: "Alex",
    relation: "Brother",
    message: "Happy Birthday, sis! You're not just a great sister but also an inspiration. Hope your day is as amazing as you are. Cheers to many more adventures together!",
    avatar: "A",
    colorKey: "Alex",
  },
  {
    id: 4,
    name: "Emma",
    relation: "College Friend",
    message: "So grateful for our friendship! You've been there through thick and thin, and I couldn't ask for a better friend. Have the most wonderful birthday!",
    avatar: "E",
    colorKey: "Emma",
  },
  {
    id: 5,
    name: "Grandma",
    relation: "Grandmother",
    message: "My beautiful granddaughter, you light up every room you walk into. May your birthday be filled with as much love and joy as you've given me throughout the years.",
    avatar: "G",
    colorKey: "Grandma",
  },
  {
    id: 6,
    name: "Mike",
    relation: "Childhood Friend",
    message: "From playground days to grown-up adventures, watching you flourish has been a privilege. Happy Birthday to someone who makes the world a better place!",
    avatar: "M",
    colorKey: "Mike",
  },
];

export default function FriendsFamily() {
  return (
    <section id="messages" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-softPink via-cream to-warmWhite" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <HiHeart className="w-8 h-8 text-roseGold mx-auto mb-4 animate-heartBeat" />
          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-roseGold mb-4">
            Wishes from Loved Ones
          </h2>
          <p className="text-foreground/60 text-base sm:text-lg max-w-xl mx-auto">
            Messages from the people who adore you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MESSAGES.map((msg, i) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-white/40 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-serif text-lg shadow-md"
                    style={{ backgroundImage: COLORS[msg.colorKey] }}>
                    {msg.avatar}
                  </div>
                  <div>
                    <p className="font-serif text-foreground font-semibold">{msg.name}</p>
                    <p className="text-foreground/50 text-xs">{msg.relation}</p>
                  </div>
                </div>

                <div className="flex-1 relative">
                  <span className="text-4xl text-roseGold/10 absolute -top-2 -left-1 font-serif leading-none">"</span>
                  <p className="text-foreground/70 text-sm leading-relaxed pl-4 pt-2">
                    {msg.message}
                  </p>
                  <span className="text-4xl text-roseGold/10 absolute -bottom-4 right-0 font-serif leading-none">"</span>
                </div>

                <div className="mt-4 pt-3 border-t border-roseGold/10 flex justify-end">
                  <HiHeart className="w-4 h-4 text-roseGold/40 group-hover:text-roseGold group-hover:animate-heartBeat transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
