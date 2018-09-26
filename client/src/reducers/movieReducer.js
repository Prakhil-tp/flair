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
  popularTotalPage:0,
  trendingMovies:[],
  trendingCurrentPage:1,
  trendingTotalPage:1,
  favoriteMovies:[],
  favoriteCurrentPage:1,
  favouriteTotalPage:0,
  watchlaterMovies:[],
  watchlaterCurrentPage:1,
  watchlaterTotalPage:0,
  watchedMovies:[],
  watchedCurrentPage:1,
  watchedTotalPage:0,
}

export default function(state = initialState, action){
  switch (action.type) {

    case FETCH_FAVORITE:
      return {
        ...state,
        favoriteMovies: action.payload.results,
        favouriteTotalPage: action.payload.total_pages,
        favoriteCurrentPage: action.payload.current_page
      }
    case FETCH_POPULAR:
      return {
        ...state,
        popularMovies: action.payload.results,
        popularTotalPage: action.payload.total_pages,
        popularCurrentPage: action.payload.current_page
      }
    case FETCH_TRENDING:
      return {
        ...state,
        trendingMovies: action.payload.results,
        trendingTotalPage: action.payload.total_pages,
        trendingCurrentPage: action.payload.current_page
      }
    case FETCH_WATCHED:
      return {
        ...state,
        watchedMovies: action.payload.results,
        watchedTotalPage: action.payload.total_pages,
        watchedCurrentPage: action.payload.current_page
      }
    case FETCH_WATCHLATER:
      return {
        ...state,
        watchlaterMovies: action.payload.results,
        watchlaterTotalPage: action.payload.total_pages,
        watchlaterCurrentPage: action.payload.current_page
      }
  
    default:
      return state;
  }
}