import { nanoid } from 'nanoid';
import React from 'react';
import { IBooks } from '../../types/Books';
import BookCard from '../BookCard/BookCard';
import styles from './BookList.module.scss';

interface BookListProps {
  books: IBooks;
}

const BookList = ({ books }: BookListProps): JSX.Element => {
  return (
    <div>
      <div className={styles.bookList}>
        {books.items.map((book) => (
          <BookCard key={nanoid()} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
