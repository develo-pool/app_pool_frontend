import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import auth from './auth';
import alert from './alert';

const rootReducer = combineReducers({
  auth,
  alert,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({reducer: rootReducer});

export default store;
