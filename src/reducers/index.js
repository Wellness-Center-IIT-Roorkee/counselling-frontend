import { combineReducers } from 'redux';

const appReducer = combineReducers({});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = action.payload;
  }
  return appReducer(state, action);
};

export default rootReducer;
