import axios from 'axios';

const api = axios.create({
  baseURL: `http://SeuIp:3333`,
});

export { api };