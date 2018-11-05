import React, {Component, Fragment} from 'react';
import * as launchAction from '../../redux/actions/launchAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import _ from 'lodash';

export class LaunchList extends Component {
  render() {
    let {launches} = this.props;
    return (
        <div className={'spacex-container'}>
          <div className={'flight-container-header'}>
            <div>{'Launches'}</div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(LaunchList);