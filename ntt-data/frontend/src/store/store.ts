import { configureStore } from '@reduxjs/toolkit'
import favSlice from './slices/fav.slice'
import { apiTitleSlice } from './slices/titles.slice'
import { apiMovieSlice } from './slices/movie.slice'


export const store = configureStore({
  reducer: {
    favorites: favSlice,
    titles: apiTitleSlice.reducer,
    movies: apiMovieSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiTitleSlice.middleware, apiMovieSlice.middleware)
})


