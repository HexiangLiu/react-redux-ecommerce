import axios from 'axios';

const products = axios.create({
  baseURL: 'http://localhost:1337',
});

export default products;
