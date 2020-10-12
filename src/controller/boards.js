import uuid from 'uuid';
import boards from '../services/boards';

const read = async (request, response) => {
  try {
    const allUsers = await boards.getAllBoards();
    response.json(allUsers.map(({_id: id, title, columns}) => ({id, title, columns})));
  } catch (err) {
    response.json(err);
  }
};

const readOne = async (request, response) => {
  try {
    const { _id: id, title, columns } = await boards.getBoard(request.params.id);
    response.json({id, title, columns});
  } catch (err) {
    response.json(err);
  }
};

const create = async (request, response) => {
  try {
    const {_id: id, title, columns} = await boards.createBoard(await request.body);
    response.json({id, title, columns});
  } catch (err) {
    response.json(err);
  }
};

const update = async (request, response) => {
  try {
    const {_id: id, title, columns} = await boards.updateBoard(request.params.id, request.body);
    response.json({id, title, columns});
  } catch (err) {
    response.json(err);
  }
};

const remove = async (request, response) => {
  try {
    const {_id: id, title, columns} = await boards.deleteBoard(request.params.id);
    response.json({id, title, columns});
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
