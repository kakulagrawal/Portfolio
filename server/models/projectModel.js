import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      required: true,
    },
    imagePublicId: {
      type: String,
      required: true,
    },

    techStack: [
      {
        type: String,
      },
    ],

    githubUrl: {
      type: String,
      required: true,
    },

    liveUrl: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      enum: ["Frontend", "Backend", "Full Stack", "Mobile", "AI/ML", "Other"],
      default: "Full Stack",
    },

    featured: {
      type: Boolean,
      default: false,
    },

    order: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["Completed", "In Progress"],
      default: "Completed",
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;