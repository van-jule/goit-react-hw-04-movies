import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/themoviedbApi';
import Status from '../services/Status';
import styles from './MovieDetails.module.css';

export default function Cast() {
  const [actors, setActors] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState();

  const { movieId } = useParams();
  console.log({ movieId });
  const imageUrl = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2`;

  useEffect(() => {
    API.fetchActors(movieId)
      .then(data => {
        const cast = data.cast;
        setActors(cast);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, []);
  console.log(actors);

  return (
    <>
      {actors &&
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
        ))}
    </>
  );
}
