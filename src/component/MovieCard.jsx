import React from 'react'
import { Image_CDN_URL } from '../utils/constant';

const MovieCard = ({ posterPath }) => {

  if (!posterPath) return null;

  return (
    <div className="w-32 sm:w-40 md:w-48 pr-2 md:pr-4 shrink-0">
      <img
        alt="Movie Card"
        src={Image_CDN_URL + posterPath}
        className="rounded-md"
      />
    </div>
  );
};

export default MovieCard;