import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import FlightRow from './FlightRow/FlightRow';
import Slider from 'react-slick';

export class FlightContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      launches: props.launches,
      sliderValue: 1,
    };
  }

  handleChange = (event) => {
    let flightNumber = event.target.value;
    let className = `flight-${flightNumber}`;
    this.setState({sliderValue: flightNumber});
  };

  render() {
    let {launches} = this.state;
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
        <Fragment>
          <Slider{...settings}>
            <div className={'flight-container-table-container'}>
              {_.map(launches, (launch, index) => {
                return <FlightRow launch={launch} key={index}/>;
              })
              }
            </div>
          </Slider>
        </Fragment>
    );
  }
}

FlightContainer.propTypes = {
  launches: PropTypes.array,
};

export default FlightContainer;