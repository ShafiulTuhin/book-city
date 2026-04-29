import { getBooks } from "@/lib/data";
import BookCard from "../shared/BookCard";

const NewArrivals = async () => {
  const books = await getBooks();
  return (
    <div className="container mx-auto py-15">
      <h2 className="text-center lg:text-5xl text-3xl text-[#081f30] font-bold">
        New Arrivals
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        {books.slice(4, 8).map((book) => (
          <BookCard key={book.id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
