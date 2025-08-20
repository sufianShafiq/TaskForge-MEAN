/*
 * Entry point for the TaskForge backend API.
 *
 * This file sets up an Express application, connects to a MongoDB instance
 * using Mongoose, and registers API routes for managing tasks. To run
 * this server in development mode, install the dependencies with
 * `npm install` and start the server with `npm run dev` which uses nodemon.
 */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Load environment variables from .env file if present (optional)
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import routes
const taskRoutes = require('./routes/task.routes');

// Register routes with prefix
app.use('/api/tasks', taskRoutes);

// Default route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the TaskForge API' });
});

// MongoDB connection
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/taskforge';

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start server after successful DB connection
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });
