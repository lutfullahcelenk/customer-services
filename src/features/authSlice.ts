import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    name: "",
    email: "",
    password: "",
    loggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.name = action.payload.fullName;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.loggedIn = action.payload.loggedIn;
    },

    logout: (state) => {
      state.name = "";
      state.email = "";
      state.password = "";
      state.loggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
