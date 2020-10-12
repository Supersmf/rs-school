import { Router } from 'express';

const router = new Router();

router.use('/', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  next();
});

export default router;
