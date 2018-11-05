import React, { Component } from 'react';
import SpaceXFlightsComponent from './components/SpaceXFlightsComponent';
import './static/css/index.scss';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div style={ { height: '100%', margin: '0px'} }>
        <Header/>
        <SpaceXFlightsComponent/>
      </div>
      );
  }
}

export default App;
