import React from "react";
import { motion } from "framer-motion";
import { Baby, Leaf, ShieldCheck, PackageCheck, Smile } from "lucide-react";
import AboutHero from "../components/AboutHero";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Section = ({ icon: Icon, title, children }) => (
  <motion.div
    variants={fadeInUp}
    className="flex flex-col sm:flex-row gap-4 mb-10"
  >
    <div className="flex-shrink-0">
      <Icon className="text-blue-600 w-10 h-10" />
    </div>
    <div>
      <h2 className="text-2xl font-semibold text-blue-700 mb-2">{title}</h2>
      <p className="text-gray-700 text-base leading-relaxed">{children}</p>
    </div>
  </motion.div>
);

export default function AboutUs() {
  return (
    <section className="bg-white text-gray-800 pt-8 pb-10 sm:pt-12 sm:pb-14 px-4 sm:px-6 lg:px-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        <AboutHero />

        <Section icon={Leaf} title="Our Focus">
          Dermalum specializes in clean, plant-based personal care products for
          babies and teens. We’re committed to toxin-free skincare, avoiding
          harmful chemicals like parabens and sulfates.
        </Section>

        <Section icon={Baby} title="Our Audience">
          We serve the pediatric age group—infants, toddlers, children, and
          teenagers—developing gentle products tailored for their sensitive skin
          and hair.
        </Section>

        <Section icon={PackageCheck} title="Our Products">
          Our range includes Baby Lotion, Moisturizing Cream, Shampoo, Body
          Wash, Massage Oil, and Diaper Rash Cream. All made with natural oils
          like Shea Butter, Almond Oil, and Aloe Vera.
        </Section>

        <Section icon={ShieldCheck} title="Certifications & Safety">
          Dermalum products are certified by{" "}
          <strong>Safe Cosmetics FDCA</strong>, meeting strict safety standards.
          Our commitment to clean beauty helps parents trust every ingredient.
        </Section>

        <motion.div variants={fadeInUp} className="text-center mt-14">
          <Smile className="mx-auto mb-4 text-green-500 w-10 h-10" />
          <p className="text-lg text-gray-600">
            Trusted by parents. Loved by babies. Inspired by nature.
          </p>
        </motion.div>
      </motion.div>
     
    </section>
  );
}
