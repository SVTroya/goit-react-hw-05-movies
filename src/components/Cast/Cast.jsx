import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastById } from '../../services/moviesApi';

export function Cast() {
  const {movieId} = useParams()
  const [cast, setCast] = useState([])

  useEffect(() => {
    async function getData(id) {
     const data = await fetchCastById(id)
      setCast(data)
    }
    try{
      getData(movieId)
    }
    catch (err) {
      console.log(err);
    }
  }, [movieId]);

  return(
    <ul>
      {cast.map(({ name, character, photo }) => (
        <div>
          {photo ? <img src={photo} alt={name} width={80}/> : null}
          <h3>{name}</h3>
          <p>{character}</p>
        </div>
      ))}
    </ul>
  )
}
