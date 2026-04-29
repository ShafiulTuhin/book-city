import Image from "next/image";
import { Button, Card } from "@heroui/react";

const AboutUs = () => {
  return (
    <div className="container mx-auto py-15">
      <h2 className="text-center lg:text-5xl text-3xl text-[#081f30] font-bold">
        About Us
      </h2>
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE */}
          <div>
            <h1 className="text-2xl md:text-4xl font-bold md:mt-0 mt-10 text-[#081f30]">
              Let's know about Book City
            </h1>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Welcome to{" "}
              <span className="text-[#f59e0b] font-semibold">Book City</span>,
              your modern digital library platform where knowledge meets
              simplicity.
            </p>

            <p className="mt-3 text-gray-700 leading-relaxed">
              We provide a huge collection of books across multiple categories
              like fiction, education, technology, and self-development. Users
              can easily browse and borrow books with a smooth experience.
            </p>

            <p className="mt-3 text-gray-700 leading-relaxed">
              Our mission is to make reading accessible for everyone and build a
              strong community of learners and readers.
            </p>

            <div className="mt-6">
              <Button className="bg-[#081f30] text-white hover:bg-pink-600 transition">
                Explore Books
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 gap-4">
            {/* Large image */}
            <Card className="col-span-2 overflow-hidden rounded-xl shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
                alt="Team"
                width={800}
                height={400}
                className="w-full h-56 object-cover"
              />
            </Card>

            {/* Book image 1 */}
            <Card className="overflow-hidden rounded-xl shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
                alt="Books"
                width={400}
                height={300}
                className="w-full h-40 object-cover"
              />
            </Card>

            {/* Book image 2 */}
            <Card className="overflow-hidden rounded-xl shadow-md">
              <Image
                src="https://images.pexels.com/photos/9572540/pexels-photo-9572540.jpeg"
                alt="Library"
                width={400}
                height={300}
                className="w-full h-40 object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
