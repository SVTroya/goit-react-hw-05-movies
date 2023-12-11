import { MovieSearchForm } from './MovieSearch.styled';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export function MovieSearch() {
  return (
    <MovieSearchForm>
      <label>Movie name input</label>
      <input placeholder="Enter movie name"/>
      <button>
        <FaMagnifyingGlass/>
      </button>
    </MovieSearchForm>
  );
}
