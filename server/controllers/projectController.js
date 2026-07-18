import Project from "../models/projectModel.js";
import mongoose from "mongoose";
import cloudinary from "../config/cloudinary.js";
import fs from "fs";

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

    // Delete image from local uploads folder
    fs.unlinkSync(req.file.path);

    // Convert techStack string to array
    const techStackArray = techStack
      ? techStack.split(",").map((tech) => tech.trim())
      : [];

    // Create project
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
    console.error(error.message);

    // Delete uploaded file if an error occurs before cleanup
    if (req.file?.path && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

//get all projects
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

//get project by id
export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;

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



// update project
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

    let image = project.image;
    let imagePublicId = project.imagePublicId;
    if (req.file) {
      // Upload new image
      const uploadResult = await cloudinary.uploader.upload(req.file.path, {
        folder: "Portfolio_Projects",
      });

      // Delete local file
      fs.unlinkSync(req.file.path);

      // Delete old image from Cloudinary
      if (project.imagePublicId) {
        await cloudinary.uploader.destroy(project.imagePublicId);
      }

      // Update image details
      image = uploadResult.secure_url;
      imagePublicId = uploadResult.public_id;
    }
    const techStackArray = techStack
      ? techStack.split(",").map((tech) => tech.trim())
      : project.techStack;
    project.title = title || project.title;
    project.description = description || project.description;
    project.image = image;
    project.imagePublicId = imagePublicId;
    project.techStack = techStackArray;
    project.githubUrl = githubUrl || project.githubUrl;
    project.liveUrl = liveUrl || project.liveUrl;
    project.category = category || project.category;
    project.featured = featured ?? project.featured;
    project.order = order ?? project.order;
    project.status = status || project.status;

    await project.save();
    return res.status(200).json({
      success: true,
      message: "Project updated successfully.",
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
//delete project
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

    // Delete image from Cloudinary
    if (project.imagePublicId) {
      await cloudinary.uploader.destroy(project.imagePublicId);
    }

    // Delete project from MongoDB
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