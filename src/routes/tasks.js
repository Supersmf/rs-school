import { Router } from 'express';
import tasks from '../controller/tasks';

const router = new Router();

router
  .get('/tasks', tasks.read)
  .get('/tasks/:id', tasks.readOne)
  .post('/tasks', tasks.create)
  .put('/tasks/:id', tasks.update)
  .delete('/tasks/:id', tasks.remove);

export default router;
