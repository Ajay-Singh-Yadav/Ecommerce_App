import { configureStore } from "@reduxjs/toolkit";

import storeReducer from './reducer/slices/storeSlice';

export const store = configureStore({
  reducer:{
    store:storeReducer
  }
})