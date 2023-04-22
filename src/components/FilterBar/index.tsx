import React from 'react';
import ExchangeIcon from 'assets/img/exchange.svg';
import CloseIcon from 'assets/img/close.svg';
import RefreshIcon from 'assets/img/refresh.svg';

import './index.scss';

export const FilterBar = ({ setFilterOpened }: any) => {
  const handleCloseFilter = () => {
    setFilterOpened(false);
  };

  return (
    <div className='opened-filter'>
      <div className='left-blank' />
      <div className='filter-bar'>
        <div className='sub-heading'>
          <div className='sub-text'>Exclude</div>
        </div>
        <div className='icon-container'>
          <div className='single-item'>
            <img src={ExchangeIcon} />
            <div className='single-text'>Exchanges</div>
          </div>
          <div className='single-item'>
            <img src={ExchangeIcon} />
            <div className='single-text'>System</div>
          </div>
        </div>
        <div className='sub-heading'>
          <div className='sub-text'>Direction</div>
        </div>
        <div className='direction-container'>
          <div className='direction-container-first'>
            <div className='single-box'>
              <div className='single-box-text'>Incoming</div>
            </div>
            <div className='single-box'>
              <div className='single-box-text'>Outcoming</div>
            </div>
          </div>
          <div className='single-box'>
            <div className='single-box-text'>Both</div>
          </div>
        </div>
        <div className='sub-heading'>
          <div className='sub-text'>Time Range</div>
        </div>
        <div className='time-range'>
          <div className='time-range-text'>Select</div>
          <select>
            <option value='1'>1 hours</option>
            <option value='2'>2 hours</option>
            <option value='3'>3 hours</option>
            <option value='4'>4 hours</option>
            <option value='5'>5 hours</option>
            <option value='6' selected>
              6 hours
            </option>
          </select>
        </div>
        <div className='update-container'>
          <div className='update-button'>
            <div className='update-button-text'>Update</div>
            <img src={RefreshIcon} />
          </div>
        </div>
        <div className='close-container' onClick={handleCloseFilter}>
          <div className='close-text'>Close</div>
          <img src={CloseIcon} />
        </div>
      </div>
    </div>
  );
};
