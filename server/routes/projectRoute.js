import express from "express";
import { createProject } from "../controllers/projectController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import upload from "../middleware/multer.js";

const projectRouter = express.Router();

projectRouter.post(
  "/",
  authMiddleware,
  upload.single("image"),
  createProject
);

export default projectRouter;