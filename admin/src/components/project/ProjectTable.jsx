import { Link } from "react-router-dom";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const ProjectTable = ({ projects, onDelete }) => {
  if (projects.length === 0) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl">
        <h2 className="text-2xl font-semibold text-white">
          No Projects Found
        </h2>

        <p className="mt-2 text-slate-400">
          Add your first project to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead className="border-b border-white/10">
            <tr className="text-left text-sm uppercase tracking-wider text-slate-400">
              <th className="px-6 py-5">Image</th>
              <th className="px-6 py-5">Title</th>
              <th className="px-6 py-5">Category</th>
              <th className="px-6 py-5">Status</th>
              <th className="px-6 py-5">Featured</th>
              <th className="px-6 py-5">Order</th>
              <th className="px-6 py-5">Actions</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <tr
                key={project._id}
                className="border-b border-white/5 transition hover:bg-white/5"
              >
                <td className="px-6 py-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-16 w-24 rounded-lg object-cover"
                  />
                </td>

                <td className="px-6 py-4 font-semibold text-white">
                  {project.title}
                </td>

                <td className="px-6 py-4 text-slate-300">
                  {project.category}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  {project.featured ? (
                    <span className="font-semibold text-green-400">
                      Yes
                    </span>
                  ) : (
                    <span className="text-slate-400">
                      No
                    </span>
                  )}
                </td>

                <td className="px-6 py-4 text-slate-300">
                  {project.order}
                </td>

                <td className="px-6 py-4">
                  <div className="flex gap-3">
                    <Link
                      to={`/projects/edit/${project._id}`}
                      className="rounded-lg bg-cyan-500/20 p-2 text-cyan-400 transition hover:bg-cyan-500 hover:text-white"
                    >
                      <FiEdit2 />
                    </Link>

                    <button
                      onClick={() => onDelete(project)}
                      className="rounded-lg bg-red-500/20 p-2 text-red-400 transition hover:bg-red-500 hover:text-white"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectTable;