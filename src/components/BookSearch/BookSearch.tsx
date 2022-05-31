import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../../slices/books";
import { AppDispatch } from "../../store";

const BookSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  const getBooks = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(fetchBooks(searchQuery));
  };

  return (
    <div>
      <input
        value={searchQuery}
        placeholder="Search for a book"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={getBooks}>Найти</button>
    </div>
  );
};

export default BookSearch;
