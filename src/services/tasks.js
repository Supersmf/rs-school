import mongoose, { Schema } from 'mongoose';
import Tasks from '../model/tasks';

const getAllTasks = async () => {
  try {
    return await Tasks.find();
  } catch (err) {
    throw new Error(err);
  }
};

const getTask = async (id) => {
  try {
    return await Tasks.findById(id);
  } catch (err) {
    throw new Error(err);
  }
};

const createTask = async data => {
  try {
    return await Tasks.create(data);
  } catch (err) {
    throw new Error(err);
  }
};

const updateTask = async (id, data) => {
  try {
    return await Tasks.findOneAndUpdate({_id: id}, {$set:data}, { "new": true});
  } catch (err) {
    throw new Error(err);
  }
};

const deleteTask = async (id, data) => {
  try {
    return await Tasks.findOneAndDelete({_id: id});
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};

