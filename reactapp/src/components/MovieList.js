import React from "react";
import Card from "./Card";
import movieData from "../components/movieData"; // Sample movie data

const MovieList = () => {
  return (
    <div className="movie-list">
      {movieData.map((movie) => (
        <Card key={movie.id} imageUrl={movie.imageUrl} />
      ))}
    </div>
  );
};

export default MovieList;
