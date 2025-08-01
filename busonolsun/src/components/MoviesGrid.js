import React, { useState, useEffect } from "react";
import "../css/styles.css";
import MovieCard from "./MovieCard";
import { useParams, useNavigate } from "react-router-dom";

export default function MoviesGrid({ movies }) {
  const { genre: genreParam } = useParams(); // URL’den oku
  const navigate = useNavigate();
  const [genre, setGenre] = useState("All Genres");
  const [minRating, setMinRating] = useState(1);

  useEffect(() => {
    if (genreParam) {
      // URL’de küçük harfli geldiğini varsayıyoruz, title-case’e çevir
      const pretty = genreParam[0].toUpperCase() + genreParam.slice(1);
      setGenre(pretty);
    } else {
      setGenre("All Genres");
    }
  }, [genreParam]);

  const handleGenreChange = (e) => {
    const newGenre = e.target.value;
    setGenre(newGenre);

    // Seçime göre yönlendir:
    if (newGenre === "All Genres") {
      navigate("/");
    } else {
      navigate(`/genre/${newGenre.toLowerCase()}`);
    }
  };

  const handleRatingChange = (e) => {
    setMinRating(parseInt(e.target.value, 10));
  };

  /* bu kısımlar filter için*/ /*buna router bağlanacak*/
  const matchesgGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  /*bu dinamik olacak scrollable tarzı*/

  const matchesRating = (movie) => movie.rating >= minRating;

  const filteredMovies = movies.filter(
    (movie) => matchesgGenre(movie, genre) && matchesRating(movie, minRating)
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
            <option>Thriller</option>
            <option>Animation</option>
            <option>Comedy</option>
            <option>Sci-fi</option>
          </select>
        </div>

        <div className="filter-slot">
          <label>Min Rating</label>
          <select
            className="filter-dropdown"
            value={minRating}
            onChange={handleRatingChange}
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
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
