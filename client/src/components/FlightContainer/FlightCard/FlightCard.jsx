import React from 'react';
import {Card, Icon} from 'semantic-ui-react';
import {FaCalendarAlt} from 'react-icons/fa';
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
              <span id={'launch-status'}>STATUS: </span>{launch.success ? (
                <Icon name='checkmark' color="green"
                      style={{fontSize: '16px'}}/>) : <Icon name='remove'
                                                            color="red"
                                                            style={{fontSize: '18px'}}/>}
            </div>
          </div>

          <div className={'flight-card-number'}>
            {`Flight # ${launch.flight}`}
          </div>
          <div className={'divider'}/>
          <div className={'flight-card-name'}>
            {launch.rocket.rocket_name}
          </div>
          <div className={'flight-card-image-container'}>
            <img src={launch.missionPatch} className={'flight-card-image'}/>
          </div>
        </div>
        <div className={'flight-card-bottom'}>
          <div className={'flight-card-date bottom-row'}>
            <span id={'calender-date'}><FaCalendarAlt
                className={'descriptor'}/>Date:</span>{formatDate(launch.date)}
          </div>
          <div className={'bottom-row'}>
            <div className={'flight-card-details'}><span
                className={'descriptor'}>{'Details:'}</span>{launch.details}</div>
          </div>
          <div className={'bottom-row'}>
            <div className={'flight-card-location'}>
              <span className={'descriptor'}>{'Site:'}</span>{launch.launchSite}</div>
          </div>
        </div>
      </div>
  );
};

export default FlightCard;