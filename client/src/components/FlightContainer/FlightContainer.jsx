import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Logo from '../../static/images/spacex.png';

export class FlightContainer extends React.Component {
  render() {
    return(
        <div className={'flight-container-table-container'}>
          <div className={'table-container-header'}/>
        </div>



    );
  }
}
function mapStateToProps(state) {
  return {
    launches: state.launchInfo,
  };
}

FlightContainer.PropTypes = {
  launches: PropTypes.object
};

export default connect(mapStateToProps)(FlightContainer);