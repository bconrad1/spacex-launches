import React from 'react';

const FlightRow = ({launch}) => {
  console.log(launch.missionPatch)
    return(
      <div className={'flight-row-container'}>
        <div className={'flight-row-image-container'}>
          <img src={launch.missionPatch} className={'flight-row-image'}/>
        </div>
      </div>
    );
}

export default FlightRow;