import axios from 'axios';

export const fetchProduct = async delivery => {
  const response = await axios.get(
    'https://backend-eliftech.onrender.com/api/products'
  );
  const products = response.data.filter(item => item.delivery === delivery);
  return products;
};
