

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stAuth: "",
  stuUser: "",
  stuId:"",
};

const stuSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.stAuth = true;
      state.stuUser = action.payload;
      state.stuId = action.payload.id;
    },
    logout: (state) => {
      state.stAuth = false;
      state.stuUser = null;
      state.stuId="";
    },
  },
});

export const { login, logout } = stuSlice.actions;

export const selectIsAuthenticated = (state) => state.auth.stAuth;
export const selectStuUser = (state) => state.auth.stuUser;
export const selectStuId = (state) => state.auth.stuId


export default stuSlice.reducer;
