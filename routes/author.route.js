import express from 'express';
const router = express.Router();

import {createAuthor, fetchAuthor, updateAuthor, deleteAuthor} from '../controllers/author.controller.js'

router.get('/author', fetchAuthor)
router.post('/author', createAuthor)
router.put('/author/:id', updateAuthor)
router.delete('/author/:id', deleteAuthor)

export default router