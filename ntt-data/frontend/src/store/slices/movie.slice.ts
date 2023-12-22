import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiMovieSlice = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_URL }),
  endpoints: builder => ({
    getMovieByTitle: builder.query({
      query: (title) => `/title/${title}`
    })
  })
})

export const { useGetMovieByTitleQuery } = apiMovieSlice