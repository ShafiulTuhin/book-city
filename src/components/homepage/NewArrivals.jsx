import { getBooks } from "@/lib/data";
import BookCard from "../shared/BookCard";
import Marquee from "react-fast-marquee";

const NewArrivals = async () => {
  const books = await getBooks();
  return (
    // <div className="container mx-auto py-15">
    //   <h2 className="text-center lg:text-5xl text-3xl text-[#081f30] font-bold">
    //     New Arrivals
    //   </h2>
    //   <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
    //     {books.slice(4, 8).map((book) => (
    //       <BookCard key={book.id} book={book}></BookCard>
    //     ))}
    //   </div>
    // </div>

    <div className="flex justify-between items-center bg-slate-200 gap-4 mt-15 container mx-auto">
      <button className=" bg-[#f59e0b] font-medium text-white w-2xs py-2">
        New Arrival:{" "}
      </button>
      <Marquee pauseOnHover={true} speed={100}>
        {books.slice(0, 4).map((book) => (
          <p key={book.id} className="me-10">
            <span className="text-[#081f30] font-bold">{book.title}</span> ||
            <span className="text-red-500">
              {" "}
              Special Discount on Memberships...
            </span>
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default NewArrivals;
