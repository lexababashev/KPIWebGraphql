import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import dotenv from 'dotenv';
import typeDefs from './graphql/schema.js';
import resolvers from './graphql/resolvers.js';
import { makeExecutableSchema } from '@graphql-tools/schema';

dotenv.config();

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());


const schema = makeExecutableSchema({ typeDefs, resolvers });
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
