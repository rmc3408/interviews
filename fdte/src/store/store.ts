import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { persistedReducer } from './persistor'
import { persistStore } from 'redux-persist'
import { ReactQuery_middleware } from 'store/slices/pokemon-api'


// Creating and configuring the store with Reducers and middlewares
export const store = configureStore({
  reducer: persistedReducer,
  middleware: ReactQuery_middleware
})

// Connecting store to persist data.
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
