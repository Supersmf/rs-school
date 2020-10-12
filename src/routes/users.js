import { Router } from 'express';
import users from '../controller/users';

const router = new Router();

router
  .get('/users', users.read)
  .get('/users/:id', users.readOne)
  .post('/users', users.create)
  .put('/users/:id', users.update)
  .delete('/users/:id', users.remove);

export default router;
