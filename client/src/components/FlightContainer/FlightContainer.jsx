import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import FlightRow from './FlightCard/FlightCard';
import Slider from 'react-slick';

export class FlightContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      launches: props.launches,
      sliderValue: 1,
    };
  }

  render() {
    let {launches} = this.state;
    return (
        <Fragment>
          <div className={'flight-container-header'}>
            <div>{'Latest Launches'}</div>
          </div>
            {_.map(launches.slice(0, 3), launch => {
              return <FlightRow launch={launch}/>;
            })}
        </Fragment>
    );
  }
}

FlightContainer.propTypes = {
  launches: PropTypes.array,
};

export default FlightContainer;