import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Searchbar from './components/Searchbar';
import ImageStateCar from './components/ImageStateCar';
import AppBar from './components/AppBar';
import Container from './components/Container';

import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import NotFoundView from './views/NotFoundView';
import Cast from './views/Cast';

// ** Пример API-запроса
//api.themoviedb.org/3/movie/550?api_key=af8b040221b1ba9bcffe2515fde78733

// ** Ключ API (v3 auth)
//  af8b040221b1ba9bcffe2515fde78733;

const App = () => {
  // const [queryValue, setQueryValue] = useState('');

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
            <NotFoundView />
          </Route>
        </Switch>

        {/* <ImageStateCar queryValue={queryValue} page={1} /> */}
        <ToastContainer autoClose={2000} />
      </Container>
    </div>
  );
};

export default App;
