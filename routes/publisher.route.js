import express from "express";
const router = express.Router();

import { createPublisher, fetchPublisher, updatePublisher, deletePublisher } from "../controllers/publisher.controller.js";

router.get('/publisher', fetchPublisher)
router.post('/publisher', createPublisher)
router.put('/publisher/:id', updatePublisher)
router.delete('/publisher/:id', deletePublisher)

export default router