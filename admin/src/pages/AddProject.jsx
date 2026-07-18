import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import DashboardLayout from "../components/layout/DashboardLayout";
import ProjectForm from "../components/project/ProjectForm";
import { createProject } from "../services/projectService";

const AddProject = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData, image) => {
    try {
      setLoading(true);

      const data = new FormData();

      data.append("title", formData.title.trim());
      data.append("description", formData.description.trim());

      data.append(
        "techStack",
        JSON.stringify(
          formData.techStack
            .split(",")
            .map((tech) => tech.trim())
            .filter(Boolean)
        )
      );

      data.append("githubUrl", formData.githubUrl.trim());
      data.append("liveUrl", formData.liveUrl.trim());

      data.append("category", formData.category);
      data.append("status", formData.status);
      data.append("featured", formData.featured);
      data.append("order", formData.order);

      if (image) {
        data.append("image", image);
      }

      const response = await createProject(data);

      toast.success(
        response.message || "Project created successfully."
      );

      navigate("/projects");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to create project."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-5xl">
        <ProjectForm
          submitText="Create Project"
          loading={loading}
          onSubmit={handleSubmit}
        />
      </div>
    </DashboardLayout>
  );
};

export default AddProject;
