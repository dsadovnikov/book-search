import React from 'react';
import BookList from '../components/BookList/BookList';
import LoadingSection from '../components/LoadingSection/LoadingSection';
import { useAppSelector } from '../hooks';

const Books = (): JSX.Element => {
  const { books } = useAppSelector((state) => state.booksSlice);

  return (
    <div>
      <BookList books={books} />
      <LoadingSection />
    </div>
  );
};

export default Books;
