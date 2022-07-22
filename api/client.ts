import axios from 'axios';

const baseURL = 'http://3.39.176.13:8080/';

const client = axios.create({
  baseURL,
});

export default client;
