import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import API from '../services/themoviedbApi';
import Status from '../services/Status';
import styles from './MovieDetails.module.css';

export default function Reviews() {
  const location = useLocation();

  const [reviews, setReviews] = useState(null);
  const [totalReviews, setTotalReviews] = useState(0);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState();
  const { movieId } = useParams();

  const imageUrl = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2`;

  useEffect(() => {
    setStatus(Status.PENDING);

    API.fetchReviews(movieId)
      .then(data => {
        const total = data.total_results;

        // const reviews = data.results[0].content;
        setTotalReviews(total);
        setReviews(data.results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, []);

  return (
    <>
      <h2 className={styles.title}>Reviews</h2>
      {reviews ? (
        <ul className={styles.list}>
          {reviews.map(review => {
            let url = review?.author_details?.avatar_path;
            if (url) {
              url = url.includes('http')
                ? url.slice(1)
                : `${imageUrl}${review.author_details.avatar_path}`;
            }

            const userAvatar =
              url ||
              'https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png';

            return (
              <li key={review.id} className={styles.item}>
                <h2 className={styles.subtitle}>
                  Author (user name): {review.author}
                </h2>
                <img
                  className={styles.userAvatar}
                  src={userAvatar}
                  alt="user avatar"
                />
                <p>Rating: {review.author_details.rating}</p>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={styles.text}>
          "We don't have any reviews for this movie"
        </p>
      )}
    </>
  );
}
