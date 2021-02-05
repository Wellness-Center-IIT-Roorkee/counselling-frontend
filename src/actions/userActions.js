import apiClient from '../helpers/apiClient';
import { apiDispatch } from '../helpers/helperFunctions';
import { USER_APIS } from '../urls';
import { SET_USER_DATA } from './userActionTypes';

export const login = (code, callback = () => {}) => {
  const url = USER_APIS.login;
  return dispatch => {
    apiClient
      .post(url, { code })
      .then(res => {
        apiDispatch(SET_USER_DATA, res.data);
        apiDispatch(SET_IS_LOGIN, true);
        callback(res.data);
      })
      .catch(err => {
        if (err.response.data.error !== 'You are already logged in.') {
          apiDispatch(SET_USER_DATA, {});
          apiDispatch(SET_IS_LOGIN, false);
        }
      });
  };
};
