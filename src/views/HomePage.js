import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import styles from './MovieDetails.module.css';
import PageHeading from '../components/PageHeading';
import API from '../services/themoviedbApi';
import Status from '../services/Status';
import UserLoader from '../components/UserLoader';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function HomePage() {
  const location = useLocation();
  console.log('HomePage', location);
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState();

  useEffect(() => {
    setStatus(Status.PENDING);

    API.fetchTrendMovies()
      .then(({ results }) => {
        setMovies(results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, []);

  const imageUrl = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2`;

  if (status === Status.IDLE) {
    return (
      <>
        <PageHeading text="Популярные фильмы" />
      </>
    );
  }

  if (status === Status.PENDING) {
    return <UserLoader />;
  }

  if (status === Status.REJECTED) {
    return <p>'Страница не найдена'</p>;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <PageHeading text="Trending movies" />

        {movies && (
          <ul className={styles.gallery}>
            {movies.map(movie => {
              let movieUrl = movie?.poster_path;
              if (movieUrl) {
                movieUrl = movieUrl.includes('http')
                  ? movieUrl.slice(1)
                  : `${imageUrl}${movie.poster_path}`;
              }

              const moviePoster =
                movieUrl ||
                'https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png';

              return (
                <Link
                  to={{
                    pathname: `${url}movies/${movie.id}`,
                    state: { from: location },
                  }}
                >
                  <li key={movie.id} className={styles.item}>
                    <img
                      className={styles.moviePoster}
                      src={moviePoster}
                      alt={movie.title}
                    />
                    <h2 className={styles.subtitle}>{movie.title}</h2>
                    <p className={styles.text}>
                      Rating: {movie.vote_average}/10
                    </p>
                  </li>
                </Link>
              );
            })}
          </ul>
        )}
      </>
    );
  }
}
