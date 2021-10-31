import React, { useState, useEffect } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Link, useRouteMatch, useHistory, useLocation } from 'react-router-dom';

import PageHeading from '../components/PageHeading';
import Searchbar from '../components/Searchbar';
// import UserLoader from '../components/UserLoader';
import API from '../services/themoviedbApi';
import Status from '../services/Status';

export default function MoviesPage() {
  const { url, path } = useRouteMatch();

  const history = useHistory();
  const location = useLocation();
  console.log({ url });

  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState(null);
  const [queryValue, setQueryValue] = useState('');

  // useEffect(() => {
  //   console.log('location', location);
  //   setQueryValue(location.search.split('=')[1]);
  // }, []);

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

    // if (location.search !== '') {
    //   return;
    // }

    // history.push({ ...location, search: `query=${queryValue}` });
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
      <PageHeading text="Страница фильмов" />
      <Searchbar onSubmit={handleFormSubmit} />

      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${url}/${movie.id}`}> {movie.title}</Link>
          </li>
        ))}
    </>
  );
}
