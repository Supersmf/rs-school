import uuid from 'uuid';
import users from '../services/users';

const read = async (request, response) => {
  try {
    const allUsers = await users.getAllUsers();
    response.json(allUsers.map(({_id: id, name, login}) => ({id, name, login})));
  } catch (err) {
    response.json(err);
  }
};

const readOne = async (request, response) => {
  try {
    const { _id: id, name, login } = await users.getUser(request.params.id);
    response.json({id, name, login});
  } catch (err) {
    response.json(err);
  }
};

const create = async (request, response) => {
  try {
    const {_id: id, name, login} = await users.createUser(await request.body);
    response.json({id, name, login});
  } catch (err) {
    response.json(err);
  }
};

const update = async (request, response) => {
  try {
    const {_id: id, name, login} = await users.updateUser(request.params.id, request.body);
    response.json({id, name, login});
  } catch (err) {
    response.json(err);
  }
};

const remove = async (request, response) => {
  try {
    const {_id: id, name, login} = await users.deleteUser(request.params.id);
    response.json({id, name, login});
  } catch (err) {
    response.json(err);
  }
};

export default {
  read,
  readOne,
  create,
  update,
  remove,
};
