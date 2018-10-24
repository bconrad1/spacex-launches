import React from 'react';
import moment from 'moment';

function formatDate(date) {
  return moment(date).format('DD-MM-YYYY');
}

const FlightCard = ({launch}) => {
  return (
      <div className={`flight-card-container flight-${launch.flight}`}>
        <div className={'flight-card-top'}>
          <div className={'flight-card-name'}>
            {launch.rocket.rocket_name}
          </div>
          <div className={'flight-card-number'}>
            {`Flight # ${launch.flight}`}
          </div>
          <div className={'flight-card-image-container'}>
            <img src={launch.missionPatch} className={'flight-card-image'}/>
          </div>
        </div>
        <div className={'flight-card-date'}>
          {formatDate(launch.date)}
        </div>
      </div>
  );
};

export default FlightCard;