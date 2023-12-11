import { ImageWrapper, MovieLink, MovieTitle, PopularMovieItem } from './PopularMovieCard.styled';

export function PopularMovieCard({ id, title, poster }) {
  return (
    <PopularMovieItem>
      <MovieLink to={`/movie/${id}`}>
        <ImageWrapper>
          <img src={poster} alt={title} />
        </ImageWrapper>
        <MovieTitle>{title}</MovieTitle>
      </MovieLink>
    </PopularMovieItem>
  );
}
