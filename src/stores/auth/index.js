import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Keys from '../../config/Keys';
import authService from '../../services/AuthService';
import { resetAxiosAuth } from '../../utils/axios';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userInfo: {},
  },
  reducers: {
    updateUserInfo: (state, action) => {
      state.userInfo = action.payload;
      window.localStorage.setItem(`${Keys.storeName}_${Keys.storeVersion}`, JSON.stringify(action.payload));
      resetAxiosAuth();
    },
    removeUserInfo: (state) => {
      state.userInfo = {};
      window.localStorage.removeItem(`${Keys.storeName}_${Keys.storeVersion}`);
      resetAxiosAuth();
    },
    unauthorized: (state, action) => {
      state.userInfo = {};
      window.localStorage.removeItem(`${Keys.storeName}_${Keys.storeVersion}`);
      resetAxiosAuth();

      // true: redirect to login page
      if (action.payload) {
        window.location.href='/';
      }
    },
  },
});

export const login = createAsyncThunk('auth/login', async (params) => {
  // const res = await authService.login(params);
  // return res;

  // fake data
  return {
    code: 0,
    data: {
      token: 'xxxxxxx',
      id: 111,
      email: 'xxx@xxx.xxx',
      name: 'xxx',
      scope: 1,
      createdTime: '2022-01-01T11:11:11.000Z'
    }
  };
});

export const { updateUserInfo, removeUserInfo, unauthorized } = authSlice.actions;

export default authSlice.reducer;
