import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    AUTH_FAILURE,
    FIND_USER_PROFILE,
    FIND_USER_PROFILE_SUCCESS
} from '../actions';
export const loginUser = (user, history) => ({
    type: LOGIN_USER,
    payload: { user , history}
  });
  export const loginUserSuccess = user => ({
    type: LOGIN_USER_SUCCESS,
    payload: user
});
export const findUserProfile = (user) => ({
    type: FIND_USER_PROFILE,
    payload:  user 
  });
  export const findUserProfileSuccess = user => ({
    type: FIND_USER_PROFILE_SUCCESS,
    payload: user
});
export const auth_failure = () => ({
    type: AUTH_FAILURE
});