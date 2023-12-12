import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastById } from '../../services/moviesApi';
import { CastItem, CastList, ImageWrapper } from './Cast.styled';
import maleAvatar from '../../images/man.webp';
import femaleAvatar from '../../images/woman.webp';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [showNothingFoundMsg, setShowNothingFoundMsg] = useState(false);

  const getData = useCallback(async (id) => {
    const data = await fetchCastById(id);
    if (data.length === 0) {
      setShowNothingFoundMsg(true);
    }
    setCast(data);
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
      {cast.length > 0 ? (<CastList>
          {cast.map(({ name, character, photo, gender, id }) => (
            <CastItem key={id}>
              <ImageWrapper>
                <img
                  src={photo ? photo : gender === 1 ? femaleAvatar : maleAvatar}
                  alt={name}
                />
              </ImageWrapper>
              <h3>{name}</h3>
              <p>({character})</p>
            </CastItem>
          ))}
        </CastList>)
        : null}
      {showNothingFoundMsg ? <p>Sorry, we don't have information about cast</p> : null}
    </>
  );
}

export default Cast;
