import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: undefined,
  refreshToken: undefined,
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
    },
    userLoggedOut: (state, action) => {
      state.accessToken = undefined;
      state.refreshToken = undefined;
      state.user = undefined;
    },
  },
});

export default authSlice.reducer;
export const { userLoggedIn, userLoggedOut } = authSlice.actions;
