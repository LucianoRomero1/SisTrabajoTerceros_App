import { configureStore } from "@reduxjs/toolkit";
import breadcrumbReducer from "../features/breadcrumbs/breadcrumbSlice";

export const store = configureStore({
    reducer: {
        breadcrumbs: breadcrumbReducer
    }
});
