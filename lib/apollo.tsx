// Add Apollo Client to this file
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: `https://blog.karencode.com.br/graphql`,
  cache: new InMemoryCache({
    addTypename: false,
  }),
});
