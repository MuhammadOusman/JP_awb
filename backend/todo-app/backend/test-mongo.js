const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_URI;
if (!uri) {
  console.error('MONGO_URI not set in .env');
  process.exit(1);
}

mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 })
  .then(() => {
    console.log('Connected OK');
    return mongoose.disconnect();
  })
  .catch(err => {
    console.error('Connection failed:', err && err.message ? err.message : err);
    process.exit(1);
  });
