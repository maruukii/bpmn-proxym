import { FormMetadata, UseFormsQueryProps } from "../../types/apis/bpmn-form";
import { axiosImage,axiosInstance } from "../config/axiosInstance";

export const getForms= async ({ filter,includeHistoryModels,modelType }: UseFormsQueryProps): Promise<FormMetadata[]> => {
    const { data } = await axiosInstance.get(`/configuration/modeler/rest/models?filter=${filter}&includeHistoryModels=${includeHistoryModels}&modelType=${modelType}`);
    return data?.data;
  };
  export const getThumbnail= async ( formId:string ): Promise<Blob> => {
    const { data } = await axiosImage.get(`/configuration/modeler/rest/models/${formId}/thumbnail`,{ responseType: "blob"});
    return data;
  };