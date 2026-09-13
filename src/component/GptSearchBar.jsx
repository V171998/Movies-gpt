

import React, { useRef } from 'react'
import ai from '../utils/geminiAi';
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addGptResults } from '../utils/gptSlice';

const GptSearchBar = () => {

    const dispatch = useDispatch();
    const searchText = useRef(null);

    const searchMovieTMDB = async(movie) => { 

        const data = await fetch(
          "https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",
          API_OPTIONS,
        );

        const json = await data.json();

        return json.results;
    };


    const handleGptSearchClick = async () => {
        //below line to get the value from the ref
      // console.log(searchText.current.value);

      const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        searchText.current.value +
        ". only give me names of 5 movies, comma seperated like the example resutl given ahead. Example Result : Gadar ,Sholay ,Don ,Golmal , Koi Mil GAYA ";

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: gptQuery,
      });
        
        // for await (const chunk of response) {
        //     // Prints each piece live to the console or UI
        //     console.log(chunk.text)
        //   //process.stdout.write(chunk.text);
        // }
        
     // console.log(response.text);

      const GptMovies = response.text.split(",").map((item) => item.trim());
      //console.log(GptMovies);

        //for each movie i will search the tmdb api
      const promiseArray = GptMovies.map((movie) => searchMovieTMDB(movie));

      //because it is a async operation it will return an array of multiple promises to resolve this promise we use promise.all()
      //[promise, promise,promise,promise,promise]
      const tmdbResults = await Promise.all(promiseArray);

        //console.log(tmdbResults);

        dispatch(
          addGptResults({ movieNames: GptMovies, movieResults: tmdbResults }),
        );
        

    };

    return (
        <div className="pt-[3%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12 " onSubmit={(e)=> e.preventDefault()}> 
                <input
                    ref={searchText}
                    type="text"
                    className="p-4 m-4 col-span-9"
                    placeholder="what would you like to watch today?"
                />
                <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" onClick={handleGptSearchClick}>
                    Search
                </button>
            </form>
        </div>
    )
};

export default GptSearchBar;