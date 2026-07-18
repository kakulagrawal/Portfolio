import Project from "../models/projectModel.js";
import mongoose from "mongoose";
import cloudinary from "../config/cloudinary.js";
import fs from "fs";

// Create Project
export const createProject = async (req, res) => {
  try {
    const {
      title,
      description,
      techStack,
      githubUrl,
      liveUrl,
      category,
      featured,
      order,
      status,
    } = req.body;

    if (!title || !description || !githubUrl || !req.file) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // Upload image to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
      folder: "Portfolio_Projects",
    });

    // Delete local uploaded file
    if (fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    // Parse tech stack
    let techStackArray = [];

    if (techStack) {
      try {
        techStackArray = JSON.parse(techStack);
      } catch {
        techStackArray = techStack
          .split(",")
          .map((tech) => tech.trim())
          .filter(Boolean);
      }
    }

    const project = await Project.create({
      title,
      description,
      image: uploadResult.secure_url,
      imagePublicId: uploadResult.public_id,
      techStack: techStackArray,
      githubUrl,
      liveUrl,
      category,
      featured,
      order,
      status,
    });

    return res.status(201).json({
      success: true,
      message: "Project created successfully.",
      project,
    });
  } catch (error) {
    console.error(error);

    if (req.file?.path && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Get All Projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1 });

    return res.status(200).json({
      success: true,
      count: projects.length,
      projects,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Get Project By ID
export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Project ID.",
      });
    }

    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found.",
      });
    }

    return res.status(200).json({
      success: true,
      project,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Update Project
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Project ID.",
      });
    }

    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found.",
      });
    }

    const {
      title,
      description,
      techStack,
      githubUrl,
      liveUrl,
      category,
      featured,
      order,
      status,
    } = req.body;

    if (!title || !description || !githubUrl) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    let image = project.image;
    let imagePublicId = project.imagePublicId;

    // Replace image if new one uploaded
    if (req.file) {
      const uploadResult = await cloudinary.uploader.upload(req.file.path, {
        folder: "Portfolio_Projects",
      });

      if (fs.existsSync(req.file.path)) {
        fs.unlinkSync(req.file.path);
      }

      if (project.imagePublicId) {
        await cloudinary.uploader.destroy(project.imagePublicId);
      }

      image = uploadResult.secure_url;
      imagePublicId = uploadResult.public_id;
    }

    // Parse tech stack
    let techStackArray = project.techStack;

    if (techStack) {
      try {
        techStackArray = JSON.parse(techStack);
      } catch {
        techStackArray = techStack
          .split(",")
          .map((tech) => tech.trim())
          .filter(Boolean);
      }
    }

    project.title = title;
    project.description = description;
    project.image = image;
    project.imagePublicId = imagePublicId;
    project.techStack = techStackArray;
    project.githubUrl = githubUrl;
    project.liveUrl = liveUrl;
    project.category = category;
    project.featured = featured;
    project.order = order;
    project.status = status;

    await project.save();

    return res.status(200).json({
      success: true,
      message: "Project updated successfully.",
      project,
    });
  } catch (error) {
    console.error(error);

    if (req.file?.path && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Delete Project
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Project ID.",
      });
    }

    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found.",
      });
    }

    if (project.imagePublicId) {
      await cloudinary.uploader.destroy(project.imagePublicId);
    }

    await Project.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Project deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};