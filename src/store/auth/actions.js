import * as types from './types';

// Save email
export const saveRoles = (email) => (dispatch) =>
  dispatch({
    type: types.SAVE_EMAIL,
    payload: email,
  });

// Save password
export const savePassword = (password) => (dispatch) =>
  dispatch({
    type: types.SAVE_PASSWORD,
    payload: password,
  });
