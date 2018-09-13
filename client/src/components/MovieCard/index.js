import React, { Component } from 'react';
import { AppBar, Button, Toolbar, Typography, Avatar, Card, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core';
import avatar from '../../assets/images/avatar2.jpg';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover',
  },
};

class MovieCard extends Component {
  // Nav bar contains the title, search bar and the avatar logo 

  render() {
    return (
      <Card style={{ height:250,width:250 }} >
      <CardContent>
      <CardMedia
          component="img"
          height = "150"
          image={avatar}
          title="Contemplative Reptile"
        />
      </CardContent>
      <CardActions>
      <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    );
  }
}

export default withStyles(styles)(MovieCard);
