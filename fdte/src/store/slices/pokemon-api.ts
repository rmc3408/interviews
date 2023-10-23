import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { PokeBall } from 'data/types'

type getDataLazyArgs = {
  id: number
}

// Slice to Get specific pokemon by ID 
export const pokemonApi = createApi({
  reducerPath: 'Pokemon Api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  keepUnusedDataFor: 10,
  endpoints: (builder) => {
    return {
      getPokemonById: builder.query<PokeBall, getDataLazyArgs>({
        query: ({ id }) => `pokemon/${id}`,
      }),
    }
  },
})

export const ReactQuery_middleware = (getDefaultMiddleware: any) => (
  getDefaultMiddleware({ immutableCheck: false, serializableCheck: false })
    .concat(pokemonApi.middleware)
)

export const { useGetPokemonByIdQuery, useLazyGetPokemonByIdQuery } = pokemonApi