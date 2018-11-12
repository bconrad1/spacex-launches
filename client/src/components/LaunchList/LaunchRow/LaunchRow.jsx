import React from 'react';
import moment from 'moment';
import {Icon} from 'semantic-ui-react';
import IconLinks from '../../IconLinks';

const formatDate = (date) => {
  return moment(date).format('MMM-DD-YYYY');
};

const LaunchRow = ({launch}) => {
  let rocketName = launch.rocket.rocket_name;
  return (
      <tr className={'launch-row-container'}>
        <td className={'row-mission-patch'}><img src={launch.missionPatch}
                                                 className={'mission-patch'}/>
        </td>
        <td className={'row-flight-number'}>{`#${launch.flight}`}</td>
        <td className={'row-date'}>{formatDate(launch.date)}</td>

        <td>{rocketName}</td>
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
  );
};

export default LaunchRow;