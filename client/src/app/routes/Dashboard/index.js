import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  fetchFavorite,
  fetchPopular,
  fetchTrending,
  fetchWatched,
  fetchWatchLater
} from 'actions/movieActions'
import SearchResults from './components/SearchResults'
import FavoriteMovies from './components/FavoriteMovies'
import PopularMovies from './components/PopularMovies'
import TrendingMovies from './components/TrendingMovies'
import WatchedMovies from './components/WatchedMovies'
import WatchLater from './components/WatchLaterMovies'


class Dashboard extends Component {
  componentWillMount(){
    const { 
      fetchFavorite, fetchPopular, fetchTrending, fetchWatched, fetchWatchLater,
      favPage, popPage, trePage, watchedPage, watchltr
     } = this.props;
    fetchFavorite(favPage);
    fetchPopular(popPage);
    fetchTrending(trePage);
    fetchWatched(watchedPage);
    fetchWatchLater(watchltr);
  }
  render(){
    return(
      <div className="dashboard">
        <SearchResults {...this.props} />
        <PopularMovies />
        <TrendingMovies />
        <FavoriteMovies />
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
  fetchFavorite: PropTypes.func.isRequired,
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
  favPage: state.Movies.favoriteCurrentPage,
  popPage: state.Movies.popularCurrentPage,
  trePage: state.Movies.trendingCurrentPage,
  watchedPage: state.Movies.watchedCurrentPage,
  watchltr: state.Movies.watchlaterCurrentPage,
})

const mapDispatchToProps = {
  fetchFavorite,
  fetchPopular,
  fetchWatched,
  fetchWatchLater,
  fetchTrending
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

