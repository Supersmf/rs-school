import express from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import mongoose from 'mongoose';
import { MONGO_CONNECTION_STRING, PORT } from './config';
import routes from './routes';
import bodyParser from 'body-parser';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use('/', routes)
  .use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
  .listen(PORT);

  mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  mongoose.connection.on('error', () => console.log('⛔  Database connection error'));
  mongoose.connection.once('open', () => {
    console.log('✅  Database connected');
  });
  
  console.log(`Node application running on port ${PORT}`);

