import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import auth from './auth';

const rootReducer = combineReducers({
  auth,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({reducer: rootReducer});

export default store;
