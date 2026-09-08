import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice.js";
import moviesReducer from "./movieSlice.js"

const AppStore = configureStore({

    reducer: {
        user: userReducer,
        movies: moviesReducer,
    }
});

export default AppStore;