import React, { Component } from 'react';
import { 
  Card,
  CardMedia,
  CardActions,
  Grid,
  IconButton,
  Tooltip,
  CardContent,
  Typography,
} from '@material-ui/core';
import { red, lightBlue} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import WatchLater from '@material-ui/icons/WatchLater';
import OfflinePin from '@material-ui/icons/OfflinePin';
import avengers from '../../assets/images/Avengers.jpg';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import '../../styles/components/_moviecard.css';

const styles = {
  card: { maxWidth: 345 },
  media: { objectFit: 'cover'},
};

const cardTheme = createMuiTheme({ 
  palette: {
    primary: red,
    secondary: lightBlue,
    error: { main: '#2e2e2e'}
  } 
});

class MovieCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      favIconColor:'disabled',
      watchLaterIconColor:'disabled',
      watchedIconColor:'disabled'
    };
  }

  render() {
    return (
      <Grid item >
        <Card style={{ height:280,width:176 }} >
        <CardMedia
            component="img"
            height = "200"
            image={avengers}
            title="Contemplative Reptile"
        />
        <div className="card-content">
          <Typography variant="subheading" >Avengers</Typography>
        </div>
        <CardActions>
          <div className="button-area">
            <MuiThemeProvider theme={cardTheme}>
              <Grid container flex-direction="row" spacing={0}>
                <Grid item>
                  <Tooltip title="favorite">
                    <IconButton 
                      aria-label="Add to favorites"
                      onClick={
                        (e)=>{
                          (this.state.favIconColor=== 'disabled')?
                            this.setState({favIconColor:'primary'})
                            :
                            this.setState({favIconColor:'disabled'})
                        }
                      }
                    >
                      <FavoriteIcon color={this.state.favIconColor} />
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip title="watch later">
                      <IconButton 
                        aria-label="Add to watch later"
                        onClick={
                          (e)=>{
                            (this.state.watchLaterIconColor=== 'disabled')?
                              this.setState({watchLaterIconColor:'secondary'})
                              :
                              this.setState({watchLaterIconColor:'disabled'})
                          }
                        }
                      >
                        <WatchLater color={this.state.watchLaterIconColor} />
                      </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip title="watched">
                      <IconButton 
                        aria-label="Add to watched"
                        onClick={
                          (e)=>{
                            (this.state.watchedIconColor=== 'disabled')?
                              this.setState({watchedIconColor:'error'})
                              :
                              this.setState({watchedIconColor:'disabled'})
                          }
                        }
                      >
                        <OfflinePin color={this.state.watchedIconColor} />
                      </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </MuiThemeProvider>
          </div>
        </CardActions>
      </Card>
    </Grid>
    );
  }
}

export default withStyles(styles)(MovieCard);
