import { Router } from 'express';
import tasks from '../controllers/tasks';

const router = new Router();

router
  .get('/boards/:boardId/tasks', tasks.read)
  .get('/boards/:boardId/tasks/:id', tasks.readOne)
  .post('/boards/:boardId/tasks', tasks.create)
  .put('/boards/:boardId/tasks/:id', tasks.update)
  .delete('/boards/:boardId/tasks/:id', tasks.remove);

export default router;
