import { MovieList, PageTitle } from './PopularMovies.styled';
import { PopularMovieCard } from '../PopularMovieCard/PopularMovieCard';
import { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../../services/moviesApi';

export function PopularMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      async function getData() {
        const data = await fetchPopularMovies();
        setMovies(data);
      }

      getData();
    } catch (err) {
      console.log(err);
    }

  }, []);

  return (
    <>
      <PageTitle>Trending today</PageTitle>
      <MovieList>
        {movies.map(movie => (
          <PopularMovieCard key={movie.id} id={movie.id} poster={movie.poster} title={movie.title} />
        ))}
      </MovieList>
    </>
  );
}
