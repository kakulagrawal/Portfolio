import express from "express";
import { loginAdmin, logoutAdmin } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/login", loginAdmin);
authRouter.post("/logout", logoutAdmin);

export default authRouter;