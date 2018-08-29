import React from 'react';
import {Route} from 'react-router-dom';
import HomeRoute from './components/HomeRoute';
import UserRoute from './components/UserRoute';

const Routes = [
  {
    ...HomeRoute,
    path: '/',
    exact: true
  },
  {
    ...UserRoute,
    path: '/users'
  }
]

export default Routes;
