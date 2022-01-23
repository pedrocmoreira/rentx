import axios from 'axios';

const api = axios.create({
  baseURL: 'http://seuIP:3333',
});

export { api };