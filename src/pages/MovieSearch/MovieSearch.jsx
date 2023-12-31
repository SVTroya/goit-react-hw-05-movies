import { MovieSearchForm } from './MovieSearch.styled';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from '../../services/moviesApi';
import Movies from '../../components/Movies/Movies';

function MovieSearch() {
  const [movieNameInput, setMovieNameInput] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showNothingFoundMsg, setShowNothingFoundMsg] = useState(false);

  const query = searchParams.get('query') ?? '';

  const getData = useCallback(async (query) => {
    const data = await fetchMoviesByQuery(query);
    if (data.length === 0) {
      setShowNothingFoundMsg(true);
    }
    setMovies(data);
  }, []);

  useEffect(() => {
    try {
      if (query.trim()) {
        getData(query);
      }
    } catch (err) {
      console.log(err);
    }
  }, [query, getData]);

  function handleSearchClick(ev) {
    ev.target.blur();
  }

  function handleSearchSubmit(ev) {
    ev.preventDefault();
    setMovies([]);
    setShowNothingFoundMsg(false);
    setSearchParams(movieNameInput.trim() ? { query: movieNameInput.trim() } : {});
    setMovieNameInput('');
  }

  return (
    <>
      <MovieSearchForm onSubmit={handleSearchSubmit}>
        <label>Movie name input</label>
        <input
          onChange={({ target }) => setMovieNameInput(target.value)}
          value={movieNameInput}
          placeholder='Enter movie name'
        />
        <button type='submit' onClick={handleSearchClick}>
          <FaMagnifyingGlass size={25} />
        </button>
      </MovieSearchForm>
      {movies.length > 0 ? <Movies movies={movies} /> : null}
      {showNothingFoundMsg ? <p>Sorry, we don't now such movie</p> : null}
    </>
  );
}

export default MovieSearch
