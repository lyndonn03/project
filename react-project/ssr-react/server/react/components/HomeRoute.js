import React from 'react';
const HomeRoute = () => {
  return (
    <div>
      <div>This is Home Route</div>
      <button className={'button-wews'} onClick={()=> { alert('reactDOM is hydrating the SSR') }} >
        Press me!!
      </button>
    </div>
  );
}

export default HomeRoute;
