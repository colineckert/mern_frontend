import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

export const configureAppStore = preloadedState => {
  const store = configureStore({
    // reducer: questionReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
      .concat(process.env.NODE_ENV !== 'production' ? logger : []),
    preloadedState
  });

  return store;
};

