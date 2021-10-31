import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import AppBar from './components/AppBar';
import Container from './components/Container';

import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';

const App = () => {
  return (
    <div className="App">
      <Container>
        <AppBar />

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

        <ToastContainer autoClose={2000} />
      </Container>
    </div>
  );
};

export default App;
