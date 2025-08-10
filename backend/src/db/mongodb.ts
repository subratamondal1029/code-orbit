import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
  const response = await mongoose.connect(
    `${process.env.MONGODB_URI}/${DB_NAME}`
  );
  console.log(`MongoDB connected: ${response.connection.host}`);
};

export default connectDB;
