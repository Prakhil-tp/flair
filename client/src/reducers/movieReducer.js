import { 
  FETCH_FAVOURITE,
  FETCH_POPULAR,
  FETCH_TRENDING,
  FETCH_WATCHED,
  FETCH_WATCHLATER,
  USER_ACTION,
  FETCH_RECOMMEND 

} from 'actions/types';

const initialState = {
  popularMovies:[],
  popularCurrentPage:1,
  popularTotalPage:0,
  trendingMovies:[],
  trendingCurrentPage:1,
  trendingTotalPage:1,
  favouriteMovies:[],
  favouriteCurrentPage:1,
  favouriteTotalPage:0,
  watchlaterMovies:[],
  watchlaterCurrentPage:1,
  watchlaterTotalPage:0,
  watchedMovies:[],
  watchedCurrentPage:1,
  watchedTotalPage:0,
  recommendedMovies:[],
  recommendedCurrentPage:1,
  recommendedTotalPage:0
  
}

export default function(state = initialState, action){
  switch (action.type) {

    case FETCH_FAVOURITE:
      return {
        ...state,
        favouriteMovies: action.payload.results,
        favouriteTotalPage: action.payload.total_pages,
        favouriteCurrentPage: action.payload.current_page
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
    case FETCH_RECOMMEND:
      return {
        ...state,
        recommendedMovies: action.payload.results,
        recommendedTotalPage: action.payload.total_pages,
        recommendedCurrentPage: action.payload.current_page
      }
    case USER_ACTION:{
      const nextState = {...state};
      const { allDetails, action_type, value, cardArea } = action.payload;
      let newFavouriteMovies = nextState.favouriteMovies,
          newWatchLaterMovies = nextState.watchlaterMovies,
          newWatchedMovies = nextState.watchedMovies,
          newPopularMovies = nextState.popularMovies,
          newTrendingMovies = nextState.trendingMovies,
          newRecommendedMovies = nextState.recommendedMovies;


      if(value){

        //remove card from recommendation  if actions hit
        if(cardArea === 'recommendation')
          newRecommendedMovies = newRecommendedMovies.filter(movie => movie.movie.id !== allDetails.movie.id)
        

        switch (action_type) {
          case 'favourite':{
            //checking the card is exist on the cardAreas or not
            const favouriteIndex = newFavouriteMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
            const popularIndex = newPopularMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
            const trendingIndex = newTrendingMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
            const watchLaterIndex = newWatchLaterMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
            const watchedIndex = newWatchedMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
            allDetails.movie.favourite = true;
            //push card to favourite cardArea if it's not exist there.
            if(favouriteIndex === -1)
              newFavouriteMovies = newFavouriteMovies.concat(allDetails);

            //Turn the favourite prop true of existed cardArea's Moviecard                                                         
            if(popularIndex !== -1){
              newPopularMovies = newPopularMovies.filter(movie  => movie.movie.id !== allDetails.movie.id);
              newPopularMovies.splice(popularIndex,0,allDetails);
            }
            if(trendingIndex !== -1){
              newTrendingMovies = newTrendingMovies.filter(movie  => movie.movie.id !== allDetails.movie.id);
              newTrendingMovies.splice(trendingIndex,0,allDetails);
            }
            if(watchLaterIndex !== -1){
              newWatchLaterMovies = newWatchLaterMovies.filter(movie  => movie.movie.id !== allDetails.movie.id);
              newWatchLaterMovies.splice(watchLaterIndex,0,allDetails);
            }
            if(watchedIndex !== -1){
              newWatchedMovies = newWatchedMovies.filter(movie  => movie.movie.id !== allDetails.movie.id);
              newWatchedMovies.splice(watchedIndex,0,allDetails);
            }
            break;
          }
          case 'watch_later':{
            //checking the card is exist on the cardAreas or not
            const watchLaterIndex = newWatchLaterMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
            const favouriteIndex = newFavouriteMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
            const popularIndex = newPopularMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
            const trendingIndex = newTrendingMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
            const watchedIndex = newWatchedMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
            allDetails.movie.watch_later = true;
            //push card to watch_later cardArea if it's not exist there.
            if(watchLaterIndex === -1)
              newWatchLaterMovies = newWatchLaterMovies.concat(allDetails);

            //Turn the watch_later prop true of existed cardArea's Moviecard                                             
            if(popularIndex !== -1){
              newPopularMovies = newPopularMovies.filter(movie  => movie.movie.id !== allDetails.movie.id);
              newPopularMovies.splice(popularIndex,0,allDetails);
            }
            if(trendingIndex !== -1){
              newTrendingMovies = newTrendingMovies.filter(movie  => movie.movie.id !== allDetails.movie.id);
              newTrendingMovies.splice(trendingIndex,0,allDetails);
            }
            if(favouriteIndex !== -1){
              newFavouriteMovies = newFavouriteMovies.filter(movie  => movie.movie.id !== allDetails.movie.id);
              newFavouriteMovies.splice(favouriteIndex,0,allDetails);
            }
            if(watchedIndex !== -1){
              newWatchedMovies = newWatchedMovies.filter(movie  => movie.movie.id !== allDetails.movie.id);
              newWatchedMovies.splice(watchedIndex,0,allDetails);
            }
            break;
          }
          case 'watched':{
            
            //checking the card is exist on the cardAreas or not
            const watchedIndex = newWatchedMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
            const popularIndex = newPopularMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
            const trendingIndex = newTrendingMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
            const favouriteIndex = newFavouriteMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);                  
            const watchLaterIndex = newWatchLaterMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
            allDetails.movie.watched = true;
            //push card to watched cardArea if it's not exist there.
            if(watchedIndex === -1)
              newWatchedMovies = newWatchedMovies.concat(allDetails);

            //Turn the watched prop true of existed cardArea's Moviecard                 
            if(popularIndex !== -1){
              newPopularMovies = newPopularMovies.filter(movie  => movie.movie.id !== allDetails.movie.id);
              newPopularMovies.splice(popularIndex,0,allDetails);
            }
            if(trendingIndex !== -1){
              newTrendingMovies = newTrendingMovies.filter(movie  => movie.movie.id !== allDetails.movie.id);
              newTrendingMovies.splice(trendingIndex,0,allDetails);
            }
            if(favouriteIndex !== -1){
              newFavouriteMovies = newFavouriteMovies.filter(movie  => movie.movie.id !== allDetails.movie.id);
              newFavouriteMovies.splice(favouriteIndex,0,allDetails);
            }
            if(watchLaterIndex !== -1){
              newWatchLaterMovies = newWatchLaterMovies.filter(movie  => movie.movie.id !== allDetails.movie.id);
              newWatchLaterMovies.splice(watchLaterIndex,0,allDetails);
            }
            break;
          }
          default: console.log(`default hits on switch of 'if(value) true' - action_type:${action_type}`)
            break;
        }


      } //value checking --if(value)-- ends here
      else{


          switch (action_type) {
            case 'favourite':{

              //checking the card is exist on the cardAreas or not
              const favouriteIndex = newFavouriteMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
              const popularIndex = newPopularMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
              const trendingIndex = newTrendingMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
              const watchLaterIndex = newWatchLaterMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
              const watchedIndex = newWatchedMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
              allDetails.movie.favourite = false;
              //pop card from favourite cardArea if it's exist there
              if(favouriteIndex !== -1)
                newFavouriteMovies = newFavouriteMovies.filter(movie => movie.movie.id !== allDetails.movie.id);
              
              //Turn the favourite prop false of existed cardArea's Moviecard
              
              if(popularIndex !== -1){
                newPopularMovies = newPopularMovies.filter(movie => movie.movie.id !== allDetails.movie.id);
                newPopularMovies.splice(popularIndex,0,allDetails);
              }
              if(trendingIndex !== -1){
                newTrendingMovies = newTrendingMovies.filter(movie => movie.movie.id !== allDetails.movie.id);
                newTrendingMovies.splice(trendingIndex, 0, allDetails);
              }
              if(watchLaterIndex !== -1){
                newWatchLaterMovies = newWatchLaterMovies.filter(movie => movie.movie.id !== allDetails.movie.id);
                newWatchLaterMovies.splice(watchLaterIndex, 0, allDetails);
              }
              if(watchedIndex !== -1){
                newWatchedMovies = newWatchedMovies.filter(movie => movie.movie.id !== allDetails.movie.id);
                newWatchedMovies.splice(watchedIndex, 0, allDetails);
              }
              break;
            }
            case 'watch_later':{

              //checking the card is exist on the cardAreas or not
              const favouriteIndex = newFavouriteMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
              const popularIndex = newPopularMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
              const trendingIndex = newTrendingMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
              const watchLaterIndex = newWatchLaterMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
              const watchedIndex = newWatchedMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
              allDetails.movie.watch_later = false;
              //pop card from watch_later cardArea if it's exist there
              if(watchLaterIndex !== -1)
                newWatchLaterMovies = newWatchLaterMovies.filter(movie => movie.movie.id !== allDetails.movie.id);
              
              //Turn the watch_later prop false of existed cardArea's Moviecard
              
              if(popularIndex !== -1){
                newPopularMovies = newPopularMovies.filter(movie => movie.movie.id !== allDetails.movie.id);
                newPopularMovies.splice(popularIndex,0,allDetails);
              }
              if(trendingIndex !== -1){
                newTrendingMovies = newTrendingMovies.filter(movie => movie.movie.id !== allDetails.movie.id);
                newTrendingMovies.splice(trendingIndex, 0, allDetails);
              }
              if(favouriteIndex !== -1){
                newFavouriteMovies = newFavouriteMovies.filter(movie => movie.movie.id !== allDetails.movie.id);
                newFavouriteMovies.splice(favouriteIndex, 0, allDetails);
              }
              if(watchedIndex !== -1){
                newWatchedMovies = newWatchedMovies.filter(movie => movie.movie.id !== allDetails.movie.id);
                newWatchedMovies.splice(watchedIndex, 0, allDetails);
              }
              break;
            }
            case 'watched':{

              //checking the card is exist on the cardAreas or not
              const favouriteIndex = newFavouriteMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
              const popularIndex = newPopularMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
              const trendingIndex = newTrendingMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
              const watchLaterIndex = newWatchLaterMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
              const watchedIndex = newWatchedMovies.findIndex(movie => movie.movie.id === allDetails.movie.id);
              allDetails.movie.watched = false;
              //pop card from watched cardArea if it's exist there
              if(watchedIndex !== -1)
                newWatchedMovies = newWatchedMovies.filter(movie => movie.movie.id !== allDetails.movie.id);
              
              //Turn the watched prop false of existed cardArea's Moviecard
              
              if(popularIndex !== -1){
                newPopularMovies = newPopularMovies.filter(movie => movie.movie.id !== allDetails.movie.id);
                newPopularMovies.splice(popularIndex,0,allDetails);
              }
              if(trendingIndex !== -1){
                newTrendingMovies = newTrendingMovies.filter(movie => movie.movie.id !== allDetails.movie.id);
                newTrendingMovies.splice(trendingIndex, 0, allDetails);
              }
              if(favouriteIndex !== -1){
                newFavouriteMovies = newFavouriteMovies.filter(movie => movie.movie.id !== allDetails.movie.id);
                newFavouriteMovies.splice(favouriteIndex, 0, allDetails);
              }
              if(watchLaterIndex !== -1){
                newWatchLaterMovies = newWatchLaterMovies.filter(movie => movie.movie.id !== allDetails.movie.id);
                newWatchLaterMovies.splice(watchLaterIndex, 0, allDetails);
              }
              break;
            }
            default:console.log(`default hit on switch of 'if(value) false' - action_type: ${action_type}`);
              break;
          }
      }
      return Object.assign({},state,{
        favouriteMovies: newFavouriteMovies,
        watchlaterMovies: newWatchLaterMovies,
        watchedMovies: newWatchedMovies,
        popularMovies: newPopularMovies,
        trendingMovies: newTrendingMovies,
        recommendedMovies: newRecommendedMovies
      })
      
      
    }
    default:
      return state;
  }
}