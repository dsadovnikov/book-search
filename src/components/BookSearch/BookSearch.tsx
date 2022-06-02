import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { booksSlice } from '../../slices/books';
import { AppDispatch } from '../../store';
import Button, { ButtonType } from '../UI/Button/Button';
import styles from './BookSearch.module.scss';

const BookSearch = (): JSX.Element => {
  const { bookSearchParams } = useAppSelector((state) => state.booksSlice);

  const {
    setSearchQuery,
    setSearchCategory,
    setSearchSorting,
    clearList,
    setIsLocked,
  } = booksSlice.actions;
  const dispatch = useDispatch<AppDispatch>();
  const router = useNavigate();

  let searchDisabled: boolean = bookSearchParams.searchQuery ? false : true;

  const onSubmit = (e: React.FormEvent) => {
    if (!searchDisabled) {
      e.preventDefault();
      dispatch(clearList());
      dispatch(setIsLocked(false));
      router(`/books`);
    }
  };

  return (
    <form className={styles.bookSearch} onSubmit={onSubmit}>
      <div className={styles.bookSearch__container}>
        <input
          className={styles.bookSearch__input}
          value={bookSearchParams.searchQuery}
          placeholder="Search for a book"
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
        <div className={styles.bookSearch__submit}>
          <Button disabled={searchDisabled} type={ButtonType.submit}>
            Search
          </Button>
        </div>
      </div>
      <div className={styles.bookSearch__container}>
        <select
          name="category"
          value={bookSearchParams.searchCategory}
          onChange={(e) => dispatch(setSearchCategory(e.target.value))}
        >
          <option value="all">All</option>
          <option value="art">Art</option>
          <option value="biography">Biography</option>
          <option value="computers">Computers</option>
          <option value="history">History</option>
          <option value="medical">Medical</option>
          <option value="poetry">Poetry</option>
        </select>
        <select
          name="sorting"
          value={bookSearchParams.searchSorting}
          onChange={(e) => dispatch(setSearchSorting(e.target.value))}
        >
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
        </select>
      </div>
    </form>
  );
};

export default BookSearch;
