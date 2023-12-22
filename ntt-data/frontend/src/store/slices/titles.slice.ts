import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiTitleSlice = createApi({
  reducerPath: 'titles',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_URL }),
  endpoints: builder => ({
    getTitles: builder.query({
      query: (title) => `/search/${title}`
    })
  })
})

export const { useLazyGetTitlesQuery } = apiTitleSlice