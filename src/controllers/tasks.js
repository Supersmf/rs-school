import tasks from '../services/tasks';

const read = async (request, response) => {
  try {
    const allUsers = await tasks.getAllTasks({ borderId: request.params.id });
    response.json(
      allUsers.map(
        ({
          _id: id,
          title,
          order,
          description,
          userId,
          boardId,
          columnId
        }) => ({ id, title, order, description, userId, boardId, columnId })
      )
    );
  } catch (err) {
    response.status(404).send();
  }
};

const readOne = async (request, response) => {
  try {
    const {
      _id: id,
      title,
      order,
      description,
      userId,
      boardId,
      columnId
    } = await tasks.getTask(request.params.id);
    response.json({ id, title, order, description, userId, boardId, columnId });
  } catch (err) {
    response.status(404).send();
  }
};

const create = async (request, response) => {
  try {
    const paramsBoardId = await request.params.boardId;
    const taskData = await request.body;

    const {
      _id: id,
      title,
      order,
      description,
      userId,
      boardId,
      columnId
    } = await tasks.createTask({ ...taskData, boardId: paramsBoardId });
    response.json({ id, title, order, description, userId, boardId, columnId });
  } catch (err) {
    response.status(404).send();
  }
};

const update = async (request, response) => {
  try {
    const {
      _id: id,
      title,
      order,
      description,
      userId,
      boardId,
      columnId
    } = await tasks.updateTask(request.params.id, request.body);
    response.json({ id, title, order, description, userId, boardId, columnId });
  } catch (err) {
    response.status(404).send();
  }
};

const remove = async (request, response) => {
  try {
    const {
      _id: id,
      title,
      order,
      description,
      userId,
      boardId,
      columnId
    } = await tasks.deleteTask(request.params.boardId, request.params.id);
    response.json({ id, title, order, description, userId, boardId, columnId });
  } catch (err) {
    response.status(404).send();
  }
};

export default {
  read,
  readOne,
  create,
  update,
  remove
};
