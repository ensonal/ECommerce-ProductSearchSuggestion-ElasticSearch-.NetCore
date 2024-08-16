import { gql } from '@apollo/client';

export const GET_PRODUCTS_QUERY = gql`
  query GetProducts {
    getProducts {
      id
      name
      price
      imageUrl
      description
      rating
    }
  }
`;
