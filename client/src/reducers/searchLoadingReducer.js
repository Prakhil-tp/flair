import { 
  NAV_SEARCH,
  NAV_SEARCH_LOADING, 
  NAV_SEARCH_SCREEN 
} from 'actions/types';


const initialState = {
  searchKey:'',
  searchedMovies:[],
  searchScreen:false,
  searchLoading:false,
  currentPage:1,
  totalPage:0
}

export default function(state = initialState, action){
  switch (action.type) {
    case NAV_SEARCH:
      return {
        ...state,
        searchedMovies: action.payload.results,
        totalPage: action.payload.total_pages,
        currentPage: action.payload.current_page,
        searchKey: action.payload.search_key,
        searchLoading: false
      }
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

