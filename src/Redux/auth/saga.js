import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import axios from "axios";


import {
  LOGIN_USER,

} from "../actions";

import {
  loginUserSuccess,
  auth_failure,
 
} from "./actions";
const BASE_URL='http://localhost:3000';
const loginWithEmailPasswordAsync = async (email, password) =>
    
  await axios
    .post(`${BASE_URL}/api/login/`, {
      username: email,
      password: password
    })
    .then(response => response)
    .catch(error => error.response.data);

function* loginWithEmailPassword({ payload }) {
  const { email, password } = payload.user;
  const { history } = payload;
  
  const loginUser = yield call(
    loginWithEmailPasswordAsync,
    email,
    password
  );
  
  if (loginUser.status === 200) {
    localStorage.setItem("tokenId", loginUser.data.token);
    localStorage.setItem("loggedIn", true);
    yield put(loginUserSuccess(loginUser));
    history.push("/app");
  }
  else{
    yield put(auth_failure());
  }
}
export function* watchLoginUser() {
    yield takeEvery(LOGIN_USER, loginWithEmailPassword);
  }
export default function* rootSaga() {
    yield all([
      fork(watchLoginUser),
    ]);
}  