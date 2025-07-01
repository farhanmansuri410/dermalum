import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const slides = [
  {
    src: "/01.webp",
    title: "Gentle Nourishment with Dermalum Baby Lotion",
    description:
      "Enriched with Shea Butter, Almond Oil, Calendula, and Aloe Vera—Dermalum Baby Lotion deeply moisturizes and protects your baby’s sensitive skin.",
  },
  {
    src: "/02.webp",
    title: "Dermalum Baby Body Wash – Mild & Refreshing",
    description:
      "Infused with Aloe Vera, Rose, and Lavender Extracts, our Baby Body Wash gently cleanses while leaving your baby’s skin soft and aromatic.",
  },
  {
    src: "/03.webp",
    title: "Complete Baby Care Set – Lotion, Wash & Shampoo",
    description:
      "Get the full range of gentle care with our natural baby lotion, shampoo, and body wash—perfect for daily nourishment and protection.",
  },
  {
    src: "/04.webp",
    title: "Total Protection – Diaper Rash, Lotion & More",
    description:
      "From Diaper Rash Cream to Baby Moisturizing Cream, give your baby total skin protection with natural ingredients like Shea Butter and Vitamin E.",
  },
  {
    src: "/05.webp",
    title: "Nourish Baby’s Hair with Dermalum Baby Shampoo",
    description:
      "Packed with Calendula, Argan Oil, Moringa, and Aloe Vera, our Baby Shampoo soothes the scalp and strengthens hair while maintaining pH 5.5 balance.",
  },
  {
    src: "/06.webp",
    title: "Hydrating Baby Moisturizing Cream with Vitamin E",
    description:
      "Lock in moisture with Almond Oil, Ceramides, Oat Lipids, and Lavender—Dermalum’s lightweight Baby Moisturizing Cream keeps skin smooth all day.",
  },
  {
    src: "/08.webp",
    title: "Dermalum Baby Massage Oil – Gentle & Nourishing",
    description:
      "Enriched with Shea Butter, Jojoba Oil, and Olive Oil—Dermalum Baby Massage Oil is crafted to deeply nourish, soothe, and protect your baby's delicate skin.",
  },
  {
    src: "/07.webp",
    title: "Dermalum Diaper Rash Cream – Instant Relief",
    description:
      "Formulated with Shea Butter, Jojoba Oil, Almond Oil, Aloe Vera, and Zinc Oxide—our Diaper Rash Cream soothes and heals baby rashes effectively.",
  },
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
      className="w-full overflow-hidden bg-[#FEFAEE] mt-16"
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
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
                  {slide.title}
                </h1>
                <p className="text-base md:text-lg text-gray-600 mb-6">
                  {slide.description}
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
                  src={slide.src}
                  alt={`Dermalum Baby Product ${index + 1}`}
                  className="w-full h-full object-contain rounded-[10%] max-h-[500px] mx-auto"
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
