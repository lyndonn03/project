import { combineReducers } from "redux";
import FetchUserReducer from './FetchUserReducer'
import SignInReducer from "./SignInReducer";

export default combineReducers({
    checkAuth: FetchUserReducer,
    signAuth: SignInReducer
})