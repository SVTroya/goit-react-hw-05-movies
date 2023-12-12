import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const ACCESS_KEY = 'fde4dd89a2c817f4c4efb19732e7d4a1';
const IMG_BASE_URL = 'http://image.tmdb.org/t/p/w500';
const MOVIES_PER_PAGE = 60;

export async function fetchPopularMovies() {
  const res = await axios.get('trending/movie/day', {
    params: {
      api_key: ACCESS_KEY,
    },
  });

  return filterMoviesData(res.data.results);
}

export async function fetchMovieData(id) {
  const res = await axios.get(`/movie/${id}`, {
    params: {
      api_key: ACCESS_KEY,
    },
  });
  const { title, overview, poster_path, vote_average, genres } = res.data;

  return {
    title,
    overview,
    poster: poster_path ? IMG_BASE_URL + poster_path : null,
    score: Math.floor(vote_average * 10),
    genres,
  };
}

export async function fetchCastById(id) {
  const res = await axios.get(`/movie/${id}/credits`, {
    params: {
      api_key: ACCESS_KEY,
    },
  });

  return res.data?.cast.map(({
                               profile_path,
                               name,
                               character,
                               gender,
                               id,
                             }) => ({
    id,
    photo: profile_path ? IMG_BASE_URL + profile_path : null,
    name,
    character,
    gender,
  }));
}

export async function fetchReviewsById(id) {
  const res = await axios.get(`movie/${id}/reviews`, {
    params: {
      api_key: ACCESS_KEY,
    },
  });

  return res.data?.results;
}

export async function fetchMoviesByQuery(query) {
  const res = await axios.get('search/movie', {
    params: {
      api_key: ACCESS_KEY,
      query: query,
    },
  });

  return filterMoviesData(res.data.results);
}

function filterMoviesData(movies) {
  return movies.map(({ id, title, poster_path }) => ({
    id,
    title,
    poster: poster_path ? IMG_BASE_URL + poster_path : null,
  }));
}
