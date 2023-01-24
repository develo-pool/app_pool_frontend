import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import {applyToken, clearToken} from '../api/client';
import {AccessToken, User} from '../api/auth/types';

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authorize(state, action: PayloadAction<string>) {
      const decodedAccessToken: AccessToken = jwtDecode(action.payload);
      state.user = {
        username: decodedAccessToken.username,
        nickName: decodedAccessToken.nickName,
        role: decodedAccessToken.role,
      };
      applyToken(action.payload);
    },
    logout(state) {
      state.user = null;
      clearToken();
    },
  },
});

export default authSlice.reducer;
export const {authorize, logout} = authSlice.actions;
