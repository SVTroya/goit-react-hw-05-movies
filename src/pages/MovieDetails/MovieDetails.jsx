import {
  BackLink,
  MovieInfoWrapper,
  MovieMenu,
  Poster,
  StyledMenuLink,
  StyledMovieDetails,
} from './MovieDetails.styled';
import { Suspense, useCallback, useEffect, useState } from 'react';
import { fetchMovieData } from '../../services/moviesApi';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import movieDefaultImg from '../../images/movie.webp';
import { FaArrowLeftLong } from 'react-icons/fa6';
import {motion} from 'framer-motion'
import { animateTextFromLeft, animateTextFromRight } from '../../animations/animations';
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
          <motion.h1 initial='hidden' custom={1} whileInView='visible' variants={animateTextFromLeft}>{movieData.title}</motion.h1>
          <motion.p initial='hidden' custom={4} whileInView='visible' variants={animateTextFromRight}>User score: {movieData.score}%</motion.p>
          <motion.h2 initial='hidden' custom={6} whileInView='visible' variants={animateTextFromLeft}>Overview</motion.h2>
          <motion.p initial='hidden' custom={9} whileInView='visible' variants={animateTextFromRight}>{movieData.overview}</motion.p>
          <motion.h2 initial='hidden' custom={11} whileInView='visible' variants={animateTextFromLeft}>Genres</motion.h2>
          <motion.p initial='hidden' custom={14} whileInView='visible' variants={animateTextFromRight}>{movieData?.genres?.map(genre => genre.name).join(', ')}</motion.p>
        </MovieInfoWrapper>
      </StyledMovieDetails>
      <BackLink to={location?.state?.from || '/movie'}><FaArrowLeftLong  /> Go back</BackLink>
      <hr style={{
        width: '100%',
        textAlign: 'center',
      }} />
      <MovieMenu>
        <StyledMenuLink to='cast' state={{ from: location?.state?.from || '/movie'}}>Cast</StyledMenuLink>
        <StyledMenuLink to='reviews' state={{ from: location?.state?.from || '/movie'}}>Reviews</StyledMenuLink>
      </MovieMenu>
      <hr style={{
        width: '100%',
        textAlign: 'center',
      }} />
      <Suspense fallback={<h2>Loading movie suspense</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieDetails
