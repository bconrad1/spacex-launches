import React, {Component} from 'react';
import LatestLaunches from './LatestLaunches/LatestLaunches';
import { Switch, Route } from 'react-router-dom'
import LaunchList from './LaunchList/LaunchList';

export class SpaceXFlightsComponent extends Component {


  render() {
    return(
      <Switch>
        <Route path={'/launches'} component={LaunchList}/>
        <Route exact path={'/'} component={LatestLaunches}/>
      </Switch>
    );

  }
}

export default SpaceXFlightsComponent;

