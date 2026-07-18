import express from "express";
import {
  loginAdmin,
  logoutAdmin,
  getCurrentAdmin,
} from "../controllers/authController.js";

import authMiddleware from "../middlewares/authMiddleware.js";

const authRouter = express.Router();

authRouter.post("/login", loginAdmin);
authRouter.post("/logout", logoutAdmin);
authRouter.get("/me", authMiddleware, getCurrentAdmin);

export default authRouter;