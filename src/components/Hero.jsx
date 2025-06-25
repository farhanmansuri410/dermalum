import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const images = [
  "/01.webp",
  "/02.webp",
  "/03.webp",
  "/04.webp",
  "/05.webp",
  "/06.webp",
];

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <section
      aria-label="Hero Section"
      className="w-full overflow-hidden bg-amber-100 mt-16"
    >
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <div className="w-full h-auto md:h-[85vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 gap-6">
              {/* Left Content */}
              <motion.div
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 text-center md:text-left py-8"
              >
                <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug">
                  Pure & Gentle Baby Care with Dermalum
                </h1>
                <p className="text-base md:text-lg text-gray-600 mb-6">
                  Nourish your baby’s delicate skin with natural ingredients like Shea Butter, Almond Oil, and Aloe Vera.
                </p>
                <a
                  href="/product"
                  className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
                >
                  Shop Now
                </a>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2"
              >
                <img
                  src={src}
                  alt={`Dermalum Baby Product ${index + 1}`}
                  className="w-full h-full object-contain max-h-[500px] mx-auto"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
