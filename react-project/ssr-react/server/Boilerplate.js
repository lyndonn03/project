import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Routes from './react/Routes';

const Boilerplate = (loc) => {
  const DOM = renderToString(
    <StaticRouter location={loc.url} context={{}}>
     < Routes />
    </StaticRouter>

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
        <script src="bundle.js"></script>
      </BODY>
    </HTML>
  `;
}

export default Boilerplate;
