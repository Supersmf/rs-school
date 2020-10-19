import { Router } from 'express';

const router = new Router();

router.use('/', (err, req, res, next) => {
  if (err) {
    console.log(`\x1b[31m${err}\x1b[0m`);
    res.sendStatus(500);
    return;
  }
  next(err);
});

process.on('uncaughtException', error => {
  console.log(`\x1b[31mCaught exception: ${error}\x1b[0m`);
});

process.on('unhandledRejection', error => {
  console.log(`\x1b[31mUnhandled rejection detected: ${error.message}\x1b[0m`);
});

export default router;
