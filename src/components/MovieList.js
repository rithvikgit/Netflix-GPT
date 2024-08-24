import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if(movies === null) return;
  
  return (
    <div className="p-6">
      <h1 className="text-3xl px-2 py-4 text-white">  {title}</h1>
      <div className="flex overflow-x-auto ">
        <div className="flex " >
          {movies.map(movies => <MovieCard key={movies.id} posterPath={movies.poster_path}/>)}
          
        </div>
      </div>
    </div>
  );
};

export default MovieList;
