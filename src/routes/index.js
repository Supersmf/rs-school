import '@babel/polyfill';
import { Router } from 'express';
import users from './users';
import boards from './boards';
import tasks from './tasks';
import badRequest from './helpers/badRequest';
import headers from './helpers/headers';

const router = new Router();

router
  .use(headers)
  .use(users)
  .use(boards)
  .use(tasks)
  .use(badRequest);

export default router;