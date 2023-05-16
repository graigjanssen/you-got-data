import axios from 'axios';

export async function fetchData() {
  try {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data;
  } catch {
    throw new Error('Failed to fetch data');
  }
}