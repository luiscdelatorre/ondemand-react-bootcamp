import { createSlice } from '@reduxjs/toolkit'
import { saveState } from './browserStorage'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    updateCart: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload.id)
      const isNewItem = index < 0
      if (isNewItem) {
        state.push(action.payload)
      } else {
        state[index] = {
          id: action.payload.id, 
          quantity: action.payload.quantity,
        }
      }
      saveState({
        cart: state 
      })
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload)
      const isItemInCart = index >= 0
      if (isItemInCart) {
        state.splice(index, 1)
      }
      saveState({
        cart: state 
      })
    }
  }
})

export const { updateCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
