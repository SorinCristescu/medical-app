import * as types from './types';

// INITIAL STATE
const initialState = {
  first_name: '',
  last_name: '',
  profesion_title: '',
  bio: '',
  roles: [],
  age: null,
  location: null,
  email: '',
  phone: '',
  avatar_url: '',
  malpraxis: null,
  certificate: null,
  experience: [],
  education: [],
  services: [],
  loading: false,
  errorCode: null,
};

// OBBOARDING REDUCER
const onboardingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SAVE_ROLES:
      return {
        ...state,
        roles: payload,
      };
    case types.SAVE_PERSONAL_INFO:
      return {
        ...state,
        first_name: payload.first_name,
        last_name: payload.last_name,
        email: payload.email,
        phone: payload.phone,
      };
    case types.SAVE_STAFF_BIO:
      return {
        ...state,
        profesion_title: payload.profesion_title,
        bio: payload.bio,
        avatar_url: payload.avatar_url,
      };
    case types.SAVE_LOCATION:
      return {
        ...state,
        location: payload,
      };
    case types.SAVE_STAFF_CERTIFICATE:
      return {
        ...state,
        certificate: payload,
      };
    case types.REMOVE_STAFF_CERTIFICATE:
      return {
        ...state,
        certificate: null,
      };
    case types.SAVE_STAFF_MALPRAXIS:
      return {
        ...state,
        malpraxis: payload,
      };
    case types.REMOVE_STAFF_MALPRAXIS:
      return {
        ...state,
        malpraxis: null,
      };
    case types.SAVE_STAFF_EXPERIENCE:
      return {
        ...state,
        experience: payload,
      };
    case types.REMOVE_STAFF_EXPERIENCE:
      const updatedExperience = state.experience.filter(
        (item) => item !== payload.id
      );
      return {
        ...state,
        experience: updatedExperience,
      };
    case types.SAVE_STAFF_EDUCATION:
      return {
        ...state,
        education: payload,
      };
    case types.REMOVE_STAFF_EDUCATION:
      const updatedEducation = state.education.filter(
        (item) => item !== payload.id
      );
      return {
        ...state,
        education: updatedEducation,
      };
    case types.SAVE_STAFF_SERVICE:
      return {
        ...state,
        services: payload,
      };
    case types.REMOVE_STAFF_SERVICE:
      const updatedServices = state.services.filter(
        (item) => item !== payload.id
      );
      return {
        ...state,
        services: updatedServices,
      };
    default:
      return state;
  }
};

export default onboardingReducer;
