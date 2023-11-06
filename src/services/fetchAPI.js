import axios from 'axios';

axios.defaults.baseURL = 'https://64e1402c50713530432d0c78.mockapi.io';

export const fetchCars = async () => {
  const { data } = await axios.get('/adverts');
  return data;
};
