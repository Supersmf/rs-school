import mongoose, { Schema } from 'mongoose';

const boardSchema = new Schema(
  {
    // _id: mongoose.ObjectId,
    title: String,
    columns: String,
  },
  {
    writeConcern: {
      j: true,
      wtimeout: 1000
    }
  }
);

export default mongoose.model('Boards', boardSchema, 'boards');