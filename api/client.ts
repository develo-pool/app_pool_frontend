import axios from 'axios';
// import authStorage from '../storages/authStorage';
// import {refresh} from './auth';

const baseURL = 'http://3.39.176.13:8080/';

const client = axios.create({
  baseURL,
});

// client.interceptors.response.use(
//   response => {
//     return response;
//   },
//   async error => {
//     if (error.response.status === 500) {
//       if (error.response.data.error === 'Internal Server Error') {
//         console.log('Internet Server Error : true');
//         const auth = await authStorage.get();
//         if (auth) {
//           await refresh(auth).then(value => console.log(value));
//           console.log('refresh!');
//         }
//       }
//     }
//   },
// );

export function applyToken(jwt: string) {
  client.defaults.headers.common.Authorization = `Bearer ${jwt}`;
}

export function clearToken() {
  delete client.defaults.headers.common.Authorization;
}

export default client;
