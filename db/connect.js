import mongoose from 'mongoose';

const connect = async () => {
  try {
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/productsDB');
    console.log('MongoDB connected successfully');
    return conn;
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

export default connect;
