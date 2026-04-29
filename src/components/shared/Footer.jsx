"use client";

// import { Divider } from "@heroui/react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#081f30] text-[#f59e0b] mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b  pb-6">
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

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-sm">Email: support@bookcity.com</p>
            <p className="text-sm">Phone: +880 1XXX-XXXXXX</p>
            <p className="text-sm">Location: Chattogram, Bangladesh</p>
          </div>
        </div>

        {/* Divider */}
        {/* <div className="my-6">
          <Divider className="bg-[#f59e0b]/30" />
        </div> */}

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm gap-2 mt-10">
          <p>© {new Date().getFullYear()} Book-City. All rights reserved.</p>
          <p>Built with Next.js + Hero UI</p>
        </div>
      </div>
    </footer>
  );
}
