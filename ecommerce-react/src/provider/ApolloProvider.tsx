import React, { ReactNode } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

interface ApolloAppProviderProps {
  children: ReactNode;
}

const ApolloAppProvider: React.FC<ApolloAppProviderProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloAppProvider;
