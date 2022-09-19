import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const reservationSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    // methods to update state
  },
});

export default reservationSlice.reducer;
