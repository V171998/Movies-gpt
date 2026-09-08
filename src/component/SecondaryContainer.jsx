
import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    return (
      <div className="bg-black">
        <div className="-mt-50 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies} />
          <MovieList title={"Trending"} movies={movies} />
          <MovieList title={"Popular"} movies={movies} />
          <MovieList title={"old movies"} movies={movies} />
          <MovieList title={"Horror movies"} movies={movies} />
        </div>
      </div>
    );
};

export default SecondaryContainer;