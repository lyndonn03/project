import { FETCH_USERS } from '../constants/index';
import { usersObject } from '../actions/index';

export default ( state = usersObject, action = {}) => {
  switch(action.type) {
    case FETCH_USERS:
      return Object.assign({}, state, {payload: action.payload});
    default:
      return state;
  }
}
