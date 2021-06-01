import * as types from './types';

// INITIAL STATE
const initialState = {
  patients: [],
  patient: null,
  loading: false,
  errorCode: null,
};

// PATIENTS REDUCER
const patientsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_PATIENTS_SUCCESS:
      return {
        ...state,
        patients: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default patientsReducer;
