import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react';
import moment from 'moment';
import FlightCardRow from './FlightCardRow';
import PropTypes from 'prop-types';
import {FaArrowAltCircleLeft} from 'react-icons/fa';
import IconLinks from './IconLinks';

export class FlightCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      detailLength: props.launch.details.length,
      lengthLimit: 200,
      showDetails: false,
    };
  }

  formatDate = (date) => {
    return moment(date).format('DD-MMM-YYYY').toUpperCase();
  };

  formatDetails = (details) => {
    let {detailLength, lengthLimit} = this.state;
    return detailLength > lengthLimit
        ? `${details.substring(0, lengthLimit)}...`
        : details;
  };

  handleShowDetails = () => {
    this.setState({showDetails: !this.state.showDetails});
  };

  render() {
    let {launch} = this.props;
    let {detailLength, lengthLimit, expanded, showDetails} = this.state;
    let detailClass = showDetails ? 'show-details' : 'hide-details';
    return (
        <div className={`flight-card-container flight-${launch.flight}`}>
          <div className={'flight-card-top'}>
            <div>
              <div className={'success-container'}>
                <span id={'launch-status'}>STATUS: </span>{launch.success ? (
                  <Icon name='checkmark' color="green"
                        style={{fontSize: '16px'}}/>) : <Icon name='remove'
                                                              color="red"
                                                              style={{fontSize: '18px'}}/>}
              </div>
            </div>

            <div className={'flight-card-number'}>
              {`Flight # ${launch.flight}`}
            </div>
            <div className={'divider'}/>
            <div className={'flight-card-name'}>
              {launch.rocket.rocket_name}
            </div>
            <div className={'flight-card-image-container'}>
              <img src={launch.missionPatch} className={'flight-card-image'}/>
            </div>
          </div>
          <div className={'flight-card-bottom-container'}>
            <div
                className={`flight-card-bottom-slide-container ${this.state.showDetails
                    ? 'show-details'
                    : 'hide-details'}`}>
              <div className={`flight-card-bottom ${showDetails
                  ? 'hide-details'
                  : ''}`}>
                <FlightCardRow descriptor={'Date'}
                               text={this.formatDate(launch.date)}
                               className={'flight-card-row-date'}/>
                <FlightCardRow descriptor={'Site'} text={launch.launchSite}
                               className={'flight-card-row-site'}/>
                <FlightCardRow descriptor={'Details'}
                               text={this.formatDetails(launch.details)}
                               className={`flight-card-row-details ${expanded
                                   ? 'details-expanded'
                                   : ''}`}/>
                <div className={'expand-icon-container'}>
                  {detailLength > lengthLimit &&
                  <div className={'expand-text hvr'}
                       onClick={this.handleShowDetails}>{'Read More...'}</div>}
                </div>
                <IconLinks newsLink={launch.article}
                           imageLink={launch.missionPatch}
                           videoLink={launch.video}/>
              </div>
              <div className={'full-details'}>
                <div className={'full-details-header'}>{'FULL DETAILS'}</div>
                <div className={'full-details-text'}>{launch.details}</div>
                <div className={'full-details-back-btn hvr'}
                     onClick={this.handleShowDetails}>
                  <FaArrowAltCircleLeft/>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  };
}

FlightCard.proptypes = {
  launch: PropTypes.object,
};

export default FlightCard;