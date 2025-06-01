import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import campaignRoutes from './routes/campaignRoutes';
import messageRoutes from './routes/messageRoutes';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/campaigns', campaignRoutes);
app.use('/personalized-message', messageRoutes);

mongoose.connect(process.env.MONGODB_URI || '')
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log('Server running on port 5000');
    });
  })
  .catch(err => console.error(err));