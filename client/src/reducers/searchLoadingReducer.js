import { NAV_SEARCH_LOADING, NAV_SEARCH_SCREEN } from 'actions/types';


const initialState = {
  searchScreen:false,
  searchLoading:false
}

export default function(state = initialState, action){
  switch (action.type) {
    case NAV_SEARCH_LOADING:
      return {
        ...state,
        searchLoading: action.payload,
      }
    case NAV_SEARCH_SCREEN:
      return {
        ...state,
        searchScreen: action.payload,
      }
  
    default:
      return state;
  }
}

