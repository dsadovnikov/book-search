import React from "react";
import { useAppSelector } from "../hooks";
import BookList from "./BookList/BookList";
import BookSearch from "./BookSearch/BookSearch";

function App() {
  const { books, isLoading, error } = useAppSelector(
    (state) => state.booksSlice
  );

  return (
    <div className="App">
      <BookSearch />
      {isLoading && <h1>Идёт загрузка...</h1>}
      {error && <h1>{error}</h1>}
      <BookList books={books} />
    </div>
  );
}

export default App;
