import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as launchAction from '../redux/actions/launchAction';
import {FlightContainer} from './FlightContainer/FlightContainer';

export class SpaceXFlightsComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      launches: {},
    };
  }

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    this.props.launchActions.fetchLaunches();
  };

  render() {
    return (
        this.props.launches.length > 0 ?
            <div className={'launch-container'}>
              <FlightContainer/>
            </div> :
            <div>{}</div>);
  }
}

function mapStateToProps(state) {
  return {
    launches: state.launchInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    launchActions: bindActionCreators(launchAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
    SpaceXFlightsComponent);

