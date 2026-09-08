import React from 'react'
import { Image_CDN_URL } from '../utils/constant';

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="Movie Card" src={Image_CDN_URL + posterPath} />
          
          
    </div>
  );
};

export default MovieCard;