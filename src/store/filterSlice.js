import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    value: [],
    currentPage: 1
  },
  reducers: {
    setFilters: (state, action) => {
      state.value = action.payload
    },
    setPage: (state, action) => {
      state.currentPage = action.payload
    }
  }
})

export const { setFilters, setPage } = filterSlice.actions

export default filterSlice.reducer
