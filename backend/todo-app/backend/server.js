const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./models/Todo');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Ensure CORS headers and preflight responses for serverless environments
// Allow requests from any origin during development; in production tighten this to your frontend domain.
app.use((req, res, next) => {
  // Allow all origins (change to specific origin in production)
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  next();
});

// Use environment variables so hosts (Vercel, Fly, Railway, etc.) can set the connection string
const MONGO_URI = process.env.MONGO_URI || '';
const PORT = process.env.PORT || 5000;

if (!MONGO_URI) {
  console.warn('Warning: MONGO_URI is not set. The app will not connect to a database until you set MONGO_URI.');
}

// Serverless-friendly MongoDB connection with caching and middleware that waits for connection.
// This prevents repeated connect attempts on every cold start/invocation and avoids buffering timeouts.
let mongoConnectPromise = null;
const mongooseOpts = {
  // keep reasonable timeouts for serverless environments
  serverSelectionTimeoutMS: 10000, // 10s
  socketTimeoutMS: 45000,
};

async function connectToMongo() {
  if (!MONGO_URI) throw new Error('MONGO_URI not set');
  if (mongoose.connection.readyState === 1) return; // already connected
  if (!mongoConnectPromise) {
    mongoConnectPromise = mongoose
      .connect(MONGO_URI, mongooseOpts)
      .then(() => {
        console.log('MongoDB connected');
      })
      .catch((err) => {
        // clear promise so retries can occur on next invocation
        mongoConnectPromise = null;
        console.error('MongoDB connection error:', err && err.message ? err.message : err);
        throw err;
      });
  }
  return mongoConnectPromise;
}

// Ensure each request waits for DB connection (first request will trigger connect). This avoids
// Mongoose buffering operations and the 'buffering timed out' error when the connection isn't ready.
app.use(async (req, res, next) => {
  if (!MONGO_URI) return next();
  try {
    if (mongoose.connection.readyState !== 1) {
      await connectToMongo();
    }
    return next();
  } catch (err) {
    console.error('Database connection failed while handling request:', err && err.message ? err.message : err);
    return res.status(500).json({ error: 'Database connection failed' });
  }
});

// Routes
app.post('/todos', (req, res) => {
  const { text } = req.body;
  TodoModel.create({ text })
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Failed to create todo' });
    });
});

app.get('/todos', (req, res) => {
  TodoModel.find()
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch todos' });
    });
});

app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const updateData = {};
  if (req.body.completed !== undefined) {
    updateData.completed = req.body.completed;
  }
  if (req.body.text !== undefined) {
    updateData.text = req.body.text;
  }
  TodoModel.findByIdAndUpdate(id, updateData, { new: true })
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Failed to update todo' });
    });
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Failed to delete todo' });
    });
});

// Only listen when this file is run directly. This allows the app to be imported by serverless adapters / tests.
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
}

module.exports = app;
