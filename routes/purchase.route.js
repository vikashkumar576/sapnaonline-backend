import express from 'express';
const router = express.Router();
import { fetch, create, update, remove } from '../controllers/purchase.controller.js'

router.get('/purchase',fetch);
router.post('/purchase',create);
router.put('/purchase/:id',update);
router.delete('/purchase/:id',remove);

export default router;
