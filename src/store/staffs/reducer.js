import * as types from './types';

// INITIAL STATE
const initialState = {
  staffs: [],
  staff: null,
  loading: false,
  errorCode: null,
};

// STAFFS REDUCER
const staffsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_STAFFS_SUCCESS:
      return {
        ...state,
        staffs: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default staffsReducer;
