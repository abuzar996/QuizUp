import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    AUTH_FAILURE
} from '../actions';
export const loginUser = (user, history) => ({
    type: LOGIN_USER,
    payload: { user , history}
  });
  export const loginUserSuccess = user => ({
    type: LOGIN_USER_SUCCESS,
    payload: user
});
export const auth_failure = () => ({
    type: AUTH_FAILURE
});