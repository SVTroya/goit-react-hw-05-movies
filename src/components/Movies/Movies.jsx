import { MovieList } from './Movies.styled';
import MovieCard from '../MovieCard/MovieCard';
import PropTypes from 'prop-types';

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    poster: PropTypes.string,
  })),
}

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
