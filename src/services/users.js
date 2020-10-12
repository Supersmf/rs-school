import Users from '../model/users';
import Tasks from '../model/tasks';

const getAllUsers = async () => {
  try {
    return await Users.find();
  } catch (err) {
    throw new Error(err);
  }
};

const getUser = async id => {
  try {
    return await Users.findById(id);
  } catch (err) {
    throw new Error(err);
  }
};

const createUser = async data => {
  try {
    return await Users.create(data);
  } catch (err) {
    throw new Error(err);
  }
};

const updateUser = async (id, data) => {
  try {
    return await Users.findOneAndUpdate(
      { _id: id },
      { $set: data },
      { new: true }
    );
  } catch (err) {
    throw new Error(err);
  }
};

const deleteUser = async id => {
  try {
    await Tasks.updateMany({ userId: id }, { $set: { userId: null } });
    return await Users.findOneAndDelete({ _id: id });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};
