import apiClient from '../helpers/apiClient';
import { apiDispatch } from '../helpers/helperFunctions';
import { BOOKING_APIS } from '../urls';
import {
  CREATE_BOOKING_PENDING,
  SET_BOOKING,
  BOOKING_API_ERROR,
} from './bookingActionTypes';
import { toastErrorMessage, toastSuccessMessage } from './toastActions';

export const confirmBooking = (data, callback) => {
  const url = BOOKING_APIS.booking;
  return dispatch => {
    dispatch(apiDispatch(CREATE_BOOKING_PENDING, true));
    apiClient
      .post(url, data)
      .then(res => {
        dispatch(apiDispatch(SET_BOOKING, res.data));
        dispatch(apiDispatch(CREATE_BOOKING_PENDING, false));
        dispatch(toastSuccessMessage('appointment created'));
        callback();
      })
      .catch(err => {
        dispatch(apiDispatch(SET_BOOKING, {}));
        dispatch(apiDispatch(BOOKING_API_ERROR, err.response));
        dispatch(apiDispatch(CREATE_BOOKING_PENDING, false));
        dispatch(
          toastErrorMessage('Some Error occured in Creating Appointment')
        );
      });
  };
};
