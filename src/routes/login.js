import { Router } from 'express';
import login from '../controllers/login';

const router = new Router();

router.post('/login', login.signup);

export default router;
