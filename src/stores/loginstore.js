import { configureStore } from '@reduxjs/toolkit'
import LoginReducer from '../reducers/LoginReducer';


export default configureStore({
  reducer: LoginReducer
})