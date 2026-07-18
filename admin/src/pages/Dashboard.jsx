import { useEffect, useState } from "react";
import {
  FiFolder,
  FiStar,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";
import toast from "react-hot-toast";

import DashboardLayout from "../components/layout/DashboardLayout";
import StatCard from "../components/dashboard/StatCard";
import { getProjects } from "../services/projectService";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data.projects);
    } catch (error) {
      toast.error("Failed to load dashboard.");
    } finally {
      setLoading(false);
    }
  };

  const totalProjects = projects.length;

  const featuredProjects = projects.filter(
    (project) => project.featured
  ).length;

  const completedProjects = projects.filter(
    (project) => project.status === "Completed"
  ).length;

  const inProgressProjects = projects.filter(
    (project) => project.status === "In Progress"
  ).length;

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-white">
            Dashboard
          </h1>

          <p className="mt-2 text-slate-400">
            Welcome back! Here's an overview of your portfolio.
          </p>
        </div>

        {/* Stats */}
        {loading ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-slate-400 backdrop-blur-xl">
            Loading dashboard...
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              title="Total Projects"
              value={totalProjects}
              icon={<FiFolder />}
              color="from-cyan-500 to-blue-600"
            />

            <StatCard
              title="Featured"
              value={featuredProjects}
              icon={<FiStar />}
              color="from-yellow-400 to-orange-500"
            />

            <StatCard
              title="Completed"
              value={completedProjects}
              icon={<FiCheckCircle />}
              color="from-emerald-500 to-green-600"
            />

            <StatCard
              title="In Progress"
              value={inProgressProjects}
              icon={<FiClock />}
              color="from-violet-500 to-purple-600"
            />
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;