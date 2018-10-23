import React from 'react';
import moment from 'moment';

function formatDate(date) {
  return moment(date).format('DD-MM-YYYY');
}

const FlightRow = ({launch}) => {
  console.log(launch.missionPatch);
  return (
      <tbody className={'flight-row-container'}>
      <tr>
        <td className={'flight-row-num-img-container'}>
          <td className={'flight-row-image-container'}>
            <img src={launch.missionPatch} className={'flight-row-image'}/>
          </td>
        </td>
        <td className={'flight-row-number'}>
          {launch.flight}
        </td>
        <td className={'flight-row-date'}>
          {formatDate(launch.date)}
        </td>
        <td/>
        <td/>
      </tr>
      </tbody>
  );
};

export default FlightRow;