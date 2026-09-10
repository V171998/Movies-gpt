

import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BG_IMG_URL } from '../utils/constant';

const GptSearch = () => {
    return (
      <div>
        <div className="absolute ">
          <img
            src={BG_IMG_URL}
            alt="background-logo"
          />
        </div>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    );
};

export default GptSearch;