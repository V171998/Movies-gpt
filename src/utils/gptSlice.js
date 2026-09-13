import { createSlice } from "@reduxjs/toolkit";
import { exp } from "firebase/firestore/pipelines";
import { act } from "react";


const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
      movieNames: null,
    movieResults:null,
  },
  reducers: {
    // this is to show and hide my gpt search
    toggleGptSearchView: (state) => {
      // if it is true that will become false ,it will work like that
      state.showGptSearch = !state.showGptSearch;
    },

    addGptResults: (state, action) => {
        const { movieNames, movieResults } = action.payload;
        state.movieNames = movieNames;
        state.movieResults = movieResults;
    },
  },
});


export const { toggleGptSearchView, addGptResults } = gptSlice.actions;

export default gptSlice.reducer;