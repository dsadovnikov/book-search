import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import BookService from '../api/BookService';
import { BookSearchParams, BooksSlice, IBooks } from '../types/Books';

const initialState: BooksSlice = {
  bookSearchParams: {
    isLocked: true,
    searchQuery: '',
    searchCategory: 'all',
    searchSorting: 'relevance',
    startIndex: 0,
    maxResults: 20,
  },
  books: {
    items: [],
    totalItems: 0,
  },
  isLoading: false,
  error: '',
};

export const fetchBooks = createAsyncThunk(
  'books/fetchAll',
  async (props: BookSearchParams, thunkAPI) => {
    try {
      const response = await BookService.getBooks(props);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Can't fetch books");
    }
  }
);

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setIsLocked(state, action: PayloadAction<boolean>) {
      state.bookSearchParams.isLocked = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.bookSearchParams.searchQuery = action.payload;
    },
    setSearchCategory(state, action: PayloadAction<string>) {
      state.bookSearchParams.searchCategory = action.payload;
    },
    setSearchSorting(state, action: PayloadAction<string>) {
      state.bookSearchParams.searchSorting = action.payload;
    },
    setStartIndex(state, action: PayloadAction<number>) {
      state.bookSearchParams.startIndex = action.payload;
    },
    clearList(state) {
      state.books = initialState.books;
      state.bookSearchParams.startIndex = 0;
    },
  },
  extraReducers: {
    [fetchBooks.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchBooks.fulfilled.type]: (state, action: PayloadAction<IBooks>) => {
      state.isLoading = false;
      state.error = '';
      state.books.items = state.books.items.concat(action.payload.items);
    },
    [fetchBooks.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default booksSlice.reducer;
