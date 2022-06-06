import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Book from '../pages/Book';
import Books from '../pages/Search';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/search" element={<Books />} />
      <Route path="/books/:id" element={<Book />} />
      <Route path="*" element={<Books />} />
    </Routes>
  );
};

export default AppRouter;
