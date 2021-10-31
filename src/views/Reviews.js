import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/themoviedbApi';
import Status from '../services/Status';
import styles from './MovieDetails.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const [totalReviews, setTotalReviews] = useState(0);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState();
  const { movieId } = useParams();

  console.log({ movieId });
  const imageUrl = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2`;

  useEffect(() => {
    API.fetchReviews(movieId)
      .then(data => {
        const total = data.total_results;
        console.log('total', total);

        const reviews = data.results[0].content;
        console.log('result', data);
        setTotalReviews(total);
        setReviews(data.results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, []);

  console.log('reviews', reviews);

  return (
    <>
      {/* {
      actors &&
        actors.map(actor => (
          <li key={actor.id}>
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
            <img
              className={styles.actorImage}
              src={`${imageUrl}${actor.profile_path}`}
              alt={actor.name}
            />
          </li>
        ))} */}
      {reviews
        ? reviews.map(review => (
            <li key={review.id}>
              <h2>Author (user name): {review.author}</h2>
              <p>Rating: {review.author_details.rating}</p>
              <p>{review.content}</p>
            </li>
          ))
        : "We don't have any reviews for this movie"}
    </>
  );
}
