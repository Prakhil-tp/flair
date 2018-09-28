import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  fetchFavourite,
  fetchPopular,
  fetchTrending,
  fetchWatched,
  fetchWatchLater,
  fetchRecommend
} from 'actions/movieActions'
import SearchResults from './components/SearchResults'
import FavouriteMovies from './components/FavouriteMovies'
import PopularMovies from './components/PopularMovies'
import TrendingMovies from './components/TrendingMovies'
import WatchedMovies from './components/WatchedMovies'
import WatchLater from './components/WatchLaterMovies'
import Recommendation from './components/Recommendation'


class Dashboard extends Component {
  componentWillMount(){
    const { 
      fetchFavourite, fetchPopular, fetchTrending, fetchWatched, fetchWatchLater, fetchRecommend,
      favPage, popPage, trePage, watchedPage, watchltr,recPage
    } = this.props;
    fetchRecommend(recPage);
    fetchPopular(popPage);
    fetchTrending(trePage);
    fetchFavourite(favPage);
    fetchWatched(watchedPage);
    fetchWatchLater(watchltr);
  }
  render(){
    return(
      <div className="dashboard">
        <SearchResults {...this.props} />
        <Recommendation />
        <PopularMovies />
        <TrendingMovies />
        <FavouriteMovies />
        <WatchedMovies />
        <WatchLater />
      </div>
    );
  }
}
//prop validataion
Dashboard.propTypes = {
  searchScreen: PropTypes.bool.isRequired,
  searchLoading: PropTypes.bool.isRequired,
  fetchFavourite: PropTypes.func.isRequired,
  fetchPopular: PropTypes.func.isRequired,
  fetchWatched: PropTypes.func.isRequired,
  fetchWatchLater: PropTypes.func.isRequired,
  fetchTrending: PropTypes.func.isRequired,
  favPage: PropTypes.node,
  popPage: PropTypes.node,
  trePage: PropTypes.node,
  watchedPage: PropTypes.node,
  watchltr: PropTypes.node,
  recPage: PropTypes.node
};
Dashboard.defaultProps = {
  favPage:1,
  popPage:1,
  trePage:1,
  watchedPage:1,
  watchltr:1,
  recPage:1
}

const mapStateToProps = state => ({
  searchScreen: state.SearchLoading.searchScreen,
  searchLoading: state.SearchLoading.searchLoading,
  favPage: state.Movies.favouriteCurrentPage,
  popPage: state.Movies.popularCurrentPage,
  trePage: state.Movies.trendingCurrentPage,
  watchedPage: state.Movies.watchedCurrentPage,
  watchltr: state.Movies.watchlaterCurrentPage,
  recPage: state.Movies.recommendedCurrentPage
})

const mapDispatchToProps = {
  fetchFavourite,
  fetchPopular,
  fetchWatched,
  fetchWatchLater,
  fetchTrending,
  fetchRecommend
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

