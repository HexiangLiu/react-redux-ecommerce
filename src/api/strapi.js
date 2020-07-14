import axios from 'axios';

const strapi = axios.create({
  baseURL: 'http://localhost:1337',
});

export default strapi;
