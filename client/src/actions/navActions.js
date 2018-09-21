import { HttpService } from 'util/services.js';
import { NAV_SEARCH, NAV_SEARCH_LOADING, NAV_SEARCH_SCREEN } from './types';

const httpService = HttpService();

// http post request with search data
export const navSearch = searchData => dispatch => {
  const promise = httpService.post('/search/', searchData);
  promise.then(res => {
    if (!res.ok) res.text().then((text) => console.log(text));
    return res.json();
  })
    .then(movies => dispatch({
      type: NAV_SEARCH,
      payload: movies
    })
    )
    .catch(err => {
      if (typeof err.message !== 'undefined') 
        console.log(err.message);
    });
}

//controlling the loading screen of search
export const changeScreen = bool => dispatch => {
  dispatch({
    type:NAV_SEARCH_SCREEN,
    payload: bool,
  });
}

//controlling the loading spinner of search
export const changeLoading = bool => dispatch => {
  dispatch({
    type:NAV_SEARCH_LOADING,
    payload: bool,
  });
}