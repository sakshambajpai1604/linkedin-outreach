import express from 'express';
import { generateMessage } from '../controllers/messageController';

const router = express.Router();
router.post('/', generateMessage);

export default router;