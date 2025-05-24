import { axiosImage } from "../config/axiosInstance";

export const fetchThumbnail = async (id: string): Promise<string | null> => {
  try {
    const response = await axiosImage.get(`/configuration/modeler/rest/models/${id}/thumbnail`, {
      responseType: "blob",
    });

    return URL.createObjectURL(response.data);
  } catch (error) {
    console.error("Error fetching thumbnail:", error);
    return null; 
  }
};