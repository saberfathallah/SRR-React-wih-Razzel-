import React from 'react';
import Home from './Home';
import { asyncComponent } from '@jaredpalmer/after';
import Test from './Components/Test';

const routes = [
  // normal route
  {
    path: '/',
    exact: true,
    component: Home,
  },
  // codesplit route
  {
    path: '/test',
    exact: true,
    component: Test,
  },
];

export default routes;