

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  adminAuth: "",
  adminUser: "",
  adminid:"",
  
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    adminlogin: (state, action) => {
      state.adminAuth = true;
      state.adminUser = action.payload;
      state.adminid = action.payload.id;
      
    },
    adminlogout: (state) => {
      state.adminAuth = false;
      state.adminUser = null;
      state.adminid = null;
     
    },
  },
});

export const { adminlogin, adminlogout } = adminSlice.actions;
export const adminIsAuthenticated = (state) => state.admin.adminAuth;
export const selectadminUser = (state) => state.admin.adminUser;
export const selectadminid =(state) => state.admin.adminid;



export default adminSlice.reducer;
