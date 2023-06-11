import decode from 'jwt-decode';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { ApolloClient, InMemoryCache } from 'apollo-client';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class AuthService {
  // ...

  // Get the authorization token from localStorage
  getAuthorizationToken() {
    return localStorage.getItem('id_token');
  }

  // Create an Apollo client with the authorization token set in the request headers
  createApolloClient() {
    const httpLink = createHttpLink({
      uri: 'YOUR_GRAPHQL_API_ENDPOINT',
    });

    const authLink = setContext((_, { headers }) => {
      const token = this.getAuthorizationToken();
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        },
      };
    });

    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) => {
          console.error(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          );
        });
      }
      if (networkError) {
        console.error(`[Network error]: ${networkError}`);
      }
    });

    return new ApolloClient({
      link: ApolloLink.from([authLink, errorLink, httpLink]),
      cache: new InMemoryCache(),
    });
  }

  // ...

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    // Replace the following line with the appropriate route for your GraphQL API
    const apolloClient = this.createApolloClient();
    apolloClient.resetStore().then(() => {
      history.replace('/');
    });
  }

  logout() {
    localStorage.removeItem('id_token');
    const apolloClient = this.createApolloClient();
    apolloClient.resetStore().then(() => {
      history.replace('/');
    });
  }
}

export default new AuthService();
