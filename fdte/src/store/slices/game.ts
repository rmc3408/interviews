import { createSlice } from '@reduxjs/toolkit'

interface GameState {
  hasStarted: boolean
}

const initialState: GameState = {
  hasStarted: false,
}

// Slice reducer for Game is started or not!
export const game = createSlice({
  name: 'Started Game',
  initialState,
  reducers: {
    on: (state: GameState) => {
      state.hasStarted = !state.hasStarted
    },
    off: (state: GameState) => {
      state.hasStarted = !state.hasStarted
    }
  },
})

export const { on, off } = game.actions
export default game.reducer