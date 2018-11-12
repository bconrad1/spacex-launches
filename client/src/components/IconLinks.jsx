import React from 'react';
import {FaYoutube, FaNewspaper, FaImage} from 'react-icons/fa';

export const IconLinks = ({newsLink, imageLink, videoLink, isInList}) => {
  return (
        <div className={isInList ? 'icon-links-container-list': 'icon-links-container-card'}>
          <a href={imageLink} target={'#'}><FaImage className={'icon hvr'}/></a>
          <a href={newsLink} target={'#'}><FaNewspaper className={'icon hvr'}/></a>
          <a href={videoLink} target={'#'}><FaYoutube className={'icon hvr'}/></a>
        </div>
  );
};

export default IconLinks;