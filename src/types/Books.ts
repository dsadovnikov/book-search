import { IBook } from "./Book";

export interface IBooks {
  items: IBook[];
  totalItems: number;
}

export interface BooksSlice {
  books: IBooks;
  isLoading: boolean;
  error: string;
}
