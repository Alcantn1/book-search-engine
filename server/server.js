const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const { typeDefs, resolvers } = require('./schemas');


const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Apply the Apollo Server middleware to Express
server.start().then(() => {
  server.applyMiddleware({ app });
});

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});


module.exports = app;
