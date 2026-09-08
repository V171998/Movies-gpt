import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies)

    // we are writing the below code because while we are trying to access the first
    // data in the store, but the store is  null(empty) so we were trying to acccess that empty
    // data null value we will get error so to avoid that error we have done early return
    // if the value is null return from there

    if (movies === null) return;
    const mainMovie = movies[0];
    //console.log(mainMovie);

    const { original_title, overview, id } = mainMovie;

    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    );
};

export default MainContainer;