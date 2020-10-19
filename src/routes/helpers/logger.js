import { Router } from 'express';
const morgan = require('morgan');

const router = new Router();

morgan.token('body', req => `body: ${JSON.stringify(req.body)}`);
morgan.token(
  'params',
  req => `\x1b[36m params: ${JSON.stringify(req.params)} \x1b[0m`
);

router.use(morgan(':method :url :params :body :status :response-time ms'));

export default router;
