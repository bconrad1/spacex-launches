import React, { Component } from "react";
import {Dropdown} from 'semantic-ui-react';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import './styles/FlightPicker.css';

class FlightPicker extends Component {
  constructor(props) {

    super(props);

  }

  findPos = (obj) => {
    let curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
  }

  handleChange = (event, flightNum) => {
    let className = 'flight-element-' + flightNum.value;
    scroller.scrollTo(className,{
      duration: 100,
      smooth: true
    })
  }

  render() {  
      return(
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
