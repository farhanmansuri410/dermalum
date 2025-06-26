import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    name: "Baby Lotion",
    description: "Softening Lotion with Shea Butter & Aloe Vera",
    image: "/01.webp",
    alt: "Dermalum Baby Lotion with Shea Butter and Almond Oil",
    link: "/product/baby-lotion",
  },
  {
    name: "Baby Body Wash",
    description: "Gentle Cleanser with Aloe Vera & Lavender",
    image: "/02.webp",
    alt: "Dermalum Baby Body Wash with Aloe Vera and Lavender Extract",
    link: "/product/baby-body-wash",
  },
  {
    name: "Baby Shampoo",
    description: "Tear-Free Formula with Argan & Calendula",
    image: "/03.webp",
    alt: "Dermalum Baby Shampoo with Calendula and Argan Oil",
    link: "/product/baby-shampoo",
  },
  {
    name: "Diaper Rash Cream",
    description: "Healing Cream with Zinc Oxide & Jojoba Oil",
    image: "/07.webp",
    alt: "Dermalum Diaper Rash Cream with Shea Butter and Aloe Vera",
    link: "/product/diaper-rash-cream",
  },
  {
    name: "Moisturizing Cream",
    description: "Hydrating Cream with Vitamin E & Almond Oil",
    image: "/06.webp",
    alt: "Dermalum Baby Moisturizing Cream with Vitamin E and Almond Oil",
    link: "/product/baby-moisturizing-cream",
  },
  {
    name: "Baby Care Combo",
    description: "Complete Kit for Baby Skin & Hair Care",
    image: "/04.webp",
    alt: "Dermalum Baby Care Combo Pack with Lotion, Wash & Shampoo",
    link: "/product/baby-care-combo",
  },
];

export default function ProductRange() {
  return (
    <section
      className="w-full bg-blue-50 py-16 px-6 md:px-12"
      aria-label="Explore Our Gentle Baby Care Range"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10"
        >
          Explore Our Gentle Baby Care Range
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden transition border border-gray-100"
            >
              <img
                src={product.image}
                alt={product.alt}
                className="w-full h-64 object-contain p-6"
                loading="lazy"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-700">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                <a
                  href='/product'
                  className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
                >
                  View Product
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
