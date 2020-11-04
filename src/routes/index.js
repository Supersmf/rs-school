import '@babel/polyfill';
import { Router } from 'express';
import users from './users';
import boards from './boards';
import tasks from './tasks';
import login from './login';
import badRequest from './helpers/badRequest';
import headers from './helpers/headers';
import logger from './helpers/logger';
import { verifyToken } from '../middlewares';

const router = new Router();

router
  .use(headers)
  .use(logger)
  .use(login)
  .use(verifyToken, users)
  .use(verifyToken, boards)
  .use(verifyToken, tasks)
  .use(verifyToken, badRequest);

export default router;
