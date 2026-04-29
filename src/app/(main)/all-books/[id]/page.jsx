import { getBooks } from "@/lib/data";
import Image from "next/image";
import { Button, Card, Badge } from "@heroui/react";

const BookDetailSPage = async ({ params }) => {
  const { id } = await params;
  const books = await getBooks();

  const book = books.find((book) => book.id == id);
  console.log(book);

  return (
    <div className="min-h-screen bg-white px-4 py-10 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* IMAGE SECTION */}
        <Card className="overflow-hidden rounded-2xl shadow-lg">
          {/* <Image
            src={book.image_url.trim()}
            alt={book.title}
            width={800}
            height={600}
            className="w-full h-[350px] md:h-full object-cover rounded-lg"
            priority
          /> */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]">
            <Image
              src={book.image_url.trim()}
              alt={book.title}
              fill
              sizes="(max-width: 640px) 100vw, 
           (max-width: 1024px) 50vw, 
           33vw"
              className="rounded-xl object-cover"
            />
          </div>
        </Card>

        {/* DETAILS SECTION */}
        <div className="flex flex-col justify-center">
          <Badge className="w-fit bg-pink-100 text-pink-600 px-3 py-1 rounded-full">
            {book.category}
          </Badge>

          <h1 className="text-3xl md:text-4xl font-bold text-[#081f30] mt-3">
            {book.title}
          </h1>

          <p className="text-gray-600 mt-2">
            By <span className="font-semibold">{book.author}</span>
          </p>

          <p className="text-gray-700 mt-5 leading-relaxed">
            {book.description}
          </p>

          <div className="mt-6 flex items-center gap-3">
            <span className="text-sm font-medium text-gray-600">
              Available:
            </span>
            <span className="bg-[#081f30] text-white px-3 py-1 rounded-lg text-sm">
              {book.available_quantity} copies
            </span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button className="bg-[#081f30] text-white hover:bg-[#f59e0b] transition w-full sm:w-auto">
              Borrow Book
            </Button>

            <Button
              variant="bordered"
              className="border-[#081f30] text-[#081f30] w-full sm:w-auto"
            >
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailSPage;
