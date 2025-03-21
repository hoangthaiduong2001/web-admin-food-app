import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import session from 'redux-persist/lib/storage/session';
import { counterState } from './features/counter/counterSlice';
import { userState } from './features/login/loginSlice';

const persistConfig = {
  key: 'root',
  storage: session,
};

const rootReducer = combineReducers({
  count: persistReducer(persistConfig, counterState.reducer),
  user: persistReducer(persistConfig, userState.reducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
