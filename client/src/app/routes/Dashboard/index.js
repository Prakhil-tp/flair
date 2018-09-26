import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  fetchFavourite,
  fetchPopular,
  fetchTrending,
  fetchWatched,
  fetchWatchLater
} from 'actions/movieActions'
import SearchResults from './components/SearchResults'
import FavouriteMovies from './components/FavouriteMovies'
import PopularMovies from './components/PopularMovies'
import TrendingMovies from './components/TrendingMovies'
import WatchedMovies from './components/WatchedMovies'
import WatchLater from './components/WatchLaterMovies'


class Dashboard extends Component {
  componentWillMount(){
    const { 
      fetchFavourite, fetchPopular, fetchTrending, fetchWatched, fetchWatchLater,
      favPage, popPage, trePage, watchedPage, watchltr
    } = this.props;
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
  watchltr: PropTypes.node
};
Dashboard.defaultProps = {
  favPage:1,
  popPage:1,
  trePage:1,
  watchedPage:1,
  watchltr:1
}

const mapStateToProps = state => ({
  searchScreen: state.SearchLoading.searchScreen,
  searchLoading: state.SearchLoading.searchLoading,
  favPage: state.Movies.favouriteCurrentPage,
  popPage: state.Movies.popularCurrentPage,
  trePage: state.Movies.trendingCurrentPage,
  watchedPage: state.Movies.watchedCurrentPage,
  watchltr: state.Movies.watchlaterCurrentPage,
})

const mapDispatchToProps = {
  fetchFavourite,
  fetchPopular,
  fetchWatched,
  fetchWatchLater,
  fetchTrending
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

