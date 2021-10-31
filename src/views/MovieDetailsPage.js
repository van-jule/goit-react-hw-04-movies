import { useParams, Route, NavLink, useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PageHeading from '../components/PageHeading';
import API from '../services/themoviedbApi';
import Status from '../services/Status';
import styles from './MovieDetails.module.css';
import Cast from './Cast';
import Reviews from './Reviews';

export default function MovieDetailsPage() {
  const { url, path } = useRouteMatch();
  console.log('path', { path });
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();
  const imageUrl = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2`;

  useEffect(() => {
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
    return <p>'всё пропало, фильма нет REJECTED'</p>;
  }

  if (status === Status.RESOLVED) {
    const userScore = Number(movie.vote_average) * 10;

    return (
      <>
        <h2>{movie.title}</h2>
        <p>User score: {userScore}%</p>
        <img
          className={styles.image}
          src={`${imageUrl}${movie.backdrop_path}`}
          alt={movie.title}
        />
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <ul>Genres</ul>

        {movie.genres &&
          movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        <ul>Additional information</ul>
        <li>
          <NavLink to={`${url}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>
        </li>

        <Route path={`${path}/cast`}>
          <Cast />
        </Route>

        <Route path={`${path}/reviews`}>
          <Reviews />
        </Route>
      </>
    );
  }
}
