import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type User = {
  username: string;
  email: string;
  token: string;
};

type AuthState = {
  user: User | null;
};

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    LoginSucess: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },

    Logout: (state) => {
      state.user = null;
    },
  },
});

export const { LoginSucess, Logout } = authSlice.actions;

export default authSlice.reducer;
