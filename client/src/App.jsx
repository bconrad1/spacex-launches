import React, { Component } from 'react';
import SpaceXFlightsComponent from './components/SpaceXFlightsComponent';
import './static/css/index.scss';
class App extends Component {
  render() {
    return (
      <div style={ { height: '100%', margin: '0px'} }>
        <SpaceXFlightsComponent/>
      </div>
      );
  }
}

export default App;
