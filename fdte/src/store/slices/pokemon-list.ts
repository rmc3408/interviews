import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { PokeBall } from 'data/types'


interface PokeballState {
  pokeballs: Array<PokeBall | undefined>
}

const initialState: PokeballState = {
  pokeballs: Array.from({ length: 6 }, x => undefined),
}

// Slice reducer for list of 6 pokemon saved!
export const pokemonList = createSlice({
  name: 'Selected Pokemon',
  initialState,
  reducers: {
    save: (state: PokeballState, action: PayloadAction<PokeBall>) => {
      const empty_spot = state.pokeballs.indexOf(undefined)
      if (empty_spot < 0) {
        state.pokeballs
      } else {
        state.pokeballs[empty_spot] = action.payload
      }
    },
    remove: (state: PokeballState, action: PayloadAction<{ name: string }>) => {
      if (state.pokeballs.every(x => undefined)) {
        state.pokeballs
      } else {
        const removed = state.pokeballs.filter((savedPokemon) => savedPokemon && savedPokemon.name !== action.payload.name)
        state.pokeballs = [...removed, undefined]
      }  
    },
  },
})

export const { save, remove } = pokemonList.actions
export default pokemonList.reducer
