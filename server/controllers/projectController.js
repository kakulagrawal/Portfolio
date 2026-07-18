import Project from "../models/projectModel.js";
import uploadToCloudinary from "../utils/uploadToCloudinary.js";

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

    const image = req.file;

    if (!title || !description || !githubUrl || !image) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const uploadResult = await uploadToCloudinary(image);

    const project = await Project.create({
      title,
      description,
      image: uploadResult.secure_url,
      techStack,
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
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};