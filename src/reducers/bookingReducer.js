import {
  CREATE_BOOKING_PENDING,
  SET_BOOKING,
  BOOKING_API_ERROR,
} from '../actions/bookingActionTypes';

const initialState = {
  createBookingPending: false,
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
    case BOOKING_API_ERROR:
      return { ...state, error: error };
    default:
      return state;
  }
};

export default bookingReducer;
