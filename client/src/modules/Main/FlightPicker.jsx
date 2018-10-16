import React, {Component} from 'react';
import {Dropdown} from 'semantic-ui-react';
import {scroller} from 'react-scroll';
import './styles/FlightPicker.css';

class FlightPicker extends Component {
  handleChange = (event, flightNum) => {
    let className = 'flight-element-' + flightNum.value;
    scroller.scrollTo(className, {
      duration: 1,
      smooth: true,
      offset: 5,
    });
  };

  ref = dropdownRef => {
    this.dropdownRef = dropdownRef;
  }

  render() {
    return (
        <div className='flight-picker-container'>
          <Dropdown
              ref={this.ref}
              selection
              options={this.props.flights.reverse()}
              placeholder='Select Flight'
              onChange={this.handleChange}
          />
        </div>
    );
  }
}

export default FlightPicker;
