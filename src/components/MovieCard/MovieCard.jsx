import { ImageWrapper, MovieLink, MovieTitle, MovieItem } from './MovieCard.styled';
import movieDefaultImg from '../../images/movie.webp';
import { useLocation } from 'react-router-dom';

function MovieCard({ id, title, poster }) {
  const location = useLocation();

  return (
    <MovieItem>
      <MovieLink to={`/movie/${id}`} state={{ from: location }}>
        <ImageWrapper>
          <img src={poster ? poster : movieDefaultImg} alt={title} />
        </ImageWrapper>
        <MovieTitle>{title}</MovieTitle>
      </MovieLink>
    </MovieItem>
  );
}

export default MovieCard
