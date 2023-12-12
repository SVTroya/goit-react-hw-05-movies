
import { PageTitle } from './Home.styled';
import { useCallback, useEffect, useState } from 'react';
import { fetchPopularMovies } from '../../services/moviesApi';
import Movies from '../Movies/Movies';

function Home() {
  const [movies, setMovies] = useState([]);

  const getData = useCallback(async () => {
    const data = await fetchPopularMovies();
    setMovies(data);
  }, []);

  useEffect(() => {
    try {
      getData();
    } catch (err) {
      console.log(err);
    }

  }, []);

  return (
    <>
      <PageTitle>Trending today</PageTitle>
      <Movies movies={movies} />
    </>
  );
}

export default Home
