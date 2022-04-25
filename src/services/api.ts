import axios from 'axios';

const api = axios.create({
  baseURL: `http://SeuIp:3000`,
});

export { api };