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
    const { fetchFavorite, fetchPopular, fetchTrending, fetchWatched, fetchWatchLater } = this.props;
    fetchFavorite();
    fetchPopular();
    fetchTrending();
    fetchWatched();
    fetchWatchLater();
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
  fetchTrending: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  searchScreen: state.SearchLoading.searchScreen,
  searchLoading: state.SearchLoading.searchLoading
})

const mapDispatchToProps = {
  fetchFavorite,
  fetchPopular,
  fetchWatched,
  fetchWatchLater,
  fetchTrending
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

