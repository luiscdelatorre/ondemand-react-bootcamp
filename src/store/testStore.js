import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './filterSlice'
import cartSlice from './cartSlice'

export default configureStore({
  reducer: {
    filters: filterSlice,
    cart: cartSlice
  },
  preloadedState: {
    cart: [
      {
        id:'YZZ_XhIAAC0AvmiA',
        quantity: 1
      }
    ]
  }
})
