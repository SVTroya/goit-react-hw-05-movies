import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';

const Home = lazy(() => import('./Home/Home'));
const MovieSearch = lazy(() => import('./MovieSearch/MovieSearch'));
const MovieDetails = lazy(() => import('./MovieInfo/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path='/goit-react-hw-05-movies' element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='movie' element={<MovieSearch />} />
        <Route path='movie/:movieId' element={<MovieDetails />}>
          <Route path='cast' element={<Cast />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
