import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import Routes from '../react/Routes';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';

const Boilerplate = (loc, store) => {
  const DOM = renderToString(
    <Provider store={store}>
      <StaticRouter location={loc.url} context={{}}>
        <div>
          {renderRoutes(Routes)}
        </div>
      </StaticRouter>
    </Provider>

  );

  return `
    <!Doctype HTML>
    <HTML>
      <HEAD>
        <TITLE></TITLE>
        <link rel="stylesheet" href="styles.css" />
      </HEAD>

      <BODY>
        <div id="root">${DOM}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </BODY>
    </HTML>
  `;
}

export default Boilerplate;
