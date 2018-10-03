import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Slide } from '@material-ui/core'
import MCard from './MCard'

const MovieCard = props => {

    const { transition } = props;
    return (
      <Grid item>
        
        {transition === 'slide' && <Slide in direction="right" timeout={500}><MCard {...props} /></Slide>}
        {transition === 'nothing' && <MCard {...props} />}           
       
      </Grid>
    )
  
}

export default MovieCard

MovieCard.defaultProps = {
  transition: 'nothing'
}

MovieCard.propTypes={
  transition: PropTypes.string
}