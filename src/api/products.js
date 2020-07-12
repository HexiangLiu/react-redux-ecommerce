import axios from 'axios';

const products = axios.create({
  baseURL: 'http://johnsmilgatutorials.com/projects/react-tech-store-v2',
});

export default products;
