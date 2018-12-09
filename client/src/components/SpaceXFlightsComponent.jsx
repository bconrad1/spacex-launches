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
        <main>
          <Switch>
            <Route exact path={'/'} component={LatestLaunches}/>
            <Route path={'/launches'} component={LaunchList}/>
          </Switch>
        </main>
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

