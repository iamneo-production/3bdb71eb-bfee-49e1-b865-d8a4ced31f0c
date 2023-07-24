import React from "react";
import MovieList from "./MovieList";
import "../components/HomePage";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Netflix</h1>
      <div className="movie-container">
        <h2>New Releases</h2>
        <MovieList />
      </div>
      
      {/* Add more sections for different movie categories */}
    </div>
  );
};

export default HomePage;
