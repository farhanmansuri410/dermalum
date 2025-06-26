import React from "react";
import { motion } from "framer-motion";
import { Leaf, Droplet, Flower2, HandPlatter } from "lucide-react";

const ingredients = [
  {
    name: "Shea Butter",
    description: "Deeply nourishes and protects delicate baby skin.",
    icon: <HandPlatter className="w-8 h-8 text-amber-700" />,
    alt: "Shea Butter - Natural Baby Skin Nourishment",
  },
  {
    name: "Almond Oil",
    description: "Softens, soothes, and improves skin elasticity.",
    icon: <Leaf className="w-8 h-8 text-yellow-600" />,
    alt: "Almond Oil - Gentle Moisturizer for Babies",
  },
  {
    name: "Aloe Vera",
    description: "Hydrates and calms irritated or dry skin.",
    icon: <Droplet className="w-8 h-8 text-green-500" />,
    alt: "Aloe Vera - Cooling and Hydrating Ingredient for Baby Care",
  },
  {
    name: "Calendula Extract",
    description: "Helps heal rashes, redness, and minor irritations.",
    icon: <Flower2 className="w-8 h-8 text-orange-500" />,
    alt: "Calendula Extract - Healing Herb for Baby Rashes",
  },
];

export default function IngredientsSection() {
  return (
    <section
      className="w-full bg-white py-16 px-6 md:px-12"
      aria-label="Nature’s Best Ingredients for Your Baby"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
        >
          Nature’s Best Ingredients for Your Baby
        </motion.h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-12">
          Discover the power of plant-based, dermatologist-approved ingredients that gently care for your baby's sensitive skin.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ingredients.map((item, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 rounded-xl border border-blue-100 p-6 shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <span className="sr-only">{item.alt}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
