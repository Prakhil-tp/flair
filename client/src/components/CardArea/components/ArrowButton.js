import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

const ArrowButton = (props) => {
  const { action, style, type, show } = props;
  if(show)
    return (
      <Button 
        variant="fab" 
        style={style}
        onClick={action}
        color="primary"
      >
        <i className="material-icons">{type}</i>
      </Button>
    )
  return null;
}

ArrowButton.propTypes = {
  action: PropTypes.func.isRequired,
  style: PropTypes.shape({position: PropTypes.node}).isRequired,
  type: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired
}

export default ArrowButton

