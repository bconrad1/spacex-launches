import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Logo from '../../static/images/spacex.png';
import _ from 'lodash';
import PaginationComponent from './PaginationComponent/PaginationComponent';
import FlightRow from './FlightRow/FlightRow';

export class FlightContainer extends React.Component {
  constructor(props) {
    super(props);
    let incrementValue = 15;
    let startValue = 0;
    let endValue = incrementValue;
    this.state = {
      fullLaunches: props.launches,
      launches: props.launches.slice(startValue, endValue),
      incrementValue,
    };
  }

  handleTileClick = (value) => {
    let {incrementValue, fullLaunches} = this.state;
    let newEndValue = value * incrementValue;
    let newStartValue = newEndValue-incrementValue;
    this.setState({
      startValue: newStartValue,
      endValue: newEndValue,
      launches: fullLaunches.slice(newStartValue, newEndValue)
    });
    window.scrollTo(0,0);
  }

  render() {
    let launchLength =    this.props.launches.length;
    let {launches, incrementValue} = this.state;
    return (
        <Fragment>
          <div className={'flight-container-table-container'}>
            <div className={'table-container-header'}/>
            {_.map(launches,(launch, index) => {
              return <FlightRow launch={launch} key={index}/>;
            })
            }
          </div>
          <PaginationComponent launchLength={launchLength}
                                handleClick={this.handleTileClick}
                                incrementValue={incrementValue}/>
        </Fragment>
    );
  }
}

FlightContainer.propTypes = {
  launches: PropTypes.array,
};

export default FlightContainer;