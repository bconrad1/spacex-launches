import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {FlightContainer} from './FlightContainer/FlightContainer';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';

export class LatestLaunches extends React.Component {
  constructor() {
    super();
    this.state = {
      launches: {},
      activeCard: 1,
      activeClass: 'slide-1',
    };

  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1900) {
        this.setState({
          activeClass: 'slide-1',
          activeCard: 1,
        });
      }
    });
  }

  handleSlideRight = () => {
    let activeCard = this.state.activeCard + 1;
    this.setState({
      activeCard: activeCard,
      activeClass: `slide-${activeCard}`,
    });
  };

  handleSlideLeft = () => {
    let activeCard = this.state.activeCard - 1;
    this.setState({
      activeCard: activeCard,
      activeClass: `slide-${activeCard}`,
    });
  };

  render() {
    let {activeCard, activeClass} = this.state;
    return (
        this.props.launches.length > 0 ?
            <Fragment>
              <div className={'spacex-container'}>
                <div className={'flight-container-header'}>
                  <div>{'LATEST'}</div>
                </div>
                <div className={`navigation-btn ${activeCard <= 1
                    ? 'disabled'
                    : ''}`}>
                <span className={'navigation-icon'}
                      onClick={this.handleSlideLeft}>
                  <FaChevronLeft/>
                </span>
                </div>
                <div className={'launch-slide-container'}>
                  <div className={`launch-container ${activeClass}`}>
                    <FlightContainer launches={this.props.launches}/>
                  </div>
                </div>
                <div className={`navigation-btn ${activeCard >= 3
                    ? 'disabled'
                    : ''}`}>
                <span className={'navigation-icon'}
                      onClick={this.handleSlideRight}>
                  <FaChevronRight/>
                </span>
                </div>
              </div>
            </Fragment> :
            <div>{}</div>);
  }
}

function mapStateToProps(state) {
  return {
    launches: state.launchInfo,
  };
}

export default connect(mapStateToProps)(LatestLaunches);

