import React from 'react';
import MissingImage from '../../static/images/missing.png';

const MissionPatch = ({src, className}) => {
  return (
        <img src={src}
             className={`${className}`}
             onError={(e) => {
               e.target.onerror = null;
               e.target.src = MissingImage;
             }}/>
  );
};

export default MissionPatch;