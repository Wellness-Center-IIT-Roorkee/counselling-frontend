import React from 'react';
import DefaultLayout from './layouts/defaultLayout';

import ConfirmAppointment from './views/confirmPage';

import BookAppointment from './views/bookAppointment/bookAppointment';

const Home = React.lazy(() => import('./views/home/index.js'));

export default [
  {
    path: '/',
    exact: true,
    layout: DefaultLayout,
    component: () => <Home />,
  },
  {
    path: '/login',
    exact: true,
    layout: DefaultLayout,
    component: () => <Home />,
  },
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
