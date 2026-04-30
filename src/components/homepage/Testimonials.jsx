"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    name: "Rahim Ahmed",
    role: "Student",
    message:
      "Book City helped me discover amazing novels I never knew existed. Super smooth experience!",
  },
  {
    image:
      "https://images.pexels.com/photos/33464097/pexels-photo-33464097.png",
    name: "Nusrat Jahan",
    role: "Teacher",
    message:
      "The UI is beautiful and easy to use. Ordering books has never been this simple!",
  },
  {
    image: "https://images.pexels.com/photos/3777557/pexels-photo-3777557.jpeg",
    name: "Tanvir Hasan",
    role: "Entrepreneur",
    message:
      "Fast delivery and great collection. Book City is now my go-to book store.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate__animated animate__fadeInDown">
          What Our Readers Say 📚
        </h2>

        <p className="text-gray-500 mb-12 animate__animated animate__fadeInUp">
          Real feedback from Book City users
        </p>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 animate__animated animate__fadeInUp`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <Image
                src={t.image}
                alt={t.name}
                width={50}
                height={80}
                className="rounded-full mx-auto object-cover mb-5"
              />
              <p className="text-gray-600 mb-4">“{t.message}”</p>

              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>

              <h4 className="font-semibold text-gray-800">{t.name}</h4>
              <p className="text-sm text-gray-400">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
