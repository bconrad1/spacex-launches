import React from 'react';
import {FaYoutube, FaNewspaper, FaImage} from 'react-icons/fa';

export const IconLinks = ({newsLink, imageLink, videoLink}) => {
  return (
        <div className={'icon-links-container'}>
          <a href={imageLink} target={'#'}><FaImage className={'icon hvr'}/></a>
          <a href={newsLink} target={'#'}><FaNewspaper className={'icon hvr'}/></a>
          <a href={videoLink} target={'#'}><FaYoutube className={'icon hvr'}/></a>
        </div>
  );
};

export default IconLinks;