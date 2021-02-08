import {
  GET_USER_DATA_PENDING,
  IS_LOGIN_PENDING,
  SET_IS_LOGIN,
  SET_USER_DATA,
  USER_API_ERROR,
} from '../actions/userActionTypes';

const initialState = {
  isLoginPending: false,
  getUserDataPending: false,
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
    case IS_LOGIN_PENDING:
      return { ...state, isLoginPending: payload };
    case GET_USER_DATA_PENDING:
      return { ...state, getUserDataPending: payload };
    default:
      return state;
  }
};

export default userReducer;
