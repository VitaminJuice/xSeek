import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import DefaultWelcomeIcon from 'assets/img/default-welcome-icon.svg';
import SelectedWelcomeIcon from 'assets/img/selected-welcome-icon.svg';
import DefaultERDIcon from 'assets/img/default-erd-icon.svg';
import SelectedERDIcon from 'assets/img/selected-erd-icon.svg';
import DefaultTermIcon from 'assets/img/default-term-icon.svg';
import SelectedTermIcon from 'assets/img/selected-term-icon.svg';

import { routeNames } from 'routes';
import { MenuContext } from 'App';
import './index.scss';

export const BottomMenu = () => {
  const { selectedMenu, setSelectedMenu } = useContext(MenuContext);
  const navigate = useNavigate();

  return (
    <div className='left-menu-bottom'>
      {selectedMenu === 2 ? (
        <div className='selected-single-menu-mobile'>
          <img src={SelectedTermIcon} />
          <div className='selected-left-bar-mobile' />
        </div>
      ) : (
        <div
          className='default-single-menu-mobile'
          onClick={() => {
            setSelectedMenu(2);
            navigate(routeNames.termService, { replace: true });
          }}
        >
          <img src={DefaultTermIcon} />
        </div>
      )}
      {selectedMenu === 0 ? (
        <div className='selected-single-menu-mobile'>
          <img src={SelectedWelcomeIcon} />
          <div className='selected-left-bar-mobile' />
        </div>
      ) : (
        <div
          className='default-single-menu-mobile'
          onClick={() => {
            setSelectedMenu(0);
            navigate(routeNames.dashboard, { replace: true });
          }}
        >
          <img src={DefaultWelcomeIcon} />
        </div>
      )}
      {selectedMenu === 1 ? (
        <div className='selected-single-menu-mobile'>
          <img src={SelectedERDIcon} />
          <div className='selected-left-bar-mobile' />
        </div>
      ) : (
        <div
          className='default-single-menu-mobile'
          onClick={() => {
            setSelectedMenu(1);
            navigate(routeNames.mainFunction, { replace: true });
          }}
        >
          <img src={DefaultERDIcon} />
        </div>
      )}
    </div>
  );
};
