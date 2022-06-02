import { IBook } from './Book';

export interface IBooks {
  items: IBook[];
  totalItems: number;
}

export interface BookSearchParams {
  isLocked: boolean;
  searchQuery: string;
  searchCategory: string;
  searchSorting: string;
  startIndex: number;
  maxResults: number;
}

export interface BooksSlice {
  books: IBooks;
  isLoading: boolean;
  error: string;
  bookSearchParams: BookSearchParams;
}
