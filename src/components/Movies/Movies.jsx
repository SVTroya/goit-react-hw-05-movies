import { MovieList } from './Movies.styled';
import MovieCard from '../MovieCard/MovieCard';

function Movies({ movies }) {

  return (
    <MovieList>
      {movies.map(movie => (
        <MovieCard key={movie.id} id={movie.id} poster={movie.poster} title={movie.title} />
      ))}
    </MovieList>

  );
}

export default Movies
