import * as React from 'react';
import { AuthRedirectWrapper } from 'components';
import './Home.scss';

const HomePage = () => {
  return <div className='d-flex flex-fill align-items-center container'></div>;
};

export const Home = () => (
  <AuthRedirectWrapper>
    <HomePage />
  </AuthRedirectWrapper>
);
