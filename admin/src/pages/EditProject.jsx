import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import DashboardLayout from "../components/layout/DashboardLayout";
import ProjectForm from "../components/project/ProjectForm";
import {
  getProjectById,
  updateProject,
} from "../services/projectService";

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = async () => {
    try {
      setPageLoading(true);

      const response = await getProjectById(id);

      setProject(response.project);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch project."
      );

      navigate("/projects");
    } finally {
      setPageLoading(false);
    }
  };

  const handleSubmit = async (formData, image) => {
    try {
      setLoading(true);

      const data = new FormData();

      data.append("title", formData.title.trim());

      data.append(
        "description",
        formData.description.trim()
      );

      data.append(
        "techStack",
        JSON.stringify(
          formData.techStack
            .split(",")
            .map((tech) => tech.trim())
            .filter(Boolean)
        )
      );

      data.append(
        "githubUrl",
        formData.githubUrl.trim()
      );

      data.append(
        "liveUrl",
        formData.liveUrl.trim()
      );

      data.append("category", formData.category);
      data.append("status", formData.status);
      data.append("featured", formData.featured);
      data.append("order", formData.order);

      if (image) {
        data.append("image", image);
      }

      const response = await updateProject(id, data);

      toast.success(
        response.message ||
          "Project updated successfully."
      );

      navigate("/projects");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to update project."
      );
    } finally {
      setLoading(false);
    }
  };

  if (pageLoading) {
    return (
      <DashboardLayout>
        <div className="flex h-96 items-center justify-center">
          <p className="text-lg text-slate-300">
            Loading project...
          </p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-5xl">
        <ProjectForm
          initialData={project}
          loading={loading}
          submitText="Update Project"
          onSubmit={handleSubmit}
        />
      </div>
    </DashboardLayout>
  );
};

export default EditProject;