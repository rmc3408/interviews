import { combineReducers } from '@reduxjs/toolkit'
import pokemonList from './pokemon-list'
import pokemonGame from './game'
import { pokemonApi } from 'store/slices/pokemon-api'


export const rootReducer = combineReducers({
    pokemon: pokemonList,
    gameStarted: pokemonGame,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
})