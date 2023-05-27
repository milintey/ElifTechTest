import axios from 'axios';

export const fetchProduct = async () => {
  const response = await axios.get(
    'https://6471e31b6a9370d5a41ac92f.mockapi.io/delivery/v1/product-kfc'
  );
  return response.data;
};
