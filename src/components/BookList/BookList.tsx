import { nanoid } from "nanoid";
import React from "react";
import { IBooks } from "../../types/Books";
import BookCard from "../BookCard/BookCard";
import styles from "./BookList.module.scss";

interface BookListProps {
  books: IBooks;
}

const BookList = (props: BookListProps): JSX.Element => {
  return (
    <div className={styles.bookList}>
      {props.books.items.map((book) => (
        <BookCard key={nanoid()} book={book} />
      ))}
    </div>
  );
};

export default BookList;
