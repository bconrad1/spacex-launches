import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as launchAction from '../../redux/actions/launchAction';
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
    this.getDate();
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

  getDate = () => {
    this.props.launchActions.fetchLaunches();
  };

  render() {
    let {activeCard, activeClass} = this.state;
    return (
        this.props.launches.length > 0 ?
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
            </div> :
            <div>{}</div>);
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

export default connect(mapStateToProps, mapDispatchToProps)(
    LatestLaunches);

