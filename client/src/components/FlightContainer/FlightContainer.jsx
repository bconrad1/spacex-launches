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
    this.state = {
      launches: props.launches.slice(0, incrementValue),
      incrementValue,
    };
  }

  render() {
    let launchLength =    this.props.launches.length;
    let {launches, incrementValue} = this.state;
    return (
        <Fragment>
          <div className={'flight-container-table-container'}>
            <div className={'table-container-header'}/>
            {_.map(launches, launch => {
              return <FlightRow launch={launch}/>;
            })
            }
          </div>
          <PaginationComponent launchLength={launchLength}
                                incrementValue={incrementValue}/>
        </Fragment>
    );
  }
}

FlightContainer.propTypes = {
  launches: PropTypes.array,
};

export default FlightContainer;