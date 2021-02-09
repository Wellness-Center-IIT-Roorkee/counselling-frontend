import { combineReducers } from 'redux';
import userReducer from './userReducer';
import counsellorReducer from './counsellorReducer';
import bookingReducer from './bookingReducer';

const appReducer = combineReducers({
  users: userReducer,
  counsellor: counsellorReducer,
  booking: bookingReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = action.payload;
  }
  return appReducer(state, action);
};

export default rootReducer;
