import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import Routes from './server/routes/index.js';
import connectDB from './server/utils/connect-mongo.js';

const { default: sslRedirect } = await import('heroku-ssl-redirect');
dotenv.config();

const PORT = process.env.PORT || 5000;
const SOCKET_PORT = process.env.SOCEKT_PORT || 5000;
const app = express();

const server = http.createServer(app);

// Initialize Socket.IO on top of the HTTP server
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

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

// Socket.IO logic
io.on('connection', (socket) => {
  console.log('New socket connection:', socket.id);

  socket.on('send_message', (data) => {
    console.log('Received message via socket:', data);
    io.emit('receive_message', data); // broadcast to all
  });

  socket.on('disconnect', () => {
    console.log('Socket disconnected:', socket.id);
  });
});

// MongoDB Connection
connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Socket Server
server.listen(SOCKET_PORT, () => {
  console.log(`Socket Server running on ${SOCKET_PORT}`);
});