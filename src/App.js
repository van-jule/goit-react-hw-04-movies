import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import AppBar from './components/AppBar';
import Container from './components/Container';
import UserLoader from './components/UserLoader';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const HomePage = lazy(() =>
  import('./views/HomePage.js' /* webpackChunkName: "homePage" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage.js' /* webpackChunkName: "moviesPage" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage.js' /* webpackChunkName: "MovieDetailsPage" */
  ),
);

export default function App() {
  return (
    <div className="App">
      <Container>
        <AppBar />
        <Suspense fallback={<UserLoader />}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>

            <Route path="/movies" exact>
              <MoviesPage />
            </Route>

            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>

            <Route>
              <HomePage />
            </Route>
          </Switch>
        </Suspense>

        <ToastContainer autoClose={2000} />
      </Container>
    </div>
  );
}
