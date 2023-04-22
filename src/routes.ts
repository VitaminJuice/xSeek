import { dAppName } from 'config';
import { RouteType } from 'types';
import { withPageTitle } from './components/PageTitle';

import { Dashboard, Home, TermService, MainFunction } from './pages';

export const routeNames = {
  home: '/',
  unlock: '/unlock',
  dashboard: '/dashboard',
  termService: '/term-service',
  mainFunction: '/main-function'
};

interface RouteWithTitleType extends RouteType {
  title: string;
}

export const routes: RouteWithTitleType[] = [
  {
    path: routeNames.home,
    title: 'Home',
    component: Home
  },
  {
    path: routeNames.dashboard,
    title: 'Dashboard',
    component: Dashboard
  },
  {
    path: routeNames.termService,
    title: 'Terms And Service',
    component: TermService
  },
  {
    path: routeNames.mainFunction,
    title: 'Main Function',
    component: MainFunction
  }
];

export const mappedRoutes = routes.map((route) => {
  const title = route.title
    ? `${route.title} • MultiversX ${dAppName}`
    : `MultiversX ${dAppName}`;

  const requiresAuth = Boolean(route.authenticatedRoute);
  const wrappedComponent = withPageTitle(title, route.component);

  return {
    path: route.path,
    component: wrappedComponent,
    authenticatedRoute: requiresAuth
  };
});
