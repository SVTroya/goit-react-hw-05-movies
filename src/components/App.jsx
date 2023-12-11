import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { PopularMovies } from './PopularMovies/PopularMovies';
import { MovieSearch } from './MovieSearch/MovieSearch';
import { MovieDetails } from './MovieInfo/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<PopularMovies />} />
        <Route path='movie' element={<MovieSearch />} />
        <Route path='movie/:movieId' element={<MovieDetails />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
