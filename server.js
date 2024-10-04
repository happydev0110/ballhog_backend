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

const corsOptions = {
  origin: 'https://playballhog.com', // Replace with your React app's domain
  methods: ['GET', 'POST'], // Specify allowed methods if necessary
  credentials: true, // Allow credentials (e.g., cookies) if needed
};

app.use(cors(corsOptions));
app.use(express.json());
// use routes
app.use('/api', userRoutes);

app.get('/api/espn', async (req, res) => {
  try {
    // Make a request to the ESPN API
    const { url, event } = req.query;
    const response = await axios.get(url, {
      params: {
        event
      },  // Pass along any query params
    });

    // Send the ESPN API response back to the frontend
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data from ESPN API' });
  }
});

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