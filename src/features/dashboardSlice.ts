import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    data: [
      {
        name: "Total Ciro",
        count: 2000,
      },
      {
        name: "Toplam Kullanıcı",
        count: 6,
      },
      {
        name: "Toplam Sipariş",
        count: 12,
      },
      {
        name: "Yeni Sipariş",
        count: 4,
      },
      {
        name: "Yolda Olan Sipariş",
        count: 4,
      },
      {
        name: "Tamamlanmış Sipariş",
        count: 4,
      },
    ],
  },
  reducers: {},
});

export const {} = dashboardSlice.actions;

export const SelectDashboard = (state: RootState) => state.dashboard.data;

export default dashboardSlice.reducer;
