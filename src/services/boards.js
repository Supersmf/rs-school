import Boards from '../models/boards';
import Tasks from '../models/tasks';

const getAllBoards = async () => {
  try {
    return await Boards.find();
  } catch (err) {
    throw new Error(err);
  }
};

const getBoard = async id => {
  try {
    return await Boards.findById(id);
  } catch (err) {
    throw new Error(err);
  }
};

const createBoard = async data => {
  try {
    return await Boards.create(data);
  } catch (err) {
    throw new Error(err);
  }
};

const updateBoard = async (id, data) => {
  try {
    return await Boards.findOneAndUpdate(
      { _id: id },
      { $set: data },
      { new: true }
    );
  } catch (err) {
    throw new Error(err);
  }
};

const deleteBoard = async id => {
  try {
    await Tasks.deleteMany({ boardId: id });
    return await Boards.findOneAndDelete({ _id: id });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard
};
