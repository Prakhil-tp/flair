import React from 'react';
import { Divider, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import '../../styles/components/_cardarea.css';

const CardArea = (props) => {
  const { title, isLoading, children } = props;
    return(
      <div className="main">
        <Divider />
        <div className="title">
          <h4>{title}</h4>
        </div>
        {
          isLoading? 
            (
              <div className="loading-space">
                {children}
              </div>
            )
          :
            (
              <div className="card-space">
                <Grid container flex-direction="row" spacing={8}>
                  {children}
                </Grid>
              </div>
            )
        }
        <Divider />
      </div>
    );  
}
export default CardArea;

CardArea.defaultProps = {
  isLoading: false,
  title: '',
  children: <div />
};

CardArea.propTypes = {
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
};
