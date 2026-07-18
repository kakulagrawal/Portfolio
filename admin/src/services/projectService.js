import axiosInstance from "../utils/axiosInstance";

export const getProjects = async () => {
  const response = await axiosInstance.get("/projects");
  return response.data;
};

export const getProjectById = async (id) => {
  const response = await axiosInstance.get(`/projects/${id}`);
  return response.data;
};

export const createProject = async (formData) => {
  const response = await axiosInstance.post("/projects", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const updateProject = async (id, formData) => {
  const response = await axiosInstance.put(`/projects/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const deleteProject = async (id) => {
  const response = await axiosInstance.delete(`/projects/${id}`);
  return response.data;
};