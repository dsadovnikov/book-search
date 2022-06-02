import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BookList from '../components/BookList/BookList';
import { useAppSelector } from '../hooks';
import { booksSlice, fetchBooks } from '../slices/books';
import { AppDispatch } from '../store';

const Books = () => {
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
    <div className="App">
      <BookList books={books} />
      {isLoading && <h1>Идёт загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {books.items.length !== 0 && (
        <button onClick={updateStartIndex}>Load more books</button>
      )}
    </div>
  );
};

export default Books;
