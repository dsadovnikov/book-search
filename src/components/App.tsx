import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import BookSearch from './BookSearch/BookSearch';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <BookSearch />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
