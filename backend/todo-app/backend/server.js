require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// --- Safe MongoDB connection for serverless ---
// Cache the connection promise on the global object so repeated imports reuse it (prevents multiple connections)
async function connectToMongo() {
  if (mongoose.connection.readyState === 1) {
    // Already connected
    return;
  }

  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error('MONGO_URI is not set. Set the MONGO_URI environment variable in Vercel or .env for local dev.');
    return; // don't throw so function won't crash — requests will still fail gracefully
  }

  // Reuse cached promise if available
  if (!global._mongoConnectPromise) {
    global._mongoConnectPromise = mongoose.connect(uri)
      .then(() => console.log('MongoDB connected'))
      .catch(err => {
        console.error('MongoDB connection error:', err && (err.stack || err.message || err));
        // keep promise resolved to avoid retry storms but not throw
        return Promise.resolve();
      });
  }

  await global._mongoConnectPromise;
}

// Attempt a non-blocking connect (safe for serverless cold start). We call it here so logs show connection attempts.
connectToMongo();

// Routes
app.use('/api/todos', require('./routes/todos'));

// Global error handler — returns JSON errors instead of letting the serverless function crash
app.use((err, req, res, next) => {
  console.error('Unhandled error in request:', err && (err.stack || err.message || err));
  res.status(err && err.status ? err.status : 500).json({ message: 'Internal Server Error', error: err && (err.message || String(err)) });
});

// Only start server when run directly (keeps module side-effect free for serverless)
if (require.main === module) {
  // For local dev ensure we connect before listening so logs show the connection status
  connectToMongo().finally(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });
}

module.exports = { app, connectToMongo };