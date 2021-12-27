import About from './pages/About';
import Admin from './pages/Admin';
import Auth from './pages/Auth';
import Home from './pages/Home';
import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  ABOUT_ROUTE,
  ADMIN_ROUTE,
} from './utils/consts';

export const adminRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: <Admin />,
  },
];
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
  {
    path: ABOUT_ROUTE,
    Component: <About />,
  },
];
