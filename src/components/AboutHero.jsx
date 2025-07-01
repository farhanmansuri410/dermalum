import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutHero() {
  return (
    <section className="bg-white py-16 px-4 sm:px-10 lg:px-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      >
        {/* Left: Text Content */}
        <motion.div variants={fadeInUp}>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Gentle Baby Care You Can Trust
          </h1>
          <p className="text-lg text-gray-600">
            Dermalum offers a complete range of baby skincare essentials made
            from plant-based, toxin-free ingredients—ensuring gentle care and
            effective protection for your little one’s delicate skin.
          </p>
        </motion.div>

        {/* Right: Product Image */}
        <motion.div variants={fadeInUp} className="w-full">
          <img
            src="/Abouthero.webp" // Place your image here
            alt="Dermalum Baby Products Lineup"
            className="w-full max-w-full rounded-xl shadow-lg object-contain"
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
