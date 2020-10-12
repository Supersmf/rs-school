import { Router } from 'express';

const router = new Router();

router.use('/', (req, res) => {
  res.status(404).send({ url: `sorry friend, but url ${req.originalUrl} is not found` });
});

export default router;
