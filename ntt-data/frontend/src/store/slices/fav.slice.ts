import { createSlice } from '@reduxjs/toolkit'


type FavoriteType = { title: string, favorite: boolean }
const initialList: Array<FavoriteType> = [{ title: '', favorite: false }]

export const favSlice = createSlice({
  name: 'favorites',
  initialState: initialList,
  reducers: {
    toggle: (state, action) => {
      const foundIndex = state.findIndex((item: FavoriteType) => item.title === action.payload)
      if (foundIndex > -1) {
        state[foundIndex] = { title: action.payload, favorite: !state[foundIndex].favorite }
      }
      return state
    },
    create: (state, action) => {
      const foundIndex = state.findIndex((item: FavoriteType) => item.title === action.payload)
      if (foundIndex === -1) {
        state = [...state, { title: action.payload, favorite: false }]
      }
      return state
    },
  }
})

export const { toggle, create } = favSlice.actions
export default favSlice.reducer
