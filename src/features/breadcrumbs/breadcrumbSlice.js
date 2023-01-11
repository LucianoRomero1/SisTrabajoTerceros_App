import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    route: "/",
    name: "Home",
  },
];

export const breadcrumbSlice = createSlice({
  name: "breadcrumbs",
  initialState,
  reducers: {
    prependRoute: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { prependRoute } = breadcrumbSlice.actions;

export default breadcrumbSlice.reducer;
