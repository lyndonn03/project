import React from 'react';
import {Route} from 'react-router-dom';
import HomeRoute from './components/HomeRoute';
import UserRoute, { loadData } from './components/UserRoute';

const Routes = [
  {
    component: HomeRoute,
    path: '/',
    exact: true
  },
  {
    loadData,
    component: UserRoute,
    path: '/users'
  }
]

export default Routes;
