import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import API from '../services/themoviedbApi';
import Status from '../services/Status';
import styles from './MovieDetails.module.css';

export default function Cast() {
  const location = useLocation();

  console.log('Cast location', location);
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

  return (
    <>
      {actors && (
        <>
          <h2 className={styles.title}>Cast</h2>
          <ul className={styles.gallery}>
            {actors.map(actor => {
              const actorAvatar = actor?.profile_path
                ? `${imageUrl}${actor.profile_path}`
                : `https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png`;

              return (
                <li key={actor.id} className={styles.item}>
                  <img
                    className={styles.actorImage}
                    src={actorAvatar}
                    alt={actor.name}
                  />{' '}
                  <p>{actor.name}</p>
                  <p>Character: {actor.character}</p>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}
