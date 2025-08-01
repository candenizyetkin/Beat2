import React, { useState } from "react";
import "../css/styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid({ movies }) {
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  /* bu kısımlar filter için*/ /*buna router bağlanacak*/
  const matchesgGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  /*bu dinamik olacak scrollable tarzı*/
  const matchesRating = (movie, rating) => {
    switch (rating) {
      case "All":
        return true;

      case "Good":
        return movie.rating >= 8;

      case "Ok":
        return movie.rating < 8 && movie.rating >= 6;

      case "Bad":
        return movie.rating < 6;
      default:
        return false;
    }
  };

  const filteredMovies = movies.filter(
    (movie) => matchesgGenre(movie, genre) && matchesRating(movie, rating)
  );

  return (
    <div>
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenreChange}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Horror</option>
            <option>Fantasy</option>
          </select>
        </div>

        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingChange}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  );
}
