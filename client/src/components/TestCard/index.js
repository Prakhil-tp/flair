import React,{Component} from 'react';
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
import '../../styles/components/_testcard.css';

const styles = {
  media: {
    height:280,
    width:176,
    display:'flex',
    alignItems:'flex-end'
  },
  card: {
     position: 'relative',
  },
  overlay: {
     position: 'absolute',
    //  top: '20px',
     bottom:'20px',
     left: '0px',
     color: 'black',
     background: 'rgba(255,255,255,0.8)',
     width:176,
  }
}
const cardTheme = createMuiTheme({ 
  palette: {
    primary: red,
    secondary: lightBlue,
    error: { main: '#2e2e2e'}
  } 
});

class TestCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      favIconColor:'disabled',
      watchLaterIconColor:'disabled',
      watchedIconColor:'disabled'
    };
  }
  render(){
    return(
      <Grid item >
        <Card style={styles.card}>
          <CardMedia image={avengers} style={styles.media}/>
          <div style={styles.overlay}>
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
          </div>
        </Card>
      </Grid>
    );
  }
}
export default TestCard;