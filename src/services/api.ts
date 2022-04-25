import axios from 'axios';

const api = axios.create({
  baseURL: `http://SeuIP:3000`,
});

export { api };