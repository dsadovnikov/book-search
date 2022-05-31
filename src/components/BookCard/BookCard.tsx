import React from "react";
import { IBook } from "../../types/Book";

interface BookCardProps {
  book: IBook;
}

const BookCard = (props: BookCardProps): JSX.Element => {
  return (
    <div>
      {props.book.id}. {props.book.volumeInfo.title}
    </div>
  );
};

export default BookCard;
