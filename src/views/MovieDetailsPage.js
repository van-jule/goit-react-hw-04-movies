import {
  useParams,
  Route,
  NavLink,
  useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import PageHeading from '../components/PageHeading';
import API from '../services/themoviedbApi';
import Status from '../services/Status';
import styles from './MovieDetails.module.css';
import UserLoader from '../components/UserLoader';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Cast = lazy(() => import('./Cast' /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import('./Reviews' /* webpackChunkName: "reviews" */),
);

export default function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();
  const { url, path } = useRouteMatch();
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    setStatus(Status.PENDING);

    API.fetchMovieByID(movieId)
      .then(movie => {
        setMovie(movie);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  if (status === Status.IDLE) {
    return (
      <>
        <PageHeading text={`страница 1 фильма ${movieId}`}></PageHeading>
      </>
    );
  }

  if (status === Status.PENDING) {
    return <p>Загружаем</p>;
  }

  if (status === Status.REJECTED) {
    return <p>Страница не найдена</p>;
  }

  if (status === Status.RESOLVED) {
    const userScore = Number(movie.vote_average) * 10;

    const onGoBack = () => {
      history.push(location?.state?.from ?? '/');
    };

    const imageUrlEndPointPart = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2`;
    let movieImgUrl = movie?.backdrop_path;
    if (movieImgUrl) {
      movieImgUrl = movieImgUrl.includes('http')
        ? movieImgUrl.slice(1)
        : `${imageUrlEndPointPart}${movie.backdrop_path}`;
    }
    const imageUrlCorrect =
      movieImgUrl ||
      'https://www.linguahouse.com/linguafiles/md5/c1a891a2958ae7c85915f28d4aaa3da1';

    return (
      <>
        <button className={styles.button} type="button" onClick={onGoBack}>
          Go back
        </button>

        {movie && (
          <>
            <h2 className={styles.title}>{movie.title}</h2>
            <p className={styles.text}>User score: {userScore}%</p>
            <div className={styles.wrap}>
              <img
                className={styles.image}
                src={imageUrlCorrect}
                alt={movie.title}
              />
              <div className={styles.content}>
                <h3 className={styles.subtitle}>Overview</h3>
                <p>{movie.overview}</p>
                {movie.genres && (
                  <ul className={styles.list}>
                    Genres
                    {movie.genres.map(genre => (
                      <li className={styles.item} key={genre.id}>
                        {genre.name}
                      </li>
                    ))}
                  </ul>
                )}
                <ul className={styles.list}>
                  Additional information
                  <li className={styles.cast}>
                    <NavLink
                      className={styles.castLink}
                      to={{
                        pathname: `${url}/cast`,
                        state: { from: location?.state?.from ?? location },
                      }}
                    >
                      Cast
                    </NavLink>
                  </li>
                  <li className={styles.reviews}>
                    <NavLink
                      className={styles.reviewsLink}
                      to={{
                        pathname: `${url}/reviews`,
                        state: { from: location?.state?.from ?? location },
                      }}
                    >
                      Reviews
                    </NavLink>
                  </li>
                </ul>{' '}
              </div>{' '}
            </div>

            <Suspense fallback={<UserLoader />}>
              <Route path={`${path}/cast`}>
                <Cast />
              </Route>

              <Route path={`${path}/reviews`}>
                <Reviews />
              </Route>
            </Suspense>
          </>
        )}
      </>
    );
  }
}
