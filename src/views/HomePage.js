import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import PageHeading from '../components/PageHeading';
import API from '../services/themoviedbApi';
import Status from '../services/Status';

export default function HomePage() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState();

  useEffect(() => {
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

  if (status === Status.IDLE) {
    return (
      <>
        <PageHeading text="Домашняя страница" />
        idle
      </>
    );
  }

  if (status === Status.PENDING) {
    return <p>'Загружаем PENDING'</p>;
  }

  if (status === Status.REJECTED) {
    return <p>'всё пропало REJECTED'</p>;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <PageHeading text="Домашняя страница" />
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${url}movies/${movie.id}`}> {movie.title}</Link>
            </li>
          ))}
      </>
    );
  }
}
