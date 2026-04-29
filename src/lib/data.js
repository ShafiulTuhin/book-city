export const getBooks = async () => {
  const res = await fetch("https://book-city.vercel.app/books.json");
  const books = res.json();
  return books;
};
