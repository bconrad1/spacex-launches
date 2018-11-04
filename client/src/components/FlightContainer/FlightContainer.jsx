import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import FlightCard from './FlightCard/FlightCard';

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
            {_.map(launches.slice(0, 3), (launch, index) => {
              return <FlightCard launch={launch} key={index}/>;
            })}
        </Fragment>
    );
  }
}

FlightContainer.propTypes = {
  launches: PropTypes.array,
};

export default FlightContainer;