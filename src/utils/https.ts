import axios from 'axios';

const https = axios.create({
  baseURL: 'http://localhost:3456',
  timeout: 5000,
});

export { https };
