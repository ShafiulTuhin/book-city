import React from "react";

const SearchBooks = () => {
  return (
    <div className="flex w-full md:w-auto gap-2">
      <input
        type="text"
        placeholder="Search books..."
        className="px-4 py-2 border rounded-lg w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-[#081f30]"
      />
      <button className="px-5 py-2 bg-[#081f30] text-white rounded-lg hover:opacity-90">
        Search
      </button>
    </div>
  );
};

export default SearchBooks;
