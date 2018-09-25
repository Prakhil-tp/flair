import { combineReducers } from 'redux'
import movieReducer from './movieReducer'
import searchLoadingReducer from './searchLoadingReducer'


export default combineReducers({
  Movies: movieReducer,
  SearchLoading: searchLoadingReducer,
});