import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  points:55,
}

export const bonusSlice = createSlice({
  name: 'bofsdfsdnus',
  initialState,
  reducers: {
    increment: (state) => {
      state.points += 1
    },
  },
})

export const { increment } = bonusSlice.actions

export default bonusSlice.reducer