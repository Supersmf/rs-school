import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    // _id: mongoose.ObjectId,
    name: String,
    login: String,
    password: String
  },
  {
    writeConcern: {
      j: true,
      wtimeout: 1000
    }
  }
);

export default mongoose.model('Users', userSchema, 'users');
