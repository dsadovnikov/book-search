import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import { booksSlice, fetchBooks } from '../../slices/books';
import { AppDispatch } from '../../store';
import Button, { ButtonType } from '../UI/Button/Button';
import Spinner from '../UI/Spinner/Spinner';
import styles from './LoadingSection.module.scss';

const LoadingSection = (): JSX.Element => {
  const { bookSearchParams, books, isLoading, error } = useAppSelector(
    (state) => state.booksSlice
  );

  const { setStartIndex, setIsLocked } = booksSlice.actions;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!bookSearchParams.isLocked) {
      dispatch(fetchBooks(bookSearchParams));
      dispatch(setIsLocked(true));
    }
  }, [dispatch, setIsLocked, bookSearchParams]);

  const updateStartIndex = (e: React.FormEvent<HTMLButtonElement>) => {
    const newStartIndex =
      bookSearchParams.startIndex + bookSearchParams.maxResults;
    dispatch(setIsLocked(false));
    dispatch(setStartIndex(newStartIndex));
  };

  return (
    <div className={styles.loadingSection}>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <h1>{error}</h1>
      ) : books.items.length !== 0 ? (
        <Button type={ButtonType.button} onClick={updateStartIndex}>
          Load more books
        </Button>
      ) : null}
    </div>
  );
};

export default LoadingSection;
