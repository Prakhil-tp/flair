import React, { Component } from 'react';
import { AppBar, Button, Toolbar, Typography, Avatar, Card, CardActionArea, CardMedia, CardContent, CardActions, Grid, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import avengers from '../../assets/images/Avengers.jpg';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: { maxWidth: 345 },
  media: { objectFit: 'cover'},
};

class MovieCard extends Component {
  // Nav bar contains the title, search bar and the avatar logo 

  render() {
    return (
      <Grid item >
        <Card style={{ height:250,width:172 }} >
        <CardMedia
            component="img"
            height = "200"
            image={avengers}
            title="Contemplative Reptile"
        />
        <CardActions>
          <IconButton color="secondary" aria-label="Add to favorites">
            <FavoriteIcon  />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
    );
  }
}

export default withStyles(styles)(MovieCard);
