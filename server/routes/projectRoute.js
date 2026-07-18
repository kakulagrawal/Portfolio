import express from "express";
import { createProject, getAllProjects, getProjectById, updateProject, deleteProject } from "../controllers/projectController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import upload from "../middlewares/multer.js";

const projectRouter = express.Router();


projectRouter.get("/", getAllProjects);
projectRouter.get("/:id", getProjectById);
projectRouter.post(
  "/",
  authMiddleware,
  upload.single("image"),
  createProject
);
projectRouter.put(
  "/:id",
  authMiddleware,
  upload.single("image"),
  updateProject
);
projectRouter.delete(
  "/:id",
  authMiddleware,
  deleteProject
);

export default projectRouter;