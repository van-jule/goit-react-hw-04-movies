import React, { useState, useEffect } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Link, useRouteMatch, useHistory, useLocation } from 'react-router-dom';

import PageHeading from '../components/PageHeading';
import Searchbar from '../components/Searchbar';
import API from '../services/themoviedbApi';
import Status from '../services/Status';
import styles from './MovieDetails.module.css';

export default function MoviesPage() {
  const { url, path } = useRouteMatch();

  const history = useHistory();
  const location = useLocation();

  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState(null);
  const [queryValue, setQueryValue] = useState('');

  useEffect(() => {
    if (queryValue) {
      console.log('queryValue', queryValue);
      setStatus(Status.PENDING);

      API.fetchMovies(queryValue)
        .then(({ results }) => {
          setMovies(results);
          setStatus(Status.RESOLVED);
          console.log(results);
        })
        .catch(error => {
          setError(error);
          setStatus(Status.REJECTED);
        });
    }
  }, [queryValue]);

  const queryInURL = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (location.search === '') {
      return;
    }

    console.log('location.search', location.search);
    console.log('queryInURL', queryInURL);

    if (location.search !== '') {
      API.fetchMovies(queryInURL)
        .then(({ results }) => {
          setMovies(results);
          setStatus(Status.RESOLVED);
          console.log(results);
        })
        .catch(error => {
          setError(error);
          setStatus(Status.REJECTED);
        });
    }
  }, [location]);

  const handleFormSubmit = queryValue => {
    history.push({
      ...location,
      search: `query=${queryValue}`,
    });
    setQueryValue(queryValue);
  };

  return (
    <>
      <PageHeading text="Search movie" />
      <Searchbar onSubmit={handleFormSubmit} />

      {movies && (
        <ul className={styles.list}>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${url}/${movie.id}`,
                  state: { from: location },
                }}
              >
                {' '}
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
