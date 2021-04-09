import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { questionReducer } from '../reducers/question_reducer';

export const configureAppStore = preloadedState => {
  const store = configureStore({
    reducer: questionReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
      .concat(process.env.NODE_ENV !== 'production' ? logger : []),
    preloadedState
  });

  return store;
};

