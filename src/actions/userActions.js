import apiClient from '../helpers/apiClient';
import { apiDispatch, deleteCookie } from '../helpers/helperFunctions';
import { USER_APIS } from '../urls';
import {
  IS_LOGIN_PENDING,
  SET_USER_DATA,
  SET_IS_LOGIN,
  GET_USER_DATA_PENDING,
  LOGGING_OUT_PENDING,
  USER_API_ERROR,
} from './userActionTypes';

export const login = (code, callback = () => {}) => {
  const url = USER_APIS.login;
  return dispatch => {
    dispatch(apiDispatch(IS_LOGIN_PENDING, true));
    apiClient
      .post(url, { code: code })
      .then(res => {
        dispatch(apiDispatch(SET_USER_DATA, res.data));
        dispatch(apiDispatch(SET_IS_LOGIN, true));
        dispatch(apiDispatch(IS_LOGIN_PENDING, false));

        callback(res.data);
      })
      .catch(err => {
        if (err.response.data.error !== 'You are already logged in.') {
          dispatch(apiDispatch(IS_LOGIN_PENDING, false));
          dispatch(apiDispatch(SET_IS_LOGIN, true));
        } else {
          dispatch(apiDispatch(SET_USER_DATA, {}));
          dispatch(apiDispatch(IS_LOGIN_PENDING, false));
          dispatch(apiDispatch(SET_IS_LOGIN, false));
          dispatch(apiDispatch(USER_API_ERROR, err.response));
        }
      });
  };
};

export const getInfo = () => {
  const url = USER_APIS.whoAmI;
  return dispatch => {
    dispatch(apiDispatch(GET_USER_DATA_PENDING, true));
    apiClient
      .get(url)
      .then(res => {
        dispatch(apiDispatch(SET_USER_DATA, res.data));
        dispatch(apiDispatch(SET_IS_LOGIN, true));
        dispatch(apiDispatch(GET_USER_DATA_PENDING, false));
      })
      .catch(err => {
        dispatch(apiDispatch(SET_USER_DATA, {}));
        dispatch(apiDispatch(SET_IS_LOGIN, false));
        dispatch(apiDispatch(USER_API_ERROR, err.response));
        dispatch(apiDispatch(GET_USER_DATA_PENDING, false));
      });
  };
};

export const logOut = () => {
  const url = USER_APIS.logout;
  return dispatch => {
    dispatch(apiDispatch(LOGGING_OUT_PENDING, true));
    apiClient
      .post(url)
      .then(res => {
        dispatch(apiDispatch(SET_USER_DATA, {}));
        dispatch(apiDispatch(SET_IS_LOGIN, false));
        dispatch(apiDispatch(LOGGING_OUT_PENDING, false));
      })
      .catch(err => {
        dispatch(apiDispatch(USER_API_ERROR, err.response));
        dispatch(apiDispatch(LOGGING_OUT_PENDING, false));
      });
  };
};
