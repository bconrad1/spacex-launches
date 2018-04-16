import React, { Component } from "react";
import { Dropdown } from 'semantic-ui-react';
import { scroller } from 'react-scroll';

import './styles/FlightPicker.css';

class FlightPicker extends Component {

  handleChange = (event, flightNum) => {
    let className = 'flight-element-' + flightNum.value;
    scroller.scrollTo(className, {
      duration: 1,
      smooth: true,
      offset: 5
    })
  }

  render() {
    return (
      <div className='flight-picker-container'>
        <Dropdown
          selection
          options={this.props.flights}
          placeholder='Select Flight'
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default FlightPicker;
