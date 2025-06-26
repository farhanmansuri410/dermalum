import React from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  ShieldCheck,
  TestTube2,
  Droplet,
  Eraser,
} from "lucide-react"; // optional icon set

const features = [
  {
    icon: <Leaf className="w-8 h-8 text-green-600" />,
    title: "Natural & Safe Ingredients",
    description:
      "Formulated with nature-derived oils and extracts to protect and nourish baby skin.",
  },
  {
    icon: <TestTube2 className="w-8 h-8 text-pink-500" />,
    title: "Pediatrician-Recommended",
    description:
      "Approved by child-care professionals for daily use on delicate skin.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
    title: "Dermatologically Tested",
    description:
      "Clinically tested for safety, free from irritants and allergens.",
  },
  {
    icon: <Droplet className="w-8 h-8 text-purple-500" />,
    title: "pH Balanced & Hypoallergenic",
    description:
      "Gentle formulations with a pH of 5.5 to maintain healthy skin barrier.",
  },
  {
    icon: <Eraser className="w-8 h-8 text-red-500" />,
    title: "No Harsh Chemicals",
    description:
      "Absolutely free from parabens, sulphates, mineral oils, and synthetic fragrances.",
  },
];

export default function WhyChoose() {
  return (
    <section
      className="w-full bg-white py-16 px-6 md:px-12"
      aria-label="Why Parents Trust Dermalum Baby Care"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10"
        >
          Why Parents Trust Dermalum Baby Care
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-amber-50 border border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-700 text-center">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 text-center text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
