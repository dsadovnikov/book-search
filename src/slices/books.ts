import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import BookService from "../api/BookService";
import { BooksSlice, IBooks } from "../types/Books";

const initialState: BooksSlice = {
  books: {
    items: [],
    totalItems: 0,
  },
  isLoading: false,
  error: "",
};

export const fetchBooks = createAsyncThunk(
  "books/fetchAll",
  async (searchQuery: string, thunkAPI) => {
    try {
      const response = await BookService.getBooks(searchQuery);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Can't fetch books");
    }
  }
);

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBooks.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchBooks.fulfilled.type]: (state, action: PayloadAction<IBooks>) => {
      state.isLoading = false;
      state.error = "";
      state.books = action.payload;
    },
    [fetchBooks.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default booksSlice.reducer;
