import axios from 'axios';

const strapi = axios.create({
  baseURL: 'https://react-redux-ecommerce.herokuapp.com',
});

export default strapi;
