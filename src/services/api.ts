import axios from 'axios';

const api = axios.create({
  baseURL: `http://SeuIP:3333`,
});

export { api };