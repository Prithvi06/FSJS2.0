const MovieCard = ({ movieData }) => {
  return (
    <div className="meal-card">
      {movieData.length > 0 ? (
        movieData.map((movie) => <div className="card" key={movie.imdbID}>
                  <img src={movie.Poster} className="movietheme" alt="moviw thumb"></img>
                  <div className="movie-info">
                    <h3>Title:</h3>
                    <p><b>{movie.Title}</b></p>
                  </div>
                  <div className="movie-info">
                    <h3>Year:</h3>
                    <p><b>{movie.Year}</b></p>
                  </div>
                </div>
              )
      ) : (
        <h2>No data</h2>
      )}
    </div>
  );
};

export default MovieCard;
