import React from 'react';
import moment from 'moment';

function formatDate(date) {
  return moment(date).format('DD-MM-YYYY');
}

const FlightRow = ({launch}) => {
  return (
      <div className={`flight-row-container flight-${launch.flight}`}>
        <div className={'flight-row-top'}>
          <div className={'flight-row-name'}>
            {launch.rocket.rocket_name}
          </div>
          <div className={'flight-row-number'}>
            {`Flight # ${launch.flight}`}
          </div>
          <div className={'flight-row-image-container'}>
            <img src={launch.missionPatch} className={'flight-row-image'}/>
          </div>
        </div>
        <div className={'flight-row-date'}>
          {formatDate(launch.date)}
        </div>
      </div>
  );
};

export default FlightRow;