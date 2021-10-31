const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'af8b040221b1ba9bcffe2515fde78733';

function fetchTrendMovies() {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`Нет трендовых фильмов`));
    },
  );
}

function fetchMovies(query) {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`По вашему запросу ничего не найдено`));
  });
}

function fetchMovieByID(movieID) {
  return fetch(
    `${BASE_URL}/movie/${movieID}?api_key=${API_KEY}&language=en-US_expand=actors`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Нет фильма ${movieID}`));
  });
}

function fetchActors(movieID) {
  return fetch(
    `${BASE_URL}/movie/${movieID}/credits?api_key=${API_KEY}&language=en-US_embed=movie`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Нет актеров в фильме ${movieID}`));
  });
}

function fetchReviews(movieID) {
  return fetch(
    `${BASE_URL}/movie/${movieID}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Нет отзывов о фильме ${movieID}`));
  });
}

const api = {
  fetchTrendMovies,
  fetchMovies,
  fetchMovieByID,
  fetchActors,
  fetchReviews,
};

export default api;
