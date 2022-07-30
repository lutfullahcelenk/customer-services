import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice"
import dashboardReducer from "../features/dashboardSlice"

export const store = configureStore({
  reducer: {
    auth : authReducer,
    dashboard : dashboardReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
