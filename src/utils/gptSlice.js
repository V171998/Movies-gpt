import { createSlice } from "@reduxjs/toolkit";
import { exp } from "firebase/firestore/pipelines";


const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false
    },
    reducers: {
        // this is to show and hide my gpt search
        toggleGptSearchView: (state) => {
            // if it is true that will become false ,it will work like that 
            state.showGptSearch = !state.showGptSearch;
        }
    }
});


export const {toggleGptSearchView } = gptSlice.actions;

export default gptSlice.reducer;