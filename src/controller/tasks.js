import tasks from '../services/tasks';

const read = async (request, response) => {
  try {
    const allUsers = await tasks.getAllTasks();
    response.json(allUsers.map(({_id: id, title, order, description, userId, boardId, columnId}) => ({id, title, order, description, userId, boardId, columnId})));
  } catch (err) {
    response.json(err);
  }
};

const readOne = async (request, response) => {
  try {
    const { _id: id, title, order, description, userId, boardId, columnId } = await tasks.getTask(request.params.id);
    response.json({id, title, order, description, userId, boardId, columnId});
  } catch (err) {
    response.json(err);
  }
};

const create = async (request, response) => {
  try {
    const {_id: id, title, order, description, userId, boardId, columnId} = await tasks.createTask(await request.body);
    response.json({id, title, order, description, userId, boardId, columnId});
  } catch (err) {
    response.json(err);
  }
};

const update = async (request, response) => {
  try {
    const {_id: id, title, order, description, userId, boardId, columnId} = await tasks.updateTask(request.params.id, request.body);
    response.json({id, title, order, description, userId, boardId, columnId});
  } catch (err) {
    response.json(err);
  }
};

const remove = async (request, response) => {
  try {
    const {_id: id, title, order, description, userId, boardId, columnId} = await tasks.deleteTask(request.params.id);
    response.json({id, title, order, description, userId, boardId, columnId});
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
