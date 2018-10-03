import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { 
  Card,
  CardMedia,
  Grid,
  IconButton,
  Tooltip,
  Slide,
} from '@material-ui/core';
import { userAction } from 'actions/userActions'
import onhooq from 'assets/bookmark.svg'
import hooqLogo from 'assets/Hooq-logo-web.png'

const styles = {
  media: {
     height:'100%',
    display:'flex',
    alignItems:'flex-end'
  },
  card: {
     position: 'relative',
     height:220,
     width:150,
  },
  overlay: {
     position: 'absolute',
     bottom:'2%',
     background: 'rgba(200,200,200,0.5)',
     width:176,
  }
}

class MovieCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      favouriteColor: '#00000080',
      watchLaterColor: '#00000080',
      watchedIconColor: '#00000080'
    };
  }
  componentWillMount(){
    const {favourite, watch_later, watched} = this.props;
    if(favourite)
      this.setState({favouriteColor:'#FF1744'})
    if(watch_later)
      this.setState({watchLaterColor:'#3d5afe'})
    if(watched)
      this.setState({ watchedIconColor: 'white' })

  }
  onFavouriteClick = () => {

    const { favourite, userAction, allDetails, cardArea } = this.props;
    if(favourite){
      this.setState({ favouriteColor: '#00000080' })
    }
    else {
      this.setState({ favouriteColor: '#FF1744' });
    }

    const reqData = {
      movie: allDetails.movie.id,
      action_type:'favourite',
      value:!favourite,
      allDetails,
      cardArea
    }

    userAction(reqData);

  }
  onWatchLaterClick = () => {
    const { watch_later, userAction, allDetails, cardArea } = this.props;
    if(watch_later){
      this.setState({ watchLaterColor: '#00000080' })
    }
    else {
      this.setState({ watchLaterColor: '#3d5afe' });
    }

    const reqData = {
      movie: allDetails.movie.id,
      action_type:'watch_later',
      value:!watch_later,
      allDetails,
      cardArea
    }

    userAction(reqData);
  }
  onWatchedClick = () => {
    const { watched, userAction, allDetails, cardArea } = this.props;
    if(watched){
      this.setState({ watchedIconColor: '#00000080' })
    }
    else {
      this.setState({ watchedIconColor: 'white' });
    }

    const reqData = {
      movie: allDetails.movie.id,
      action_type:'watched',
      value:!watched,
      allDetails,
      cardArea
    }

    userAction(reqData);
  }
  render(){
    const { favouriteColor, watchLaterColor, watchedIconColor } = this.state;
    const { poster, rating, title, genre, slide, hooq } = this.props;
    return(
      <Grid item>
        {/* <Slide in={false} direction="right" timeout={500}>  */}
          <div>
            <div className="movie-card">
              <Card style={styles.card}>
                <CardMedia image={`https://image.tmdb.org/t/p/w185/${poster}`} style={styles.media} />
                <div style={styles.overlay}>
                  <div className="button-area">
                    <Grid container flex-direction="row" spacing={0}>
                      <Grid item>
                        <Tooltip title="favourite">
                          <IconButton 
                            aria-label="Add to favourites"
                            onClick={this.onFavouriteClick}  
                          >
                            <i className="material-icons" style={{color: favouriteColor}}>favorite</i>
                          </IconButton>
                        </Tooltip>
                      </Grid>
                      <Grid item>
                        <Tooltip title="watch later">
                          <IconButton 
                            aria-label="Add to watch later"
                            onClick={this.onWatchLaterClick}
                          >
                            <i className="material-icons" style={{color:watchLaterColor}}>watch_later</i>
                          </IconButton>
                        </Tooltip>
                      </Grid>
                      <Grid item>
                        <Tooltip title="watched">
                          <IconButton 
                            aria-label="Add to watched"
                            onClick={this.onWatchedClick}
                          >
                            <i className="material-icons" style={{color:watchedIconColor}}>offline_pin</i>
                          </IconButton>
                        </Tooltip>
                      </Grid>
                    </Grid>
                  </div>
                </div>
                <div className="rating">
                  <p>{rating}</p>
                  <i className="material-icons">star</i>
                </div>
                {
                  hooq?
                  (
                    <div className="on-hooq">
                      <img className="hooq-svg" src={onhooq} alt="on hooq" />
                      <img className="hooq-logo" src={hooqLogo} alt="hooq" />
                    </div>
                  )
                  :
                    null
                }
                
              </Card>
            </div>
            <div className="card-content">
              <p className="movie-title">{title}</p>
            </div>
            {
  
              (genre !== undefined)? 
                (
                  <div className="movie-genre">
                    <p>{genre}</p>
                  </div>
                ):
                  <div />
            }
          </div>
        {/* </Slide>  */}
      </Grid>
    );
  }
}
export default connect(null,{userAction})(MovieCard)

MovieCard.defaultProps = {
  genre: undefined
}

MovieCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.node.isRequired,
  genre: PropTypes.string,
  watch_later: PropTypes.bool.isRequired,
  watched: PropTypes.bool.isRequired,
  favourite: PropTypes.bool.isRequired,
  cardArea: PropTypes.string.isRequired,
  hooq: PropTypes.bool.isRequired
}