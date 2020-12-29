import React from 'react';
import DefaultLayout from './layouts/defaultLayout';
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
    path: '/choose_counselor',
    exact: true,
    layout: DefaultLayout,
    component: () => <ChooseCounselor />,
  },
];
