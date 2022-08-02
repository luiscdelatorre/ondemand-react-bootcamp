import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './filterSlice'
import cartSlice from './cartSlice'
import { loadState } from './browserStorage'

export default configureStore({
  reducer: {
    filters: filterSlice,
    cart: cartSlice
  },
  preloadedState: loadState()
})
