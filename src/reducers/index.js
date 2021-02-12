import { combineReducers } from 'redux';
import userReducer from './userReducer';
import counsellorReducer from './counsellorReducer';
import bookingReducer from './bookingReducer';
import toastReducer from './toastReducer';

const appReducer = combineReducers({
  users: userReducer,
  counsellor: counsellorReducer,
  booking: bookingReducer,
  toast: toastReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = action.payload;
  }
  return appReducer(state, action);
};

export default rootReducer;
