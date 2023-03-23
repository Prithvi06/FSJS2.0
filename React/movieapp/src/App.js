import React, { useState } from 'react';
import MovieCard from './components/Card';

function App() {
  const [movieName, setmovieName] = useState('');
  const [movieData, setMovieData] = useState([]);

  const handleMovieNameChange = (e) => {
    setmovieName(e.target.value);
  };

  const searchMovie = (e) => {
    e.preventDefault();
    fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=123e5896`)
      .then((response) => response.json())
      .then((data) => {
        setMovieData(data.Search);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="input-div">
        <form>
          <input
            type="text"
            className="movie-input"
            placeholder="Search your movie"
            onChange={handleMovieNameChange}
          />

          <button onClick={searchMovie} className="search-btn">
            Search
          </button>
        </form>
      </div>

      <MovieCard movieData={movieData} />
    </>
  );
}

export default App;
