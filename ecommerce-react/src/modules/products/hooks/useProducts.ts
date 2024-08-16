import { useQuery } from '@apollo/client';
import { Product } from '../models/api-model/product';
import { GET_PRODUCTS_QUERY } from '../services/products.service';

export const useProducts = () => {
  const { data, loading, error } = useQuery<{ getProducts: Product[] }>(GET_PRODUCTS_QUERY);

  return {
    products: data?.getProducts || [],
    loading,
    error: error ? error.message : null,
  };
};
