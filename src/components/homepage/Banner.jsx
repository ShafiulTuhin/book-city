import { Button } from "@heroui/react";
import "animate.css";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
        }}
      />

      {/* Overlay (dark gradient for readability) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/70 to-[#f59e0b]/40" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight animate__animated animate__fadeInUp">
          Find Your Next Read
        </h1>

        <p className="text-sm md:text-lg text-gray-200 mb-6 animate__animated animate__fadeInRight animate__delay-1s">
          A library is a quiet sanctuary of knowledge, acting as a vital
          repository of books, journals, and digital resources that satisfy
          intellectual curiosity.
        </p>

        <Link href={"/all-books"}>
          {" "}
          <Button
            size="lg"
            className="bg-[#f59e0b] text-white font-bold font-semibold px-6 py-3 rounded-xl hover:bg-[#d97706] transition"
          >
            Browse Now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
