import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
   uri: 'https://api-eu-central-1.graphcms.com/v2/cl0k0wrh34q5501z29ajf2zic/master',
   cache: new InMemoryCache(),
});

export default client;
