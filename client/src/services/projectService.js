import axiosInstance from "../utils/axiosInstance";


export const getProjects = async () => {

  try {

    const response = await axiosInstance.get("/projects");

    console.log("Projects API Response:", response.data);

    return response.data.projects;

  } catch (error) {

    console.error(
      "Failed to fetch projects:",
      error.response?.data || error.message
    );

    return [];

  }

};