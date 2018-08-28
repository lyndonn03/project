//This will hold actions
import { FETCH_USERS } from '../constants/index.js';
import axios from 'axios';

export const usersObject = {
  type: FETCH_USERS,
  payload: []
}

export const fetchUserAction = () => async dispatch => {
  const users = await axios.get('https://jsonplaceholder.typicode.com/users').then(data => data.data);
  dispatch({
    type: FETCH_USERS,
    payload: users
  });
}
