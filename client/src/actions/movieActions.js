import { HttpService } from 'util/services.js';
import { 
  FETCH_FAVORITE, 
  FETCH_POPULAR,
  FETCH_TRENDING,
  FETCH_WATCHED,
  FETCH_WATCHLATER, 
} from './types';

const httpService = HttpService();

//get favorite movies
export const fetchFavorite = () => dispatch => {
  const promise = httpService.get('/movies/favourite/');
  promise.then(res => {
    if (!res.ok) res.text().then((text) => console.log(text));
    return res.json();
  })
  .then(movies=>dispatch({
    type:FETCH_FAVORITE,
    payload:movies.results
  }))
  .catch(err => {
    if (typeof err.message !== 'undefined') 
      console.log(err.message);
  });

}

//get popular movies
export const fetchPopular = () => dispatch => {
  const promise = httpService.get('/movies/popular/');
  promise.then(res => {
    if (!res.ok) res.text().then((text) => console.log(text));
    return res.json();
  })
  .then(movies=>dispatch({
    type:FETCH_POPULAR,
    payload:movies.results
  }))
  .catch(err => {
    if (typeof err.message !== 'undefined') console.log(err.message);
  });
  
}

//get watched movies
export const fetchWatched = () => dispatch => {
  const promise = httpService.get('/movies/watched/');
  promise.then(res => {
    if (!res.ok) res.text().then((text) => console.log(text));
    return res.json();
  })
  .then(movies=>dispatch({
    type:FETCH_WATCHED,
    payload:movies.results
  }))
  .catch(err => {
    if (typeof err.message !== 'undefined') 
      console.log(err.message);
  });
}

//get watchlater movies
export const fetchWatchLater = () => dispatch => {
  const promise = httpService.get('/movies/watchlater/');
  promise.then(res => {
    if (!res.ok) res.text().then((text) => console.log(text));
    return res.json();
  })
  .then(movies=>dispatch({
    type:FETCH_WATCHLATER,
    payload:movies.results
  }))
  .catch(err => {
    if (typeof err.message !== 'undefined') 
      console.log(err.message);
  });
}

// get trending movies
export const fetchTrending = () => dispatch => {
  const promise = httpService.get('/movies/trending/');
  promise.then(res => {
    if (!res.ok) res.text().then((text) => console.log(text));
    return res.json();
  })
  .then(movies=>dispatch({
    type:FETCH_TRENDING,
    payload:movies.results
  }))
  .catch(err => {
    if (typeof err.message !== 'undefined') 
      console.log(err.message);
  });
}