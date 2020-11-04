import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { JWT_SECRET_KEY } from '../config';
import users from '../models/users';

const signup = async (request, response) => {
  try {
    const { login, password } = request.body;
    const user = await users.findOne({ login });

    if (!user) {
      return response.sendStatus(403);
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return response.sendStatus(403);
    }

    const token = jwt.sign({ userId: user._id, login }, JWT_SECRET_KEY, {
      expiresIn: '2 days'
    });

    response.status(200).send({ token });
  } catch (err) {
    response.json(err);
  }
};

export default {
  signup
};
