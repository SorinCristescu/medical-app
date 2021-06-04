import * as types from './types';

// INITIAL STATE
const initialState = {
  email: '',
  password: '',
  loading: false,
  errorCode: null,
  user: null,
};

// OBBOARDING REDUCER
const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SAVE_EMAIL:
      return {
        ...state,
        email: payload,
      };
    case types.SAVE_PASSWORD:
      return {
        ...state,
        password: payload,
      };

    case types.SIGNUP_START:
      return {
        ...state,
        loading: true,
      };

    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };

    case types.SIGNUP_FAIL:
      return {
        ...state,
        errorCode: payload,
      };
    // case types.SIGNIN_START:
    //   return {
    //     ...state,
    //     loading: true,
    //   };

    // case types.SIGNIN_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     user: payload,
    //   };

    // case types.SIGNIN_FAIL:
    //   return {
    //     ...state,
    //     errorCode: payload,
    //   };
    default:
      return state;
  }
};

export default authReducer;
