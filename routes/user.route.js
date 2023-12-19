import express from "express";
const router = express.Router();

import { createUser, fetchUser, updateUser, deleteUser } from "../controllers/user.controller.js";

router.get("/user", fetchUser)
router.post("/user", createUser)
router.put("/user/:id", updateUser)
router.delete("/user/:id", deleteUser)

export default router