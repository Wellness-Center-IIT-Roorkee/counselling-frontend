import { toast } from 'react-toastify';

import {
  TOAST_SUCCESS,
  TOAST_INFO,
  TOAST_ERROR,
  TOAST_WARNING,
} from '../actions/toastActionTypes';

const config = {
  position: 'bottom-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

// eslint-disable-next-line no-unused-vars
export default function toastReducer(
  state = { position: 'bottom-center' },
  { type, payload, error }
) {
  switch (type) {
    case TOAST_SUCCESS:
      toast.success(payload, config);
      return state;
    case TOAST_ERROR:
      toast.error(payload, config);
      return state;
    case TOAST_INFO:
      toast.info(payload, config);
      return state;
    case TOAST_WARNING:
      toast.warn(payload, config);
    default:
      return state;
  }
}
