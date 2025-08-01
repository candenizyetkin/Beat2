import "../css/styles.css";

const PLACEHOLDER = "/images/poster.png";
export default function MovieCard({ movie }) {
  const posterUrl = movie.poster_path
    ? `/images${movie.poster_path}`
    : PLACEHOLDER;

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
        className="movie-card-poster"
        src={posterUrl}
        alt={movie.title}
        onError={handleError}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div>
          <div className="movie-card-genre">
            {makeGenreUpperCase(movie.genre)}
          </div>
          <div className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
            {movie.rating}
          </div>
        </div>
      </div>
    </div>
  );
}

/*   return (
    <div key={movie.id} className="movie-card">
      <img
        className="movie-card-poster"
        src={posterUrl}
        alt={movie.title}
        onError={handleError}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div>
          <div className="movie-card-genre">
            {makeGenreUpperCase(movie.genre)}
          </div>
          <div className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
            {movie.rating}
          </div>
        </div>
      </div>
    </div>
  ); */
