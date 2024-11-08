import { apiClient } from "./config";

export const apiGetProducts = async () => apiClient.get ("/products" );

export const apiAddMood = async (payload) => apiClient.post("/moods",payload);
    

export const apiGetSingleProduct = async (id) =>{
    return apiClient.get (`/moods/${id}`);
};

// edit advert
export const apiEditProduct = async (id, payload) => {
    return apiClient.patch(`/adverts/${id}`, payload)
};



// delete advert
export const apiDeleteProduct = async (id) => {
    return apiClient.delete(`/adverts/${id}`)
};
