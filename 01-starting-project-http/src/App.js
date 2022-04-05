import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // function fetchMoviesHandler() {
  //   fetch('https://swapi.dev/api/films/')
  // .then(response => {  
  //   return response.json();
  // })
  // .then(data => {

  // set const with useCallback method for button click
  // it allows us to add a dependency
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    // try-catch blocks
    try {
      const response = await fetch('https://swapi.dev/api/films/');

      // axios catches error codes, fetch does not
      // checking for error before parsing the data
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  // include function dependency for useEffect 
  // or will cause an infinite loop
  useEffect(() => {
    fetchMoviesHandler()
  }, [fetchMoviesHandler]);

  // const needs to be in the return block to be used
  let content = <p>Found no movies.</p>

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />
  }

  if (error) {
    content = <p>{error}</p>
  }

  if (isLoading) {
    content = <p>Loading...</p>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;