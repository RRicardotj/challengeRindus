import axios from 'axios';
import { BASE_URL } from '../constants';

console.log('hgfdfdffghhj', BASE_URL);

const Http = axios.create({
  baseURL: BASE_URL,
});

export default Http;
