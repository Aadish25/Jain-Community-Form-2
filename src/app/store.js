import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers/rootreducer.js'
export default configureStore({
  reducer: rootReducer,
})