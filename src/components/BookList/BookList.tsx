import React from "react";
import { IBook } from "../../types/Book";
import { IBooks } from "../../types/Books";
import BookCard from "../BookCard/BookCard";

interface BookListProps {
  books: IBooks;
}

const BookList = (props: BookListProps): JSX.Element => {
  return (
    <div>
      {props.books.items.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
