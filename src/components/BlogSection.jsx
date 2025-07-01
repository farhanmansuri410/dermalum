import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Why Natural Ingredients Matter in Baby Products",
    excerpt:
      "Discover the importance of choosing natural, toxin-free ingredients in your baby's daily skincare routine. We break down the science and safety behind every formula.",
    image: "/blog/blog1.webp",
    date: "June 25, 2025",
    author: "Dr. Meera Kapoor",
    slug: "natural-ingredients-baby-products",
  },
  {
    title: "5 Everyday Baby Care Habits That Parents Swear By",
    excerpt:
      "From moisturizing rituals to hair care tips, learn the top daily baby care practices that ensure healthy skin and happy moments.",
    image: "/blog/blog2.webp",
    date: "June 18, 2025",
    author: "Parenting Journal",
    slug: "baby-care-habits",
  },
  {
    title: "Understanding Diaper Rash: Causes, Prevention, and Dermalum’s Solution",
    excerpt:
      "Everything you need to know about diaper rash—from what causes it to how Dermalum's Diaper Rash Cream offers fast, effective relief.",
    image: "/blog/blog3.webp",
    date: "June 10, 2025",
    author: "Dr. Neha Sharma",
    slug: "understanding-diaper-rash",
  },
];

export default function BlogSection() {
  return (
    <section
      className="w-full bg-white py-20 px-4 sm:px-8 lg:px-20"
      aria-label="Read Educational Blog Posts on Baby Skincare"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12"
        >
          Baby Care Blog & Insights
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border hover:shadow-lg transition duration-300"
            >
              <img
                src="/Blog.webp"
                alt={post.title}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <p className="text-sm text-gray-400 mb-1">{post.date} · {post.author}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  <Link to={`/blog/${post.slug}`} className="hover:text-blue-600">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-block text-blue-600 text-sm font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* SEO Friendly Rich Content Section */}
        <div className="mt-24 text-gray-700 leading-relaxed max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Why Parents Trust Dermalum’s Baby Blog?</h3>
          <p className="mb-4">
            At Dermalum, we understand that parenting is full of questions—especially
            when it comes to your baby's health. That’s why our blog is carefully
            crafted with expert insights, backed by pediatricians and dermatologists.
          </p>
          <p className="mb-4">
            Whether you're navigating baby skincare issues, exploring gentle ingredients,
            or simply seeking parenting tips, we’ve got you covered with well-researched,
            easy-to-read articles.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Evidence-based content by certified experts</li>
            <li>Tips from real parents and professionals</li>
            <li>100% ad-free and unbiased information</li>
            <li>Updated monthly with new baby care trends</li>
          </ul>
        </div>

        <div className="text-center mt-20">
          <p className="text-gray-500">Have a question or suggestion?</p>
          <Link
            to="/contactus"
            className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
