import { configureStore } from "@reduxjs/toolkit";
import blogsApi from "./services/blogsApi";

const store = configureStore({
    reducer: {
        [blogsApi.reducerPath]: blogsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(blogsApi.middleware),
})

export default store;