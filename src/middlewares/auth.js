import jwt from 'jsonwebtoken';
import config from '../config/index';

const verifyToken = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.sendStatus(401);
  }

  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  } else {
    return res.sendStatus(401);
  }

  jwt.verify(token, config.JWT_SECRET_KEY, (err, decoded) => {
    if (err) return res.sendStatus(401);
    req.user = decoded;
    next();
  });
};

export { verifyToken };
