import React from "react";
import { Route, Routes } from "react-router-dom";
import Book from "../../pages/Book";
import Books from "../../pages/Books";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/books" element={<Books />} />
      <Route path="/books/:id" element={<Book />} />
      <Route path="*" element={<Books />} />
    </Routes>
  );
};

export default AppRouter;
