import React from 'react';
import { useLocation } from 'react-router-dom';
import { AuthenticatedRoutesWrapper } from 'components';
import { routes, routeNames } from 'routes';
import { LeftMenu } from './LeftMenu';
import { TopMenu } from './TopMenu';
import { BottomMenu } from './BottomMenu';
import { PinkFooter } from './PinkFooter';
import './Layout.scss';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { search } = useLocation();
  return (
    <div className='cover-layout'>
      <LeftMenu />
      <TopMenu />
      <main className='d-flex flex-column flex-grow-1'>
        <AuthenticatedRoutesWrapper
          routes={routes}
          unlockRoute={`${routeNames.unlock}${search}`}
        >
          {children}
        </AuthenticatedRoutesWrapper>
        <PinkFooter />
      </main>
      <BottomMenu />
    </div>
  );
};
