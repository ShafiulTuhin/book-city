export const getBooks = async () => {
  const res = await fetch("https://book-city.vercel.app/books.json", {
    cache: "no-store",
  });
  const books = await res.json();
  return books;
};

export const getCategories = async () => {
  const res = await fetch("https://book-city.vercel.app/category.json", {
    cache: "no-store",
  });
  const categories = await res.json();
  return categories;
};
