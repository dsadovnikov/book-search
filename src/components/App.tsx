import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import BookSearch from './BookSearch/BookSearch';

function App() {
  return (
    <BrowserRouter>
      <BookSearch />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
