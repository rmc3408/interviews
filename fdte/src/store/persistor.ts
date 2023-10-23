import { rootReducer } from './slices/root'
import { persistReducer, WebStorage } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


// Keep data in LocalStorage
const persistConfig: { key: string, storage: WebStorage } = {
  key: 'root',
  storage,
}
export const persistedReducer = persistReducer(persistConfig, rootReducer)
