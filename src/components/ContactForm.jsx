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
        "service_8m4bd56",     // Your Service ID
        "template_9htt0wd",    // Your Template ID
        formData,
        "aWZIZnLW7CK8ik5xY"    // Your Public Key
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
    <section className="bg-gradient-to-br from-pink-50 to-blue-100 py-20 px-4" id="contact">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Get in Touch with Dermalum Baby Care
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            Have questions about our products? Want to place an order? Send us a message and we’ll get back to you soon.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl max-w-xl mx-auto shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Name */}
          <div className="relative z-0 w-full mb-8 group">
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
              className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-3 px-0 text-gray-900 focus:border-blue-600 focus:outline-none"
            />
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
          </div>

          {/* Phone */}
          <div className="relative z-0 w-full mb-8 group">
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder=" "
              className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-3 px-0 text-gray-900 focus:border-blue-600 focus:outline-none"
            />
            <label htmlFor="phone" className="form-label">
              Contact Number
            </label>
          </div>

          {/* Product Dropdown */}
          <div className="relative z-0 w-full mb-8 group">
            <select
              name="product"
              id="product"
              required
              value={formData.product}
              onChange={handleChange}
              className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-3 text-gray-900 focus:border-blue-600 focus:outline-none"
            >
              <option value="" disabled hidden>
                Select a Product
              </option>
              {productOptions.map((prod, idx) => (
                <option key={idx} value={prod}>
                  {prod}
                </option>
              ))}
            </select>
            <label htmlFor="product" className="form-label">
              Interested Product
            </label>
          </div>

          {/* Email */}
          <div className="relative z-0 w-full mb-8 group">
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
              className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-3 px-0 text-gray-900 focus:border-blue-600 focus:outline-none"
            />
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
          </div>

          {/* Message */}
          <div className="relative z-0 w-full mb-8 group">
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
              className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-3 px-0 text-gray-900 focus:border-blue-600 focus:outline-none resize-none"
            />
            <label htmlFor="message" className="form-label">
              Message
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 py-3 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-blue-800 transition duration-300"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
