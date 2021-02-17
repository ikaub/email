import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import { emailReducer, EmailState } from './email/email.reducer';

export type RootState = {
  email: EmailState;
}

const persistConfig = {
  key: 'email',
  storage,
};

const rootReducer = combineReducers<RootState>({
  email: emailReducer,
});

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
