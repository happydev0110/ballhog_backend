import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import Routes from './server/routes/index.js';
import connectDB from './server/utils/connect-mongo.js';

const { default: sslRedirect } = await import('heroku-ssl-redirect');
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(sslRedirect.default());
// app.use((req, res, next) => {
//   if (req.header('x-forwarded-proto') !== 'https') {
//     res.redirect(`https://${req.header('host')}${req.url}`);
//   } else {
//     next();
//   }
// });

app.use(cors());
app.use(express.json());
// use routes
app.use('/api', Routes);

// Required to handle the path for ES module usage
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the React build folder
app.use(express.static(join(__dirname, 'build')));

// Catch-all handler to serve index.html for any route
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'build', 'index.html'));
});

// MongoDB Connection
connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});