import React from 'react'
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import ArrowButton from './ArrowButton'

const CardContainer = (props) => {
  const {children, prevPage, nextPage, total_page, current_page} = props;
  let rightButtonShow = false, leftButtonShow= false;
  if(total_page > current_page)
    rightButtonShow = true;
  else if(total_page === current_page)
    rightButtonShow = false;
  if(current_page > 1)
    leftButtonShow = true;
  else if(current_page === 1)
    leftButtonShow = false;

  return(
    <div className="card-space">
      <Grid container flex-direction="row" spacing={8}>
        {children}
      </Grid>
      <ArrowButton
        style={{
          position:'absolute',
          bottom:'42%',
          right:'5%'
        }}
        action={nextPage}
        type='arrow_right'
        show={rightButtonShow} 
      />
      <ArrowButton
        style={{
          position:'absolute',
          bottom:'42%',
          left:'5%'
        }}
        action={prevPage}
        type='arrow_left'
        show={leftButtonShow}
      />
      
    </div>
  )
};

export default CardContainer;

CardContainer.propTypes = {
  children: PropTypes.node.isRequired,
  prevPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  total_page: PropTypes.node.isRequired,
  current_page: PropTypes.node.isRequired
};