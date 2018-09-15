import axios from 'axios'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Reducers from '../client/_reducers/index'


export default (req) => {
    const instance = axios.create({
        baseURL: "http://localhost:8080",
        headers: { cookie : req.get("cookie") || '' } 
    })

    const store = createStore(Reducers, {}, applyMiddleware(thunk.withExtraArgument(instance)))

    return store;
    
}