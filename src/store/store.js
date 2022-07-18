import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './filterSlice'

export default configureStore({
  reducer: {
    filters: filterSlice,
  }
})
