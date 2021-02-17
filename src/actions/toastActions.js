import {
  TOAST_SUCCESS,
  TOAST_ERROR,
  TOAST_INFO,
  TOAST_WARNING,
} from './toastActionTypes';

export const toastSuccessMessage = message => {
  return {
    type: TOAST_SUCCESS,
    payload: message,
  };
};

export const toastErrorMessage = message => {
  return {
    type: TOAST_ERROR,
    payload: message,
  };
};

export const toastInfoMessage = message => {
  return {
    type: TOAST_INFO,
    payload: message,
  };
};
export const toastWarningMessage = message => {
  return {
    type: TOAST_WARNING,
    payload: message,
  };
};
