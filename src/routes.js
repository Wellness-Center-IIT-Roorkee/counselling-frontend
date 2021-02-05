import React from 'react';
import DefaultLayout from './layouts/defaultLayout';

import ConfirmAppointment from './views/confirmPage';

import BookAppointment from './views/bookAppointment/bookAppointment';
import AfterLogin from './views/afterLogin/afterLogin';

const Home = React.lazy(() => import('./views/home/index.js'));

export const protectedRoutes = [
  {
    path: '/confirm',
    exact: true,
    layout: DefaultLayout,
    component: () => <ConfirmAppointment />,
  },
  {
    path: '/book_appointment',
    exact: true,
    layout: DefaultLayout,
    component: () => <BookAppointment />,
  },
];

export const publicRoutes = [
  {
    path: '/',
    exact: true,
    layout: DefaultLayout,
    component: () => <Home />,
    strictlyPublic: false,
  },
  {
    path: '/login',
    exact: true,
    layout: DefaultLayout,
    component: () => <Home />,
    strictlyPublic: true,
  },
  {
    path: '/after_login',
    exact: true,
    layout: DefaultLayout,
    component: () => <AfterLogin />,
    strictlyPublic: true,
  },
];
