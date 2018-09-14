import React,{Component} from 'react';
import { 
  Card,
  CardMedia,
  Grid,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import '../../styles/components/_testcard.css';

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

class TestCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      favoriteColor: '#00000080',
      watchLaterColor: '#00000080',
      watchedIconColor: '#00000080'
    };
  }
  render(){
    return(
      <Grid  item >
        <div className="movie-card">
        <Card style={styles.card}>
          <CardMedia image={this.props.image} style={styles.media}/>
          <div style={styles.overlay}>
            <div className="button-area">
                <Grid container flex-direction="row" spacing={0}>
                  <Grid item>
                    <Tooltip title="favorite">
                      <IconButton 
                        aria-label="Add to favorites"
                        onClick={
                          (e)=>{
                            (this.state.favoriteColor === '#00000080')?
                              this.setState({favoriteColor: '#FF1744'})
                              :
                              this.setState({favoriteColor: '#00000080'})
                          }
                        }
                      >
                        <i className="material-icons" style={{color: this.state.favoriteColor}}>favorite</i>
                      </IconButton>
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="watch later">
                        <IconButton 
                          aria-label="Add to watch later"
                          onClick={
                            (e)=>{
                              (this.state.watchLaterColor === '#00000080')?
                                this.setState({watchLaterColor: '#3d5afe'})
                                :
                                this.setState({watchLaterColor: '#00000080'})
                            }
                          }
                        >
                          <i className="material-icons" style={{color:this.state.watchLaterColor}}>watch_later</i>
                        </IconButton>
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="watched">
                        <IconButton 
                          aria-label="Add to watched"
                          onClick={
                            (e)=>{
                              (this.state.watchedIconColor === '#00000080')?
                                this.setState({watchedIconColor: 'white'})
                                :
                                this.setState({watchedIconColor: '#00000080'})
                            }
                          }
                        >
                            <i className="material-icons" style={{color:this.state.watchedIconColor}}>offline_pin</i>
                        </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
            </div>
          </div>
          <div className="rating">
            <p>{this.props.rating}</p>
            <i className="material-icons">grade</i>
          </div>
        </Card>
        </div>
        <div className="card-content">
          <p className="movie-title" >{this.props.title}</p>
        </div>
        <div className="movie-genre">
          <p>{this.props.genre}</p>
        </div>
      </Grid>
    );
  }
}
export default TestCard;