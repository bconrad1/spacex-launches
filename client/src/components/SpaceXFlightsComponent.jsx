import React, {Component} from 'react';
import LatestLaunches from './LatestLaunches/LatestLaunches';
import {Switch, Route} from 'react-router-dom';
import LaunchList from './LaunchList/LaunchList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as launchAction from '../redux/actions/launchAction';
import { withRouter } from 'react-router-dom';

class SpaceXFlightsComponent extends Component {

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.launchActions.fetchLaunches();
  };

  render() {
    return (
        this.props.launches.length > 0 ?
        <div>
          <Switch>
            <Route exact path='/' component={LatestLaunches}/>
            <Route path='/launches' component={LaunchList}/>
          </Switch>
        </div> : null
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SpaceXFlightsComponent));


