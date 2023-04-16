import * as React from 'react';
import { Link } from 'react-router-dom';
import { AuthRedirectWrapper } from 'components';
import { dAppName } from 'config';
import { routeNames } from 'routes';

const HomePage = () => {
  return (
    <div className='d-flex flex-fill align-items-center container'>
      HI, HANDLE ON LEFT MENU FIRST! :)
    </div>
  );
};

export const Home = () => (
  <AuthRedirectWrapper>
    <HomePage />
  </AuthRedirectWrapper>
);
