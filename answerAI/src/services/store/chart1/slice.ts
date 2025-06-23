import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../'


interface ChartState {
  value: number
}

const initialState: ChartState = {
  value: 0,
}

export const chartSlice = createSlice({
  name: 'chart1',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = chartSlice.actions
export const selectChart = (state: RootState) => state.chart1.value

export default chartSlice.reducer
