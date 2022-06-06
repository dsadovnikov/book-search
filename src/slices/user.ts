import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBook } from '../types/Book';
import { IUser, UserSlice, UserType } from '../types/user';

const initialState: UserSlice = {
  user: { login: '', password: '', userType: UserType.none, library: [] },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = initialState.user;
    },
    addBookToLibrary(state, action: PayloadAction<IBook>) {
      state.user.library.push(action.payload);
    },
    removeBookFromLibrary(state, action: PayloadAction<IBook>) {
      state.user.library = state.user.library.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export default userSlice.reducer;
