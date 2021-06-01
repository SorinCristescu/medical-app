import { combineReducers } from 'redux';
import staffsReducer from './staffs/reducer';
import patientsReducer from './patients/reducer';
// import navigationReducer from './navigation/reducer';
// import usersReducer from './users/reducer';
// import authReducer from './auth/reducer';
// import businessReducer from './business/reducer';
// import stripeReducer from './stripe/reducer';
// import onboardingReducer from './onboarding/reducer';

export default combineReducers({
  staffs: staffsReducer,
  patients: patientsReducer,
  // navigation: navigationReducer,
  // auth: authReducer,
  // users: usersReducer,
  // business: businessReducer,
  // stripe: stripeReducer,
  onboarding: onboardingReducer,
});
