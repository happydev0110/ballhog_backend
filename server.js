import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './server/routes/userRoutes.js';
import dotenv from 'dotenv';
import connectDB from './server/utils/connect-mongo.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
// Middleware
app.use(cors());
app.use(express.json());
// use routes
app.use('/api', userRoutes);

// app.get('/test', (req, res) => {
//   res.json({ message: 'Server is running' });
// });

// MongoDB Connection
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});