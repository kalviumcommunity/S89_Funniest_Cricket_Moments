import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

app.get('/ping', (req, res) => {
  res.send('pong');
});

await mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true, // Fixed typo
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to the database');
}).catch((err) => {
  console.log('Database is not connected', err);
});

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});