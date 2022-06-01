import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import BookDetails from "../components/BookDetails/BookDetails";
import { useAppSelector } from "../hooks";
import { fetchBookById } from "../slices/book";
import { AppDispatch } from "../store";

const Book = () => {
  const { book, isLoading, error } = useAppSelector((state) => state.bookSlice);
  const { id } = useParams<{ id?: string }>();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchBookById(id));
  }, [dispatch, id]);

  return (
    <div>
      {isLoading && <h1>Идёт загрузка...</h1>}
      {error && <h1>{error}</h1>}
      <BookDetails book={book} />
    </div>
  );
};

export default Book;
