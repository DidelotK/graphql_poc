import 'babel-polyfill';
import os from 'os';
import dotenv from 'dotenv';
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import graphqlSchema from './graphql/index';
import DEFAULT_CONF from './configs/default';


const app = express();

if (app.get('env') === 'development') {
  // Configure env for development
  dotenv.config();
}

const PORT = process.env.SERVER_PORT || DEFAULT_CONF.SERVER_PORT;

app.use(morgan('combined'));

// bodyParser is needed just for POST.
app.use('/graphql', cors(), bodyParser.json(), graphqlExpress({ schema: graphqlSchema }));

if (process.env.NODE_ENV === 'development') {
  app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
}

console.log(`Server running at: http://${os.hostname()}:${PORT}`);

app.listen(PORT);
