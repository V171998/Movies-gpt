import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./UserSlice.js";

const AppStore = configureStore({

    reducer: {
        user:userReducer ,
    }
})

export default AppStore;