import { HttpService } from 'util/services.js';
import { 
  FETCH_FAVOURITE, 
  FETCH_POPULAR,
  FETCH_TRENDING,
  FETCH_WATCHED,
  FETCH_WATCHLATER, 
  FETCH_RECOMMEND
} from './types';

const httpService = HttpService();

//get favourite movies
export const fetchFavourite = nextPage => dispatch => {
  const promise = httpService.get('/movies/favourite/',{page:nextPage});
  promise.then(res => {
    if (!res.ok) res.text().then((text) => console.log(text));
    return res.json();
  })
  .then(movies=>{
    movies.current_page = nextPage;  
    dispatch({
    type:FETCH_FAVOURITE,
    payload:movies
    })
  })
  .catch(err => {
    if (err.message !== undefined) 
      console.log(err.message);
  });

}

//get popular movies
export const fetchPopular = nextPage => dispatch => {
  const promise = httpService.get('/movies/popular/',{page:nextPage});
  promise.then(res => {
    if (!res.ok) res.text().then((text) => console.log(text));
    return res.json();
  })
  .then(movies=>{
    movies.current_page = nextPage;  
    dispatch({
    type:FETCH_POPULAR,
    payload:movies
    })
  })
  .catch(err => {
    if (err.message !== undefined) console.log(err.message);
  });
  
}

//get watched movies
export const fetchWatched = nextPage => dispatch => {
  const promise = httpService.get('/movies/watched/',{page:nextPage});
  promise.then(res => {
    if (!res.ok) res.text().then((text) => console.log(text));
    return res.json();
  })
  .then(movies=>{
    movies.current_page = nextPage;  
    dispatch({
    type:FETCH_WATCHED,
    payload:movies
    })
  })
  .catch(err => {
    if (err.message !== undefined) 
      console.log(err.message);
  });
}

//get watchlater movies
export const fetchWatchLater = nextPage => dispatch => {
  const promise = httpService.get('/movies/watchlater/',{page:nextPage});
  promise.then(res => {
    if (!res.ok) res.text().then((text) => console.log(text));
    return res.json();
  })
  .then(movies=>{
    movies.current_page = nextPage;  
    dispatch({
    type:FETCH_WATCHLATER,
    payload:movies
    })
  })
  .catch(err => {
    if (err.message !== undefined) 
      console.log(err.message);
  });
}

// get trending movies
export const fetchTrending = nextPage => dispatch => {
  const promise = httpService.get('/movies/trending/',{page:nextPage});
  promise.then(res => {
    if (!res.ok) res.text().then((text) => console.log(text));
    return res.json();
  })
  .then(movies=>{
    movies.current_page = nextPage;  
    dispatch({
    type:FETCH_TRENDING,
    payload:movies
    })
  })
  .catch(err => {
    if (err.message !== undefined) 
      console.log(err.message);
  });
}

// get recommended movies
export const fetchRecommend = nextPage => dispatch => {
  const promise = httpService.get('/movies/recommendations/',{page:nextPage});
  promise.then(res => {
    if (!res.ok) res.text().then((text) => console.log(text));
    return res.json();
  })
  .then(movies=>{
    movies.current_page = nextPage;  
    dispatch({
    type:FETCH_RECOMMEND,
    payload:movies
    })
  })
  .catch(err => {
    if (err.message !== undefined) 
      console.log(err.message);
  });
}