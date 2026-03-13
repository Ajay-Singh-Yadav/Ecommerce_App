import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  mobile: string | null;
  userId: string | null;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  mobile: null,
  userId: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (
      state,
      action: PayloadAction<{ mobile: string; userId: string }>,
    ) => {
      state.mobile = action.payload.mobile;
      state.userId = action.payload.userId;
      state.isLoggedIn = true;
    },

    logoutUser: state => {
      state.mobile = null;
      state.userId = null;
      state.isLoggedIn = false;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
