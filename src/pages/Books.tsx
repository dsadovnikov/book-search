import React from "react";
import BookList from "../components/BookList/BookList";
import { useAppSelector } from "../hooks";

const Books = () => {
  const { books, isLoading, error } = useAppSelector(
    (state) => state.booksSlice
  );

  return (
    <div className="App">
      {isLoading && <h1>Идёт загрузка...</h1>}
      {error && <h1>{error}</h1>}
      <BookList books={books} />
    </div>
  );
};

export default Books;
