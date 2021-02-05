import {
  SET_IS_LOGIN,
  SET_USER_DATA,
  USER_API_ERROR,
} from '../actions/userActionTypes';

const initialState = {
  userData: {},
  isLoggedIn: false,
  error: {},
};

const userReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case SET_IS_LOGIN:
      return { ...state, isLoggedIn: payload };
    case SET_USER_DATA:
      return { ...state, userData: payload };
    case USER_API_ERROR:
      return { ...state, error: error };
    default:
      return state;
  }
};

export default userReducer;
