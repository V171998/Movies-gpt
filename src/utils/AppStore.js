import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice.js";
import moviesReducer from "./movieSlice.js"
import gptReducer from "./gptSlice.js"
const AppStore = configureStore({

    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt:gptReducer,
    }
});

export default AppStore;