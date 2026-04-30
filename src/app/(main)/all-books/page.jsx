import SearchBooks from "@/components/search/SearchBooks";
import BookCard from "@/components/shared/BookCard";
import { getBooks, getCategories } from "@/lib/data";
import Link from "next/link";

export const metadata = {
  title: "Book-City | All-Books",
  description: "",
};

const AllBooksPage = async ({ searchParams }) => {
  const books = await getBooks();
  const categories = await getCategories();
  const { category } = await searchParams;

  const filteredCategory = category
    ? books.filter(
        (book) => book.category.toLowerCase() == category.toLowerCase(),
      )
    : books;

  return (
    <div className="container mx-auto py-10">
      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* LEFT SIDEBAR */}
        <aside className="lg:col-span-1">
          <div className="sticky top-20 bg-white rounded-xl p-4 shadow-sm border">
            <h3 className="text-xl font-bold text-[#081f30] mb-4">
              Categories
            </h3>

            <div className="space-y-2">
              <Link href="/all-books">
                <button
                  className={`w-full cursor-pointer text-left px-4 py-2 rounded-lg ${
                    !category
                      ? "bg-[#081f30] text-white"
                      : "bg-gray-100 hover:bg-[#081f30] hover:text-white"
                  }`}
                >
                  All Books
                </button>
              </Link>

              {categories.map((cat) => (
                <Link
                  href={`/all-books?category=${cat.name.toLowerCase()}`}
                  key={cat.id}
                >
                  <button className="w-full text-left px-4 py-2 mt-3 rounded-lg bg-gray-100 hover:bg-[#081f30] hover:text-white transition cursor-pointer">
                    {cat.name}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <section className="lg:col-span-3">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#081f30]">
              All Books
            </h2>

            {/* Search */}
            <SearchBooks />
          </div>

          {/* Books Grid */}
          {books.length > 0 ? (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
              {filteredCategory.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 mt-20">
              No books found 📚
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default AllBooksPage;
