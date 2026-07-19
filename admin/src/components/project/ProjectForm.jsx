import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Input from "../ui/Input.jsx";
import TextArea from "../ui/TextArea.jsx";

const categories = [
  "Web Development",
  "Mobile Development",
  "Backend",
  "Frontend",
  "Full Stack",
  "AI/ML",
  "Other",
];

const statuses = ["Completed", "In Progress"];

const ProjectForm = ({
  initialData = {},
  onSubmit,
  loading = false,
  submitText = "Save Project",
}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    techStack: "",
    githubUrl: "",
    liveUrl: "",
    category: "Full Stack",
    status: "Completed",
    featured: false,
    order: 0,
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (Object.keys(initialData).length === 0) return;

    setFormData({
      title: initialData.title || "",
      description: initialData.description || "",
      techStack: Array.isArray(initialData.techStack)
        ? initialData.techStack.join(", ")
        : initialData.techStack || "",
      githubUrl: initialData.githubUrl || "",
      liveUrl: initialData.liveUrl || "",
      category: initialData.category || "Full Stack",
      status: initialData.status || "Completed",
      featured: initialData.featured || false,
      order: initialData.order ?? 0,
    });

    setPreview(initialData.image || "");
    setImage(null);
  }, [initialData]);

  useEffect(() => {
    return () => {
      if (preview && preview.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (preview && preview.startsWith("blob:")) {
      URL.revokeObjectURL(preview);
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      return toast.error("Title is required.");
    }

    if (!formData.description.trim()) {
      return toast.error("Description is required.");
    }

    if (!preview) {
      return toast.error("Please upload a project image.");
    }

    onSubmit(formData, image);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <div>
        <h2 className="text-3xl font-bold text-white">
          Project Details
        </h2>

        <p className="mt-2 text-slate-400">
          Fill in the details below.
        </p>
      </div>

      <Input
        label="Project Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <TextArea
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <Input
        label="Tech Stack"
        name="techStack"
        value={formData.techStack}
        onChange={handleChange}
        placeholder="React, Node.js, MongoDB..."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Input
          label="GitHub URL"
          name="githubUrl"
          type="url"
          value={formData.githubUrl}
          onChange={handleChange}
        />

        <Input
          label="Live URL"
          name="liveUrl"
          type="url"
          value={formData.liveUrl}
          onChange={handleChange}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">
            Category
          </label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">
            Status
          </label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-500"
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <Input
          label="Display Order"
          type="number"
          name="order"
          value={formData.order}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center gap-3">
        <input
          id="featured"
          type="checkbox"
          name="featured"
          checked={formData.featured}
          onChange={handleChange}
          className="h-5 w-5"
        />

        <label htmlFor="featured" className="text-white">
          Featured Project
        </label>
      </div>

      <div className="space-y-3">
        <label className="block text-sm font-medium text-slate-300">
          Project Image
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300"
        />

        {preview && (
          <img
            src={preview}
            alt="Project Preview"
            className="mt-4 h-64 w-full rounded-2xl border border-white/10 object-cover"
          />
        )}
      </div>

      <div className="flex justify-end gap-4">
        <Link
          to="/projects"
          className="rounded-xl border border-white/10 px-6 py-3 text-white transition hover:bg-white/10"
        >
          Cancel
        </Link>

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-semibold text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Saving..." : submitText}
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;