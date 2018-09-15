import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Routes from '../client/Routes';
import serialize from 'serialize-javascript'

export default (req, store, context) => {
    const DOM = renderToString(
        <Provider store={store}>
            <StaticRouter context={context} location={req.path}>
                {renderRoutes(Routes)} 
            </StaticRouter>
        </Provider>
    )
    
    return `
         <html>
            <head>
                <body>
                    <div id="root">${DOM}</div>
                    <script>
                        window.INITIAL_STATE = ${serialize(store.getState())}
                    </script>
                    <script src="build.js"></script>
                </body>
            </head>
        </html>
    `
}