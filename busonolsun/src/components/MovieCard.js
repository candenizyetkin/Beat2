import "../css/styles.css";

export default function MovieCard({ movie }) {
  const posterUrl = "images/poster.png";

  const handleError = (e) => {
    e.target.src =
      "images/poster.png"; /* gerekli ekleme yapılacak şimdilik placeholder var*/
  };

  const getRatingClass = (rating) => {
    if (rating >= 8) {
      return "rating-good";
    }

    if (rating >= 6 && rating < 8) {
      return "rating-ok";
    }

    if (rating < 6) {
      return "rating-bad";
    }
  };

  const makeGenreUpperCase = (genre) => {
    return genre.charAt(0).toUpperCase() + genre.slice(1);
  };

  return (
    <div key={movie.id} className="movie-card">
      <img
        src={posterUrl}
        alt={movie.title}
        onError={handleError}
        className="movie-card-poster"
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div>
          <span className="movie-card-genre">
            {" "}
            {makeGenreUpperCase(movie.genre)}
          </span>
          <span className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
            {movie.rating}
          </span>
        </div>
      </div>
    </div>
  );
}
