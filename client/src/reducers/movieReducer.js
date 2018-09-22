import { 
  FETCH_FAVORITE,
  FETCH_POPULAR,
  FETCH_TRENDING,
  FETCH_WATCHED,
  FETCH_WATCHLATER
} from 'actions/types';

const initialState = {
  popularMovies:[],
  trendingMovies:[],
  favoriteMovies:[],
  watchlaterMovies:[],
  watchedMovies:[]
}

export default function(state = initialState, action){
  switch (action.type) {

    case FETCH_FAVORITE:
      return {
        ...state,
        favoriteMovies: action.payload
      }
    case FETCH_POPULAR:
      return {
        ...state,
        popularMovies: action.payload
      }
    case FETCH_TRENDING:
      return {
        ...state,
        trendingMovies: action.payload
      }
    case FETCH_WATCHED:
      return {
        ...state,
        watchedMovies: action.payload
      }
    case FETCH_WATCHLATER:
      return {
        ...state,
        watchlaterMovies: action.payload
      }
  
    default:
      return state;
  }
}