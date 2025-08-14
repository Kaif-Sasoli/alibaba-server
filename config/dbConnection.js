import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log('🛢️  Database is connected!');
  } catch (error) {
    console.log('MONGODB connection FAILED:', error.message);
    // throw error; 
  }
};
