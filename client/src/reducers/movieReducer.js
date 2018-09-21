import { NAV_SEARCH } from 'actions/types';

const initialState = {
  searchedMovies:[],
  popularMovies:[],
  trendingMovies:[],
  favouriteMovies:[],
  watchlaterMovies:[],
  watchedMovies:[]
}

export default function(state = initialState, action){
  switch (action.type) {
    case NAV_SEARCH:
      return {
        ...state,
        searchedMovies: action.payload
      }
  
    default:
      return state;
  }
}