//import { submitResarch, ADD_NEW_PAPER } from "../actions/SubmitResarch";
import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loggedIn: false,
  },
  reducers: {
    login: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.loggedIn = true
    },
    logout: (state) => {
      state.loggedIn = false 
    },
    updateSession: (state, action) => {
      state.loggedIn = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, updateSession } = loginSlice.actions

const LoginReducer = loginSlice.reducer;

export default LoginReducer;