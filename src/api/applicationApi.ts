import {axiosInstance} from "../config/axiosInstance";

export const getApplications= async (): Promise<ApplicationMetadata[]> => {
    const { data } = await axiosInstance.get(`/configuration/modeler/applications`);

    return data
  };

