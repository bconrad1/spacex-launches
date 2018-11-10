import React, {Component} from 'react';
import LatestLaunches from './LatestLaunches/LatestLaunches';
import {Switch, Route} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import LaunchList from './LaunchList/LaunchList';
import * as launchAction from '../redux/actions/launchAction';
import {connect} from 'react-redux';

export class SpaceXFlightsComponent extends Component {

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.launchActions.fetchLaunches();
  };

  render() {
    return (
        this.props.launches.length > 0 ?
            <Switch>
              <Route path={'/launches'} component={LaunchList}/>
              <Route exact path={'/'} component={LatestLaunches}/>
            </Switch> : <div> No launches</div>
    );

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

