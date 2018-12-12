import React, {Component} from 'react';
import LatestLaunches from './LatestLaunches/LatestLaunches';
import {Switch, Route} from 'react-router-dom';
import LaunchList from './LaunchList/LaunchList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as launchAction from '../redux/actions/launchAction';
import {withRouter} from 'react-router-dom';
import LoadingPage from './LoadingPage';

class SpaceXFlightsComponent extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.launchActions.fetchLaunches().then(() => {
      console.log('test');
      this.setState({
        loaded: true,
      });
    });
  };

  render() {
    let launchLength = this.props.launches.length;
    let classNameLoading = this.state.loaded ? 'hide-loading' : 'show-loading';
    let classNameShowSite = this.state.loaded ? 'show-site' : 'hide-site';
    return (
        <div>
          <LoadingPage className={classNameLoading}/>
          {launchLength > 0 ?
              <div className={classNameShowSite}>
                <Switch>
                  <Route exact path='/' component={LatestLaunches}/>
                  <Route path='/launches' component={LaunchList}/>
                </Switch>
              </div> : null}
        </div>
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

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(SpaceXFlightsComponent));


