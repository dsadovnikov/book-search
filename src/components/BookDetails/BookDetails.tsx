import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IBook } from '../../types/Book';
import styles from './BookDetails.module.scss';

interface BookDetailsProps {
  book: IBook;
}

const BookDetails = ({ book }: BookDetailsProps) => {
  const router = useNavigate();

  const authors: string = book.volumeInfo.authors?.join(', ');
  const categories: string = book.volumeInfo.categories?.join(', ');

  const back = (e: React.MouseEvent<HTMLButtonElement>) => {
    router(`/books`);
  };

  return (
    <div className={styles.bookDetails}>
      <div className={styles.bookDetails__imageContainer}>
        <img
          src={book.volumeInfo.imageLinks?.thumbnail}
          alt="Обложка"
          width={400}
          height={669}
        />
      </div>
      <div>
        <p>{categories}</p>
        <h1>{book.volumeInfo.title}</h1>
        <p>{authors}</p>
        <p>{book.volumeInfo.description}</p>
        <button onClick={back}>Назад</button>
      </div>
    </div>
  );
};

export default BookDetails;
