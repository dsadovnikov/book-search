import React from "react";
import { IBook } from "../../types/Book";
import styles from "./BookCard.module.scss";

interface BookCardProps {
  book: IBook;
}

const BookCard = ({ book }: BookCardProps): JSX.Element => {
  const category: string = book.volumeInfo.categories
    ? book.volumeInfo.categories[0]
    : "";
  const authors: string = book.volumeInfo.authors?.join(", ");

  return (
    <div className={styles.bookCard}>
      <img
        className={styles.bookCard__image}
        src={book.volumeInfo.imageLinks?.thumbnail}
        width={128}
        height={194}
      />
      <div className={styles.bookCard__information}>
        <p className={styles.bookCard__category}>{category}</p>
        <h3 className={styles.bookCard__title}>{book.volumeInfo.title}</h3>
        <p className={styles.bookCard__authors}>{authors}</p>
      </div>
    </div>
  );
};

export default BookCard;
