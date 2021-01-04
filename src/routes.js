import React from 'react';
import DefaultLayout from './layouts/defaultLayout';

import ConfirmAppointment from './views/confirmPage';

import ChooseCounselor from './views/chooseCounselor/chooseCounselor';


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

    path: '/choose_counselor',
    exact: true,
    layout: DefaultLayout,
    component: () => <ChooseCounselor />,

  },
];
