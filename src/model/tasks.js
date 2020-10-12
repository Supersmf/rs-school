import mongoose, { Schema } from 'mongoose';

const taskSchema = new Schema(
  {
    title: String,
    order: Number,
    description: String,
    userId: String,
    boardId: String,
    columnId: String
  },
  {
    writeConcern: {
      j: true,
      wtimeout: 1000
    }
  }
);

export default mongoose.model('Tasks', taskSchema, 'tasks');
