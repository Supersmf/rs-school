import { Router } from 'express';
const morgan = require('morgan');

const router = new Router();

morgan.token(
  'body',
  req => `\x1b[45m \x1b[30m body: ${JSON.stringify(req.body)} \x1b[40m \x1b[37m`
);
morgan.token(
  'params',
  req => `\x1b[42m params: ${JSON.stringify(req.params) || '{}'} \x1b[0m`
);

router.use(morgan(':method :url :params :body :status :response-time ms'));

export default router;
