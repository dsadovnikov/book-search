import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchBooks } from "../../slices/books";
import { AppDispatch } from "../../store";
import styles from "./BookSearch.module.scss";

const BookSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchCategory, setSearchCategory] = useState<string>("all");
  const [searchSorting, setSearchSorting] = useState<string>("relevance");

  const dispatch = useDispatch<AppDispatch>();
  const router = useNavigate();

  const getBooks = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(fetchBooks({ searchQuery, searchCategory, searchSorting }));
    router(`/books`);
  };

  return (
    <div className={styles.bookSearch}>
      <div className={styles.bookSearch__container}>
        <input
          className={styles.bookSearch__input}
          value={searchQuery}
          placeholder="Search for a book"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className={styles.bookSearch__submit} onClick={getBooks}>
          Search
        </button>
      </div>
      <div className={styles.bookSearch__container}>
        <select
          name="category"
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="art">Art</option>
          <option value="biography">Biography</option>
          <option value="computers">Computers</option>
          <option value="history">History</option>
          <option value="medical">Medical</option>
          <option value="poetry">Poetry</option>
        </select>
        <select
          name="sorting"
          value={searchSorting}
          onChange={(e) => setSearchSorting(e.target.value)}
        >
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
        </select>
      </div>
    </div>
  );
};

export default BookSearch;
