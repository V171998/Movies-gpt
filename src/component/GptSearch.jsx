

import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BG_IMG_URL } from '../utils/constant';

const GptSearch = () => {
    return (
      <div>
        <div className="fixed   min-h-screen w-screen">
          <img
            className="h-screen object-cover"
            src={BG_IMG_URL}
            alt="background-logo"
          />
        </div>
        <div className="relative pt-[10%]">
          <GptSearchBar />
          <GptMovieSuggestion />
        </div>
      </div>
    );
};

export default GptSearch;