import Auth from './pages/Auth';
import Home from './pages/Home';
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from './utils/consts';

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: <Home />,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <Auth />,
  },
  {
    path: LOGIN_ROUTE,
    Component: <Auth />,
  },
];
