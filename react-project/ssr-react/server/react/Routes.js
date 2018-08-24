import React from 'react';
import {Route} from 'react-router-dom';
import HomeRoute from './components/HomeRoute';
import UserRoute from './components/UserRoute';

const Routes = () => {
  return(
    <div>
      <Route exact path={"/"} component={HomeRoute} />
      <Route path={"/users"} component={UserRoute} />
    </div>
  );
}

export default Routes;
