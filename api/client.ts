import axios, {AxiosError} from 'axios';
import store from '../slices';
import {authorize} from '../slices/auth';
import authStorage from '../storages/authStorage';
import {refresh} from './auth';
import {AuthResult} from './auth/types';

const baseURL = 'http://3.39.176.13:8080/';

const client = axios.create({
  baseURL,
});

client.interceptors.response.use(
  response => {
    return response;
  },
  async (error: AxiosError) => {
    const {dispatch} = store;
    if (error.response?.status === 500) {
      clearToken();
      const previousRequest = error.config;
      const auth = await authStorage.get();
      if (auth) {
        await refresh(auth).then((value: AuthResult) => {
          if (previousRequest.headers === undefined) {
            previousRequest.headers = {};
          }
          dispatch(authorize(value.accessToken));
          previousRequest.headers.Authorization = `Bearer ${value.accessToken}`;
          authStorage.set(value);
        });
      }
      return axios(previousRequest);
    }
  },
);

export function applyToken(jwt: string) {
  client.defaults.headers.common.Authorization = `Bearer ${jwt}`;
}

export function clearToken() {
  delete client.defaults.headers.common.Authorization;
}

export default client;
