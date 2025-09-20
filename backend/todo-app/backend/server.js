require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware

app.use(cors());

app.use(express.json());

// MongoDB connection

mongoose.connect(process.env.MONGO_URI, {

  useNewUrlParser: true,

  useUnifiedTopology: true,

})

.then(() => console.log('MongoDB connected'))

.catch(err => console.log(err));

// Routes

app.use('/api/todos', require('./routes/todos'));

// Only start server when run directly (keeps module side-effect free for serverless)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;