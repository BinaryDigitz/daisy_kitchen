import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userSlice from './userReducer'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore';



const rootReducer = combineReducers({user: userSlice});

const persistConfig = {
    key: 'root',
    storage,
    version:1
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck:false
        })
});

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch