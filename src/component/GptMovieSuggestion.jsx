import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {

    const gpt = useSelector(Store => Store.gpt);
    const { movieNames, movieResults } = gpt;
    
    if (!movieNames) return null;
    if (!movieResults) return null;

    return (
      <div
        className="p-4 m-4 bg-black relative z-30 text-white "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      >
        <div>
          {movieNames.map((movieName, index) => (
            <MovieList
              key={movieName}
              title={movieName}
              movies={movieResults[index]}
            />
          ))}
        </div>
      </div>
    );
};

export default GptMovieSuggestion;