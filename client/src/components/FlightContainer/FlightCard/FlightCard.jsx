import React from 'react';
import { Card, Icon } from 'semantic-ui-react'
import moment from 'moment';

function formatDate(date) {
  return moment(date).format('DD-MMM-YYYY').toUpperCase();
}

const FlightCard = ({launch}) => {
  return (
      <div className={`flight-card-container flight-${launch.flight}`}>
        <div className={'flight-card-top'}>
          <div>
            <div className={'success-container'}>
              <span id={'launch-status'}>STATUS: </span>{launch.success ? (<Icon name='checkmark' color="green" style={{fontSize:'16px'}}/>):<Icon name='remove' color="red" style={{fontSize:'18px'}}/>}
            </div>
          </div>

          <div className={'flight-card-number'}>
            {`Flight # ${launch.flight}`}
          </div>
          <div className={'flight-card-date'}>
            {formatDate(launch.date)}
          </div>
          <div className={'flight-card-image-container'}>
            <img src={launch.missionPatch} className={'flight-card-image'}/>
          </div>
        </div>
        <div className={'flight-card-bottom'}>
          <div className={'flight-card-name'}>
            {launch.rocket.rocket_name}
          </div>
        </div>
      </div>
  );
};

export default FlightCard;