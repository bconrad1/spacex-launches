import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as launchAction from '../redux/actions/launchAction';
import {FlightContainer} from './FlightContainer/FlightContainer';
import logo from '../static/images/spacex.png';

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
    console.log(this.props.launches);
    return (
        this.props.launches.length > 0 ?
            <div className={'spacex-container'}>
              <div className={'logo-container'}>
                <img src={logo} className={'logo-img'}/>
              </div>
              <div className={'launch-container'}>
                <FlightContainer launches={this.props.launches}/>
              </div>
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

