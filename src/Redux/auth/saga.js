import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import axios from "axios";


import {
  LOGIN_USER,
  FIND_USER_PROFILE
} from "../actions";

import {
  loginUserSuccess,
  findUserProfileSuccess,
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
    localStorage.setItem("email", loginUser.data.email);
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



const findUserProfileAsync = async email =>
  
  await axios
  .post(`${BASE_URL}api/user/find_single_user`, email, {
    headers: {
      Authorization: "token " + localStorage.getItem("tokenId"),
      
    },
  })
  .then(response => response)
  .catch(error => error.response);

function* findUserProfile(object ) {
  try{
    const userProfile = yield call(findUserProfileAsync,object.payload);
    console.log(userProfile)
    if (userProfile.status === 200)
    {
        yield put(findUserProfileSuccess(userProfile));
    }
    else
    {
        yield put(auth_failure());
    }
  }
  catch(error) 
  {
    console.log("error : ", error);
  }
}

export function* watchFindUserProfile() {
    yield takeEvery(FIND_USER_PROFILE, findUserProfile);
}




export default function* rootSaga() {
    yield all([
      fork(watchLoginUser),
      fork(watchFindUserProfile),
    ]);
}  