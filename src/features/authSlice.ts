import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    fullName: "",
    email: "",
    password: "",
    loggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.loggedIn = action.payload.loggedIn;
    },

    logout: (state) => {
      state.fullName = "";
      state.email = "";
      state.password = "";
      state.loggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const SelectAuth = (state: RootState) => state.auth

export default authSlice.reducer;
