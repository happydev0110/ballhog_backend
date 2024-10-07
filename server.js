import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import userRoutes from './server/routes/userRoutes.js';
import connectDB from './server/utils/connect-mongo.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

// app.use(cors());
app.use(cors({
  origin: 'https://ballhog-d6311a75b183.herokuapp.com',
  credentials: true,
}));

app.use(express.json());
// use routes
app.use('/api', userRoutes);

// Required to handle the path for ES module usage
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the React build folder
app.use(express.static(join(__dirname, 'build')));

// Catch-all handler to serve index.html for any route
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'build', 'index.html'));
});

// app.get('/test', (req, res) => {
//   res.json({ message: 'Server is running' });
// });

// MongoDB Connection
connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});