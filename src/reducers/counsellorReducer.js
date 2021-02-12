import {
  SET_COUNSELLOR_DATA,
  GET_COUNSELLOR_DATA_PENDING,
  SET_ALL_COUNSELLORS_DATA,
  GET_ALL_COUNSELLORS_PENDING,
  COUNSELLOR_API_ERROR,
} from '../actions/counsellorActionTypes';

const initialState = {
  getAllCounsellorsPending: false,
  counsellorsData: null,
  error: {},
};

const counsellorReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case SET_ALL_COUNSELLORS_DATA:
      return { ...state, counsellorsData: [...payload] };
    case GET_ALL_COUNSELLORS_PENDING:
      return { ...state, getAllCounsellorsPending: payload };
    case COUNSELLOR_API_ERROR:
      return { ...state, error: error };
    default:
      return state;
  }
};

export default counsellorReducer;
