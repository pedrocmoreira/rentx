import axios from 'axios';

const { IP } = process.env;

const api = axios.create({
  baseURL: `http://${IP}:3333`,
});

export { api };