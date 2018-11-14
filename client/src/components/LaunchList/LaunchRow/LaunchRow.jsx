import React, {Fragment, Component} from 'react';
import moment from 'moment';
import {Icon} from 'semantic-ui-react';
import IconLinks from '../../IconLinks';
import {FaCaretDown, FaCaretUp} from 'react-icons/fa';

class LaunchRow extends Component {
  constructor() {
    super();
    this.state = {
      hideRow: true,
    };
  }

  formatDate = (date) => {
    return moment(date).format('MMM-DD-YYYY');
  };

  onExpandClick = () => {
    this.setState({
      hideRow: !this.state.hideRow,
    });
  };

  render() {

    let {launch} = this.props;
    let rocketName = launch.rocket.rocket_name;
    return (
        <Fragment>
          <tr className={'launch-row-container '}>
            <td className={'row-expand'}>
                  <span onClick={this.onExpandClick} className={'row-expand-icon hvr'}> {this.state.hideRow ? <FaCaretDown/> : <FaCaretUp/>}</span>
            </td>
            <td className={'row-mission-patch'}><img src={launch.missionPatch}
                                                     className={'mission-patch'}/>
            </td>
            <td className={'row-flight-number'}>{`#${launch.flight}`}</td>
            <td className={'row-date'}>{this.formatDate(launch.date)}</td>
            <td className={'row-rocket-name'}>{rocketName}</td>
            <td className={'row-site'}>{launch.launchSite}</td>
            <td className={'row-links'}>
              <IconLinks newsLink={launch.article}
                         videoLink={launch.video}
                         imageLink={launch.missionPatch}
                         isInList/>
            </td>
            <td className={'row-success'}>{launch.success ? (
                <Icon name='checkmark' color='green'/>) : <Icon name='remove'
                                                                color="red"/>}
            </td>
          </tr>
          <tr className={`row-extra-info ${this.state.hideRow
              ? 'hide-details'
              : 'show-details'}`}>
            <td colSpan={7}>
              <div>{launch.details}</div>
            </td>
          </tr>
        </Fragment>
    );
  }
};

export default LaunchRow;