import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import toast from "react-hot-toast";

import DashboardLayout from "../components/layout/DashboardLayout";
import ProjectTable from "../components/project/ProjectTable";
import Modal from "../components/ui/Modal";

import {
  getProjects,
  deleteProject,
} from "../services/projectService";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedProject, setSelectedProject] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data.projects);
    } catch (error) {
      toast.error("Failed to load projects.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (project) => {
    setSelectedProject(project);
  };

  const handleDelete = async () => {
    if (!selectedProject) return;

    try {
      setDeleteLoading(true);

      const data = await deleteProject(selectedProject._id);

      toast.success(data.message);

      setProjects((prev) =>
        prev.filter((project) => project._id !== selectedProject._id)
      );

      setSelectedProject(null);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to delete project."
      );
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Header */}

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white">
              Projects
            </h1>

            <p className="mt-2 text-slate-400">
              Manage your portfolio projects.
            </p>
          </div>

          <Link
            to="/projects/add"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white transition hover:scale-105"
          >
            <FiPlus />
            Add Project
          </Link>
        </div>

        {/* Table */}

        {loading ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center text-slate-400 backdrop-blur-xl">
            Loading Projects...
          </div>
        ) : (
          <ProjectTable
            projects={projects}
            onDelete={handleDeleteClick}
          />
        )}

        {/* Delete Modal */}

        <Modal
          open={selectedProject !== null}
          onClose={() => {
            if (!deleteLoading) {
              setSelectedProject(null);
            }
          }}
          title="Delete Project"
        >
          <p className="text-slate-300 leading-7">
            Are you sure you want to permanently delete
            <span className="font-semibold text-white">
              {" "}
              "{selectedProject?.title}"
            </span>
            ?
          </p>

          <div className="mt-8 flex justify-end gap-4">

            <button
              disabled={deleteLoading}
              onClick={() => setSelectedProject(null)}
              className="rounded-xl border border-white/10 px-5 py-2 text-white transition hover:bg-white/10 disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              disabled={deleteLoading}
              onClick={handleDelete}
              className="rounded-xl bg-red-600 px-5 py-2 font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
            >
              {deleteLoading ? "Deleting..." : "Delete"}
            </button>

          </div>
        </Modal>

      </div>
    </DashboardLayout>
  );
};

export default Projects;