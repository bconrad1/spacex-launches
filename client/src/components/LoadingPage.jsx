import React from 'react';

const LoadingPage = ({className}) => {
  return (
      <div className={`${className} loading-page-container`}>
        <div className={'rocket-container'}>
          <div className='rocket'>
            <div className='wing wing-left'/>
            <div className='wing wing-right'/>
            <div className='window'/>
            <div className='body'/>
            <div className='flame-1'/>
            <div className='flame-2'/>
          </div>
          <div className={'rocket-loading-text'}>Loading...</div>
        </div>
      </div>
  );
};

export default LoadingPage;