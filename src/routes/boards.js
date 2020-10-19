import { Router } from 'express';
import boards from '../controllers/boards';

const router = new Router();

router
  .get('/boards', boards.read)
  .get('/boards/:id', boards.readOne)
  .post('/boards', boards.create)
  .put('/boards/:id', boards.update)
  .delete('/boards/:id', boards.remove);

export default router;
