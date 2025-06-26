import React from "react";
import { motion } from "framer-motion";

export default function ProductHero() {
  return (
    <section
      className="w-full bg-amber-50 pt-24 pb-16 px-6 md:px-12"
      aria-label="Baby Skincare Product Hero Section"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Discover Gentle Baby Skincare Essentials
          </h1>
          <p className="text-base md:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
            From nourishing lotions to protective rash creams — explore our dermatologist-recommended baby care range made with natural ingredients like Shea Butter, Aloe Vera, and Almond Oil.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src="/baby-hero.webp"
            alt="Smiling baby representing healthy skin after using Dermalum baby care products"
            className="w-full max-w-sm h-auto object-contain"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
