import React from 'react';
import DefaultLayout from './layouts/defaultLayout';
import ConfirmAppointment from './views/confirmPage';

const Home = React.lazy(() => import('./views/home/index.js'));

export default [
  {
    path: '/',
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
];
