import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const productOptions = [
  "Baby Lotion",
  "Baby Body Wash",
  "Baby Shampoo",
  "Diaper Rash Cream",
  "Moisturizing Cream",
  "Baby Care Combo",
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_8m4bd56",     
        "template_9htt0wd",    
        formData,
        "aWZIZnLW7CK8ik5xY"    
      )
      .then(
        () => {
          alert("Thank you for contacting Dermalum Baby Care!");
          setFormData({ name: "", phone: "", product: "", email: "", message: "" });
        },
        (error) => {
          alert("Oops! Something went wrong, please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="bg-gradient-to-br from-pink-50 to-blue-100 py-16 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-3">
            Get in Touch with Dermalum Baby Care
          </h2>
          <p className="text-gray-700 text-base sm:text-lg">
            Have questions about our products? Want to place an order? Send us a message and we’ll get back to you soon.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Product Dropdown */}
          <div>
            <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
              Interested Product
            </label>
            <select
              name="product"
              id="product"
              required
              value={formData.product}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled hidden>Select a Product</option>
              {productOptions.map((prod, idx) => (
                <option key={idx} value={prod}>{prod}</option>
              ))}
            </select>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 py-3 text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition duration-300"
            >
              Submit
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
