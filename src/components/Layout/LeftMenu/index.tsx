import React, { useContext } from 'react';

import XSeekLogo from 'assets/img/xseek-logo.svg';
import DefaultWelcomeIcon from 'assets/img/default-welcome-icon.svg';
import SelectedWelcomeIcon from 'assets/img/selected-welcome-icon.svg';
import DefaultERDIcon from 'assets/img/default-erd-icon.svg';
import SelectedERDIcon from 'assets/img/selected-erd-icon.svg';
import DefaultTermIcon from 'assets/img/default-term-icon.svg';
import SelectedTermIcon from 'assets/img/selected-term-icon.svg';
import ConnectIcon from 'assets/img/connect-icon.svg';

import { routeNames } from 'routes';
import { MenuContext } from 'App';
import './index.scss';
import { useNavigate } from 'react-router-dom';

export const LeftMenu = () => {
  const { selectedMenu, setSelectedMenu } = useContext(MenuContext);
  const navigate = useNavigate();

  return (
    <div className='left-menu'>
      <div className='top-title'>
        <img src={XSeekLogo} />
        <div className='right-label'>XSEEK</div>
      </div>
      <div className='medium-box'>
        {selectedMenu === 0 ? (
          <div className='selected-single-menu'>
            <img src={SelectedWelcomeIcon} />
            <div className='selected-left-bar' />
          </div>
        ) : (
          <div
            className='default-single-menu'
            onClick={() => {
              setSelectedMenu(0);
              navigate(routeNames.dashboard, { replace: true });
            }}
          >
            <img src={DefaultWelcomeIcon} />
          </div>
        )}
        {selectedMenu === 1 ? (
          <div className='selected-single-menu'>
            <img src={SelectedERDIcon} />
            <div className='selected-left-bar' />
          </div>
        ) : (
          <div
            className='default-single-menu'
            onClick={() => {
              setSelectedMenu(1);
              navigate(routeNames.mainFunction, { replace: true });
            }}
          >
            <img src={DefaultERDIcon} />
          </div>
        )}
        {selectedMenu === 2 ? (
          <div className='selected-single-menu'>
            <img src={SelectedTermIcon} />
            <div className='selected-left-bar' />
          </div>
        ) : (
          <div
            className='default-single-menu'
            onClick={() => {
              setSelectedMenu(2);
              navigate(routeNames.termService, { replace: true });
            }}
          >
            <img src={DefaultTermIcon} />
          </div>
        )}
      </div>
      <div className='connect-box'>
        <div className='connect-label'>Connect</div>
        <img src={ConnectIcon} />
      </div>
    </div>
  );
};
