// import { configureStore } from '@reduxjs/toolkit';

// import storeReducer from './reducer/slices/storeSlice';
// import userReducer from  './reducer/slices/userSlice'

// export const store = configureStore({
//   reducer: {
//     store: storeReducer,
//     user: userReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;


import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import storeReducer from './reducer/slices/storeSlice';
import userReducer from './reducer/slices/userSlice';

const rootReducer = combineReducers({
  store: storeReducer,
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;