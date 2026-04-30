import { getBooks } from "@/lib/data";
import React from "react";
import BookCard from "../shared/BookCard";

const Featured = async () => {
  const books = await getBooks();
  return (
    <div className="container mx-auto py-15">
      <h2 className="text-center lg:text-5xl text-3xl text-[#081f30] font-bold">
        Featured books
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 px-4 lg:px-0">
        {books.slice(0, 4).map((book) => (
          <BookCard key={book.id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Featured;
