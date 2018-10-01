import React from 'react';
import { Divider} from '@material-ui/core';
import PropTypes from 'prop-types';
import CardContainer from './components/CardContainer';

const CardArea = (props) => {
  const { title, isLoading, children, nextPage, total_page, current_page, prevPage} = props;
    return(
      <div className="main">
        <Divider />
        <div className="title">
          <h4>{title}</h4>
        </div>
        {
          isLoading? 
            (<div className="loading-space">{children}</div>)
          :
            (
              <CardContainer
                nextPage={nextPage}
                prevPage={prevPage}
                total_page={total_page}
                current_page={current_page} 
              >
                {children}
              </CardContainer>)
        }
        <Divider />
      </div>
    );  
}
export default CardArea;

CardArea.defaultProps = {
  isLoading: false,
  title: '',
};

CardArea.propTypes = {
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  total_page: PropTypes.node.isRequired,
  current_page: PropTypes.node.isRequired
};
