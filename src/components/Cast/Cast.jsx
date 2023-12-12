import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastById } from '../../services/moviesApi';
import { CastItem, CastList, ImageWrapper } from './Cast.styled';
import maleAvatar from '../../images/man.webp'
import femaleAvatar from '../../images/woman.webp'

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
    <CastList>
      {cast.map(({ name, character, photo, gender }) => (
        <CastItem>
          <ImageWrapper>
            {/*{photo ? <img src={photo} alt={name}/> : null}*/}
            <img
              src={photo ? photo : gender === 1 ? femaleAvatar : maleAvatar}
              alt={name}
            />
          </ImageWrapper>
          <h3>{name}</h3>
          <p>({character})</p>
        </CastItem>
      ))}
    </CastList>
  )
}
