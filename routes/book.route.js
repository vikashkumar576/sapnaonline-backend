import express from 'express';
const router = express.Router();

import { createBook, fetchBook, fetchBookById, updateBook, deleteBook } from "../controllers/book.controller.js";

router.get("/books", fetchBook)
router.get("/books/:id", fetchBookById)
router.post("/books", createBook)
router.put("/books/:id", updateBook)
router.delete("/books/:id", deleteBook)

export default router
