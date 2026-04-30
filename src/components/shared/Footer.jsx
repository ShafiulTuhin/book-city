"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#081f30] text-[#f59e0b] mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b pb-6">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">Book-City</h2>
            <p className="text-sm mt-2 text-[#f59e0b]/80">
              A modern library platform where you can explore, borrow, and enjoy
              books from different categories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/all-books" className="hover:underline">
                  Books
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:underline">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:underline">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-white text-[#081f30] rounded-full hover:scale-110 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-3 bg-white text-[#081f30] rounded-full hover:scale-110 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-3 bg-white text-[#081f30] rounded-full hover:scale-110 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-3 bg-white text-[#081f30] rounded-full hover:scale-110 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-lg text-black outline-none"
              />
              <button className="bg-[#f59e0b] text-[#081f30] font-semibold py-2 rounded-lg hover:opacity-90">
                Send
              </button>
            </div>

            <div className="mt-4 text-sm text-[#f59e0b]/80">
              <p>📞 +880 1XXX-XXXXXX</p>
              <p>📍 Chattogram, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm gap-2 mt-6">
          <p>© {new Date().getFullYear()} Book-City. All rights reserved.</p>
          <p>Built with Next.js + Hero UI</p>
        </div>
      </div>
    </footer>
  );
}
