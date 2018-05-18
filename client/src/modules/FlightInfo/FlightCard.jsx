import React, {Component} from 'react';
import {Image, Grid} from 'semantic-ui-react';
import FlightInfo from './FlightInfo.jsx';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Immutable from 'immutable';

import './styles/CardStyle.css';

class FlightCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launches: this.props.data,
    };

    window.addEventListener('resize', this.handleResize);
  }

  formatDate(date) {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];

    let formattedDate = new Date(date);
    let year = formattedDate.getFullYear();
    let month = formattedDate.getMonth() + 1;
    let dt = formattedDate.getDate();

    if (dt < 10) {
      dt = '0' + dt;
    }

    let finalDate = `${monthNames[month -
    1].toLocaleUpperCase()}-${dt}-${year}`;
    return finalDate;
  }

  render() {
    const displayLaunches = this.props.data.map((launch) =>
        <div className={'flight-element-' + launch.get('flight') +
        ' card-container'} key={launch.get('flight')}>
          <Grid className='grid-outer'>
            <Grid.Column width={7} verticalAlign={'middle'}
                         className='info-container'>
              <FlightInfo data={Immutable.fromJS(launch)}/>
            </Grid.Column>
            <Grid.Column width={2} className='patch-image'>
              <div className={'patch-container'}>
                <Image className='mission-patch'
                       src={launch.get('missionPatch')}/>
              </div>
            </Grid.Column>
            <Grid.Column width={7} verticalAlign={'middle'}>
              <span className='timeline-date'>{this.formatDate(
                  launch.get('date'))}</span>
            </Grid.Column>
          </Grid>
          <div className='vertical-timeline'/>
        </div>,
    );

    return (
        <div>
          {displayLaunches}
        </div>
    );
  }
}

FlightCard.proptypes = {
  launches: ImmutablePropTypes.list,
};

export default FlightCard;