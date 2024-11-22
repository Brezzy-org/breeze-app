import { apiClient } from "./config";

// Get all moods
export const apiGetMoods = async () => apiClient.get("/moods");

// Add a new mood
export const apiAddMood = async (payload) => {
    console.log(payload);
    return apiClient.post("/moods", payload);
};

// Get a single mood by ID
export const apiGetSingleMood = async (id) => {
    return apiClient.get(`/moods/${id}`);
};

// Edit a mood
export const apiEditMood = async (id, payload) => {
    return apiClient.patch(`/moods/${id}`, payload);
};

// Delete a mood
export const apiDeleteMood = async (id) => {
    return apiClient.delete(`/moods/${id}`);
};

// Create a new blog post
export const apiCreateBlogPost = async (payload) => {
    try {
        console.log(payload); // Log the payload for debugging
        const response = await apiClient.post("/blogs", payload); // Send POST request to the /therapists/blogs endpoint
        return response.data; // Return the response data
    } catch (error) {
        console.error("Error creating blog post:", error); // Log any error that occurs
        throw error; // Optionally rethrow the error for further handling
    }
};

// Get all blogs for a specific therapist
export const apiGetBlogsByTherapist = async () => {
    try {
        const response = await apiClient.get("/blogs/me");
        return response.data; // Return the list of blogs for the therapist
    } catch (error) {
        console.error("Error fetching blogs for therapist:", error);
        throw error;
    }
};

// Get all blogs for users

export const getAllBlogs = async () => {
    try {
      const response = await api.get('/blogs'); // Assuming this endpoint returns an array
      return response.data; // Assuming the data contains the blogs array directly
    } catch (error) {
      throw error;
    }
  };

// Edit a blog post
export const apiEditBlogPost = async (id, payload) => {
    try {
        const response = await apiClient.patch(`blogs/${id}`, payload);
        return response.data; // Return updated blog post data
    } catch (error) {
        console.error("Error editing blog post:", error);
        throw error;
    }
};

// Delete a blog post
export const apiDeleteBlogPost = async (id) => {
    try {
        await apiClient.delete(`/blogs/${id}`);
        return { message: "Blog deleted successfully" }; // Return a success message
    } catch (error) {
        console.error("Error deleting blog post:", error);
        throw error;
    }
};