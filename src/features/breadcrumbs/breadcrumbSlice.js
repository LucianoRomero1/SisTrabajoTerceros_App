import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    route: "/",
    name: "Home",
    type: "Master",
  },
];

export const breadcrumbSlice = createSlice({
  name: "breadcrumbs",
  initialState,
  reducers: {
    prependRoute: (state, action) => {
      const { name, type } = action.payload;

      //Con esto NO repito el breadcrumb que estaba
      const foundBreadcrumb = state.find(
        (breadcrumb) => breadcrumb.name === name
      );
      if (foundBreadcrumb === undefined) {
        //Si es una route principal, elimino el ultimo (exceptuando el HOME, por eso valido con length) y despues pongo esto
        if (type == "Principal") {
          //Pongo 1 para indicar que arranque desde la pos1 a recortar datos, que sería después de HOME
          state.splice(1);
        }
        state.push(action.payload);
      }
    },
    removeRoutes: (state, action) => {
      return initialState;
    },
  },
});

export const { prependRoute, removeRoutes } = breadcrumbSlice.actions;

export default breadcrumbSlice.reducer;
