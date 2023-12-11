import { MovieInfoWrapper, MovieMenu, Poster, StyledMenuLink, StyledMovieDetails } from './MovieDetails.styled';
import { useEffect, useState } from 'react';
import { fetchMovieData } from '../../services/moviesApi';
import { Outlet, useParams } from 'react-router-dom';

export function MovieDetails() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    async function getData(id) {
      const data = await fetchMovieData(id);
      setMovieData(data);
    }

    try {
      getData(movieId);
    } catch (err) {
      console.log(err);
    }
  }, [movieId]);

  return (
    <>
      <StyledMovieDetails>
        <Poster src={movieData.poster} alt={movieData.title} width={300} />
        <MovieInfoWrapper>
          <h1>{movieData.title}</h1>
          <p>User score: {movieData.score}%</p>
          <h2>Overview</h2>
          <p>{movieData.overview}</p>
          <h2>Genres</h2>
          <p>{movieData?.genres?.map(genre => genre.name).join(', ')}</p>
        </MovieInfoWrapper>
      </StyledMovieDetails>
      <hr style={{
        width: '100%',
        textAlign: 'center',
      }} />
      <MovieMenu>
        <StyledMenuLink to='cast'>Cast</StyledMenuLink>
        <StyledMenuLink to='reviews'>Reviews</StyledMenuLink>
      </MovieMenu>
      <hr style={{
        width: '100%',
        textAlign: 'center',
      }} />
      <Outlet />
    </>
  );
}
