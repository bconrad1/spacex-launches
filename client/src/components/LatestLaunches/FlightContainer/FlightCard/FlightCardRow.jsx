import React from 'react';
import PropTypes from 'prop-types';

export const FlightCardRow = ({descriptor, className, text}) => {
  return(
      <div className={'bottom-row'}>
        <div className={`flight-card-row ${className}`}>
          <span className={'descriptor'}>{`${descriptor}:`}</span>{text}
        </div>
      </div>
  )
}

FlightCardRow.propTypes = {
  className: PropTypes.string,
  descriptor: PropTypes.string,
  text: PropTypes.string
}

export default FlightCardRow;