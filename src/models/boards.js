import mongoose, { Schema } from 'mongoose';

const boardSchema = new Schema(
  {
    title: String,
    columns: Object
  },
  {
    writeConcern: {
      j: true,
      wtimeout: 1000
    }
  }
);

export default mongoose.model('Boards', boardSchema, 'boards');
