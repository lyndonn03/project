//This will hold actions
import { FETCH_USERS } from '../constants/index.js';

export const usersObject = {
  type: FETCH_USERS,
  payload: []
}

export const fetchUserAction = () => async dispatch => {
  const users = await fetch('https://jsonplaceholder.typicode.com/users')
                  .then(res => res.json());

  dispatch({
    type: FETCH_USERS,
    payload: users
  });
}
