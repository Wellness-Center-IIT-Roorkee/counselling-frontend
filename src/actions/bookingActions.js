import apiClient from '../helpers/apiClient';
import { apiDispatch } from '../helpers/helperFunctions';
import { BOOKING_APIS } from '../urls';
import {
  CREATE_BOOKING_PENDING,
  SET_BOOKING,
  BOOKING_API_ERROR,
  GET_BOOKING_PENDING,
  CANCEL_BOOKING_PENDING,
} from './bookingActionTypes';
import { toastErrorMessage, toastSuccessMessage } from './toastActions';

export const confirmBooking = (data, callback) => {
  const url = BOOKING_APIS.booking;
  return dispatch => {
    dispatch(apiDispatch(CREATE_BOOKING_PENDING, true));
    apiClient
      .post(url, data)
      .then(res => {
        callback();
        dispatch(apiDispatch(SET_BOOKING, res.data));
        dispatch(apiDispatch(CREATE_BOOKING_PENDING, false));
        dispatch(toastSuccessMessage('appointment created'));
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

export const cancelBooking = (id, callback = () => {}) => {
  const url = `${BOOKING_APIS.cancelBooking}${id}/cancel_appointment/`;
  const data = {
    booking_status: 'CANCELLED',
  };
  return dispatch => {
    dispatch(apiDispatch(CANCEL_BOOKING_PENDING, true));
    apiClient
      .patch(url, data)
      .then(() => {
        dispatch(apiDispatch(SET_BOOKING, {}));
        dispatch(apiDispatch(CANCEL_BOOKING_PENDING, false));
        dispatch(toastSuccessMessage('appointment cancelled'));
        callback();
      })
      .catch(err => {
        dispatch(apiDispatch(BOOKING_API_ERROR, err.response));
        dispatch(apiDispatch(CANCEL_BOOKING_PENDING, false));
        dispatch(
          toastErrorMessage('Some Error occured in cancelling Appointment')
        );
      });
  };
};

export const getBookingData = () => {
  const url = BOOKING_APIS.booking;
  return dispatch => {
    dispatch(apiDispatch(GET_BOOKING_PENDING, true));
    apiClient
      .get(url)
      .then(res => {
        dispatch(apiDispatch(SET_BOOKING, res.data.length ? res.data[0] : {}));
        dispatch(apiDispatch(GET_BOOKING_PENDING, false));
      })
      .catch(err => {
        dispatch(apiDispatch(SET_BOOKING, {}));
        dispatch(apiDispatch(BOOKING_API_ERROR, err.response));
        dispatch(apiDispatch(GET_BOOKING_PENDING, false));
      });
  };
};
