import React, { Component} from 'react';
import { Divider, Grid, Typography  } from '@material-ui/core';
import '../../styles/components/_cardarea.css';

class CardArea extends Component {
  render(){
    return(
      <div >
        <Divider />
        <div className="title">
          <h4>POPULAR MOVIES</h4>
        </div>
        <div className="card-space">
            <Grid container flex-direction="row" spacing={8}>
                {this.props.children}
            </Grid>
        </div>
        <Divider />
      </div>
    );
  }
}
export default CardArea;