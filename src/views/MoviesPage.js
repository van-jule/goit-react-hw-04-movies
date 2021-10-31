import React, { useState, useEffect } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Link, Route, useRouteMatch } from 'react-router-dom';

import PageHeading from '../components/PageHeading';
import Searchbar from '../components/Searchbar';
// import UserLoader from '../components/UserLoader';
import API from '../services/themoviedbApi';
import Status from '../services/Status';

export default function MoviesPage() {
  const { url, path } = useRouteMatch();
  console.log({ url });

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

  const handleFormSubmit = queryValue => setQueryValue(queryValue);

  return (
    <>
      <PageHeading text="Страница фильмов" />
      <Searchbar onSubmit={handleFormSubmit} />
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${url}/${movie.id}`}> {movie.title}</Link>
          </li>
        ))}

      <Route path={`${path}/cast`}></Route>
    </>
  );
}
