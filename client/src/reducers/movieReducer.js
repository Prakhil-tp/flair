import { 
  FETCH_FAVORITE,
  FETCH_POPULAR,
  FETCH_TRENDING,
  FETCH_WATCHED,
  FETCH_WATCHLATER
} from 'actions/types';

const initialState = {
  popularMovies:[],
  popularCurrentPage:1,
  popularTotalPage:1,
  trendingMovies:[],
  trendingCurrentPage:1,
  trendingTotalPage:1,
  favoriteMovies:[],
  favoriteCurrentPage:1,
  favouriteTotalPage:1,
  watchlaterMovies:[],
  watchlaterCurrentPage:1,
  watchlaterTotalPage:1,
  watchedMovies:[],
  watchedCurrentPage:1,
  watchedTotalPage:1,
}

export default function(state = initialState, action){
  switch (action.type) {

    case FETCH_FAVORITE:
      return {
        ...state,
        favoriteMovies: action.payload.results
      }
    case FETCH_POPULAR:
      return {
        ...state,
        popularMovies: action.payload.results
      }
    case FETCH_TRENDING:
      return {
        ...state,
        trendingMovies: action.payload.results
      }
    case FETCH_WATCHED:
      return {
        ...state,
        watchedMovies: action.payload.results
      }
    case FETCH_WATCHLATER:
      return {
        ...state,
        watchlaterMovies: action.payload.results
      }
  
    default:
      return state;
  }
}