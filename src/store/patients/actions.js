import * as types from './types';

// Fetch all patients
export const getPatients = () => (dispatch) =>
  dispatch({
    type: types.TICK,
    payload: { light: false, ts: Date.now() },
  });
