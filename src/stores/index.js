import { configureStore } from '@reduxjs/toolkit';
import { resetAxiosAuth } from '../utils/axios';
import Keys from '../config/Keys';

import authReducer, { updateUserInfo } from './auth';
import userSlice from './user';

export const store = configureStore({
    reducer: {
      auth: authReducer,
      user: userSlice,
    },
});

export const createStore = () => {
  return makeInit();
};

const makeInit = async () => {
  let result = false;

  makeAccount();

  resetAxiosAuth();

  result = true;

  return result;
};


const makeAccount = () => {
  const data = window.localStorage.getItem(`${Keys.storeName}_${Keys.storeVersion}`);
  if (data !== null) {
    store.dispatch(updateUserInfo(JSON.parse(data)));
  }
};
