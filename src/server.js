import express from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { MONGO_CONNECTION_STRING, PORT } from './config';
import routes from './routes';
import users from './services/users';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app
  .use(express.urlencoded({ extended: false }))
  .use(express.json())
  .use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
  .use('/', routes)
  .listen(PORT);

mongoose.connect(MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
mongoose.connection.on('error', () =>
  console.log('\x1b[31mCaught exception: ⛔ Database connection error \x1b[0m')
);
mongoose.connection.once('open', async () => {
  console.log('\x1b[32m ✅  Database connected \x1b[0m');
  mongoose.connection.dropDatabase();
  const password = await bcrypt.hash('admin', 10);
  await users.createUser({ name: 'admin', login: 'admin', password });
});

console.log(`Node application running on port ${PORT}`);
