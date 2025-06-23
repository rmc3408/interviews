import { configureStore } from '@reduxjs/toolkit'
import chartReducer from './chart1/slice'

export const store = configureStore({
  reducer: {
    chart1: chartReducer, // Placeholder for chart1 reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
