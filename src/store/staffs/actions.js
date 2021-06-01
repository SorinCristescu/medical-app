import * as types from './types';

// Fetch all staffs
export const getStaffs = () => (dispatch) =>
  dispatch({
    type: types.TICK,
    payload: { light: false, ts: Date.now() },
  });
