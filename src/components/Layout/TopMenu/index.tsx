import React, { useEffect, useState } from 'react';
import XSeekLogo from 'assets/img/xseek-logo.svg';
import ArrowCircleRight from 'assets/img/arrow-circle-right.svg';
import './index.scss';

export const TopMenu = () => {
  return (
    <div className='mobile-top-menu'>
      <div className='left-title'>
        <img src={XSeekLogo} />
        <div className='right-label-mobile'>XSEEK</div>
      </div>
      <div className='right-side'>
        <div className='connect-label-mobile'>Connect</div>
        <img src={ArrowCircleRight} />
      </div>
    </div>
  );
};
