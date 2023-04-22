import React from 'react';
import DashboardImage from 'assets/img/dashboard-image.svg';
import EyeImage from 'assets/img/eye.svg';
import ArrowImage from 'assets/img/arrow-narrow-right.svg';
import './index.scss';

export const Dashboard = () => {
  return (
    <div className='xseek-dashboard'>
      <div className='top-background'>
        <img src={DashboardImage} />
        <div className='background-text'>
          <b>Welcome to xSeek.</b>
          Do your strategic DYOR more comprehensive<br></br> and find potential
          flows in Projects or Creators.
        </div>
        <div className='information-container row'>
          <div className='single-container col-sm-12 col-md-6 col-lg-3 col-xl-2'>
            <div className='single-box'>
              <div className='up-label'>Total Transactions</div>
              <div className='down-value'>310, 022, 933</div>
            </div>
          </div>
          <div className='single-container col-sm-12 col-md-6 col-lg-3 col-xl-2'>
            <div className='single-box'>
              <div className='up-label'>EGLD Price</div>
              <div className='down-value'>$40.83</div>
            </div>
          </div>
          <div className='single-container col-sm-12 col-md-6 col-lg-3 col-xl-2'>
            <div className='single-box'>
              <div className='up-label'>Wallets</div>
              <div className='down-value'>2.2mil</div>
            </div>
          </div>
          <div className='single-container col-sm-12 col-md-6 col-lg-3 col-xl-2'>
            <div className='start-dyor'>
              <img src={EyeImage} />
              <div className='start-dyor-text'>Start DYOR</div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-learn'>
        <div className='bottom-learn-text'>Learn more about Our Project</div>
        <img src={ArrowImage} />
      </div>
    </div>
  );
};
