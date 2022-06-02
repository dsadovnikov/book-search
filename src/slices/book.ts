import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import BookService from '../api/BookService';
import { BookSlice, IBook } from '../types/Book';

const initialState: BookSlice = {
  book: {
    id: '',
    volumeInfo: {
      title: '',
      subtitle: '',
      authors: [],
      description: '',
      categories: [],
      imageLinks: { thumbnail: '' },
    },
  },
  isLoading: false,
  error: '',
};

export const fetchBookById = createAsyncThunk(
  'book/fetchBookById',
  async (id: string | undefined, thunkAPI) => {
    try {
      const response = await BookService.getBookById(id);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Can't fetch books");
    }
  }
);

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBookById.pending.type]: (state) => {
      state.book = initialState.book;
      state.isLoading = true;
    },
    [fetchBookById.fulfilled.type]: (state, action: PayloadAction<IBook>) => {
      state.isLoading = false;
      state.error = '';
      state.book = action.payload;
    },
    [fetchBookById.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default bookSlice.reducer;
