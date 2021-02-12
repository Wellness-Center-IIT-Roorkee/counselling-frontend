import apiClient from '../helpers/apiClient';
import { apiDispatch } from '../helpers/helperFunctions';
import { COUNSELLOR_APIS } from '../urls';
import {
  SET_COUNSELLOR_DATA,
  GET_COUNSELLOR_DATA_PENDING,
  SET_ALL_COUNSELLORS_DATA,
  GET_ALL_COUNSELLORS_PENDING,
  COUNSELLOR_API_ERROR,
} from './counsellorActionTypes';

export const getCounsellorList = () => {
  const url = COUNSELLOR_APIS.counsellor;
  return dispatch => {
    dispatch(apiDispatch(GET_ALL_COUNSELLORS_PENDING, true));
    apiClient
      .get(url)
      .then(res => {
        dispatch(apiDispatch(SET_ALL_COUNSELLORS_DATA, res.data));
        dispatch(apiDispatch(GET_ALL_COUNSELLORS_PENDING, false));
      })
      .catch(err => {
        dispatch(apiDispatch(SET_ALL_COUNSELLORS_DATA, {}));
        dispatch(apiDispatch(COUNSELLOR_API_ERROR, err.response));
        dispatch(apiDispatch(GET_ALL_COUNSELLORS_PENDING, false));
      });
  };
};
