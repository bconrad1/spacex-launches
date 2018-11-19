import React from 'react';
import MissingImage from '../../static/images/missing.png';

const MissionPatch = ({src, className}) => {
  console.log(src);
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