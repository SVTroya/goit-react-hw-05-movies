import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from '../../services/moviesApi';
import { Author, ReviewItem, ReviewsList } from './Reviews.styled';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
   const getData = useCallback(async (id) => {
     const data = await fetchReviewsById(id);
     setReviews(data);
     }, []);

  useEffect(() => {
    try {
      getData(movieId);
    } catch (err) {
      console.log(err);
    }
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
          <ReviewsList>
            {reviews.map(({ content, author, id }) => {
              return <ReviewItem key={id}>
                <p>{content}</p>
                <Author>{author}</Author>
              </ReviewItem>;
            })}
          </ReviewsList>)
        : <p> There is no reviews yet</p>
        }
    </>
  );
}

export default Reviews
