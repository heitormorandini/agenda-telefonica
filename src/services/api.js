import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.64:8000',
})

export default api;
