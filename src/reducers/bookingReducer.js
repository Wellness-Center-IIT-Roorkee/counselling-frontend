import {
  CREATE_BOOKING_PENDING,
  SET_BOOKING,
  BOOKING_API_ERROR,
  GET_BOOKING_PENDING,
} from '../actions/bookingActionTypes';

const initialState = {
  createBookingPending: false,
  getBookingPending: false,
  bookingData: null,
  error: {},
};

const bookingReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case SET_BOOKING:
      return { ...state, bookingData: payload };
    case CREATE_BOOKING_PENDING:
      return { ...state, createBookingPending: payload };
    case GET_BOOKING_PENDING:
      return { ...state, getBookingPending: payload };
    case BOOKING_API_ERROR:
      return { ...state, error: error };
    default:
      return state;
  }
};

export default bookingReducer;
