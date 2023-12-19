import express from "express";
const router = express.Router();

import {signupHandler, loginHandler} from "../controllers/auth.controller.js"

router.post('/signup', signupHandler)
router.post('/login', loginHandler)

export default router