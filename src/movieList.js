import React from "react";
import MovieCard from "./movieCard";

function MovieList(props) {
  const { movies, addStars, subStars, favo, cart } = props;
  return (
    <>
      {movies.map((movie) => (
        <MovieCard
          movies={movie}
          addStars={addStars}
          subStars={subStars}
          favo={favo}
          cart={cart}
          key={movie.id}
        />
      ))}
    </>
  );
}

export default MovieList;
