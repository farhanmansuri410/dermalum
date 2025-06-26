import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  MessageSquareText,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-gray-900 text-white pt-12 pb-6 px-6 md:px-12"
      aria-label="Website Footer"
    >
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-4 sm:grid-cols-2">
        {/* Logo + Description */}
        <div>
          <img
            src="/logo.webp"
            alt="Dermalum Baby Care Logo"
            className="h-12 mb-4"
          />
          <p className="text-sm text-gray-300">
            Dermalum – Trusted baby skincare enriched with natural ingredients.
            Safe, effective, and gentle for your little one.
          </p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Footer Navigation">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-blue-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/product" className="hover:text-blue-400 transition">
                Products
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact & Address */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1" />
              <a
                href="https://www.google.com/maps/place/Your+Location"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                Oxford Towers 139, HAL Old Airport Road Kodihalli,
                Bengaluru–560008
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a
                href="tel:+919993334562"
                className="hover:text-blue-400 transition"
              >
                +91 99933 34562
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:info@dermalum.com"
                className="hover:text-blue-400 transition"
              >
                info@dermalum.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social & Action Buttons */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 hover:text-blue-400" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 hover:text-pink-400" />
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/919993334562"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-lg transition"
            >
              <MessageSquareText className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <a
              href="https://www.google.com/search?q=dermalum+google+business+profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-blue-400 transition"
            >
              View Google Business Profile →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Dermalum Baby Care. All rights reserved. |
        Developed by{" "}
        <a
          href="https://infoytechsolutions.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Infoy Tech Solutions
        </a>
      </div>
    </footer>
  );
}
