import 'babel-polyfill'
import React from 'react'
import DOM from 'react-dom'
import axios from 'axios'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Routes from './Routes';
import Reducers from './_reducers/index'
import logger from 'redux-logger'


const instance = axios.create({
    baseURL: '/api'
})

const store = createStore(Reducers, window.INITIAL_STATE, applyMiddleware(thunk.withExtraArgument(instance), logger))

DOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            {renderRoutes(Routes)}
        </BrowserRouter>
    </Provider>
    ,
    document.querySelector("#root")
)