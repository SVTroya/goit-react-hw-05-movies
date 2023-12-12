import {
  BackLink,
  MovieInfoWrapper,
  MovieMenu,
  Poster,
  StyledMenuLink,
  StyledMovieDetails,
} from './MovieDetails.styled';
import { useCallback, useEffect, useState } from 'react';
import { fetchMovieData } from '../../services/moviesApi';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import movieDefaultImg from '../../images/movie.webp';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});

  const location = useLocation();

  const getData = useCallback(async (id) => {
    const data = await fetchMovieData(id);
    setMovieData(data);
  }, []);

  useEffect(() => {
    try {
      getData(movieId);
    } catch (err) {
      console.log(err);
    }
  }, [movieId, getData]);



  return (
    <>
      <StyledMovieDetails>
        <Poster src={movieData.poster ? movieData.poster : movieDefaultImg} alt={movieData.title} width={300} />
        <MovieInfoWrapper>
          <h1>{movieData.title}</h1>
          <p>User score: {movieData.score}%</p>
          <h2>Overview</h2>
          <p>{movieData.overview}</p>
          <h2>Genres</h2>
          <p>{movieData?.genres?.map(genre => genre.name).join(', ')}</p>
        </MovieInfoWrapper>
      </StyledMovieDetails>
      <BackLink to={location?.state?.from}>&lt;- Go back</BackLink>
      <hr style={{
        width: '100%',
        textAlign: 'center',
      }} />
      <MovieMenu>
        <StyledMenuLink to='cast' state={{ from: location?.state?.from }}>Cast</StyledMenuLink>
        <StyledMenuLink to='reviews' state={{ from: location?.state?.from }}>Reviews</StyledMenuLink>
      </MovieMenu>
      <hr style={{
        width: '100%',
        textAlign: 'center',
      }} />
      <Outlet />
    </>
  );
}

export default MovieDetails
