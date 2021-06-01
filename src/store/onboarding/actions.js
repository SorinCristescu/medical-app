import * as types from './types';

// Save role
export const saveRoles = (roles) => (dispatch) =>
  dispatch({
    type: types.SAVE_ROLES,
    payload: roles,
  });

// Save  personal info
export const savePersonalInfo = (_obj) => (dispatch) =>
  dispatch({
    type: types.SAVE_PERSONAL_INFO,
    payload: _obj,
  });

// Save staff bio
export const saveStaffBio = (_obj) => (dispatch) =>
  dispatch({
    type: types.SAVE_STAFF_BIO,
    payload: _obj,
  });

// Save location
export const saveLocation = (_obj) => (dispatch) =>
  dispatch({
    type: types.SAVE_LOCATION,
    payload: _obj,
  });

// Save staff certificate
export const saveStaffCertificate = (_obj) => (dispatch) =>
  dispatch({
    type: types.SAVE_STAFF_CERTIFICATE,
    payload: _obj,
  });

// Remove staff certificate
export const removeStaffCertificate = (_obj) => (dispatch) =>
  dispatch({
    type: types.REMOVE_STAFF_CERTIFICATE,
    payload: _obj,
  });

// Save staff malpraxis
export const saveStaffMalpraxis = (_obj) => (dispatch) =>
  dispatch({
    type: types.SAVE_STAFF_MALPRAXIS,
    payload: _obj,
  });

// Remove staff malpraxis
export const removeStaffMalpraxis = (_obj) => (dispatch) =>
  dispatch({
    type: types.REMOVE_STAFF_MALPRAXIS,
    payload: _obj,
  });

// Save staff experience
export const saveStaffExperience = (_obj) => (dispatch) =>
  dispatch({
    type: types.SAVE_STAFF_EXPERIENCE,
    payload: _obj,
  });

// Remove staff experience
export const removeStaffExperience = (_obj) => (dispatch) =>
  dispatch({
    type: types.REMOVE_STAFF_EXPERIENCE,
    payload: _obj,
  });

// Save staff education
export const saveStaffEducation = (_obj) => (dispatch) =>
  dispatch({
    type: types.SAVE_STAFF_EDUCATION,
    payload: _obj,
  });

// Remove staff education
export const removeStaffEducation = (_obj) => (dispatch) =>
  dispatch({
    type: types.REMOVE_STAFF_EDUCATION,
    payload: _obj,
  });

// Save staff service
export const saveStaffService = (_obj) => (dispatch) =>
  dispatch({
    type: types.SAVE_STAFF_SERVICE,
    payload: _obj,
  });

// Remove staff service
export const removeStaffService = (_obj) => (dispatch) =>
  dispatch({
    type: types.REMOVE_STAFF_SERVICE,
    payload: _obj,
  });
