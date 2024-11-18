import {apiClient} from  "./config"


// user registration
export const apiSignup = async (payload) => {
    return await apiClient.post("/users/register",payload)
}
//user login
export const apiLogin = async (payload) => {
    return apiClient.post("/users/login",payload)
}
//user profile
export const getUserData = async () => {
    return await apiClient.get("/users/me"); 
  };
//update user profile
export const updateUserProfile = (userID, profileData) => {
  return apiClient.patch(`/users/me/${userID}`, profileData);
};
//therapist registration
export const apiTherapistSignup = async (payload) => {
  console.log(payload)
    return await apiClient.post("/therapist/register", payload);
};

//therapist login
export const apiTherapistLogin = async (payload) => {
    return apiClient.post("/therapist/login", payload);
};

//therapist profile
export const getTherapistData = async () => {
    return await apiClient.get("/therapist/me");
};
//update therapist profile
export const updateTherapistProfile = async (id, profileData) => {
    try {
      const response = await apiClient.patch(`therapist/me/${id}`, profileData);
      return response;
    } catch (error) {
      console.error("Error updating therapist profile:", error);
      throw error;
    }
  };














